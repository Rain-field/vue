<template>
  <div class="tl">
    <Input
      type="text"
      placeholder="搜索"
      search
      id="search"
      v-model="inputFilter"
      @on-search="filterData()"
    />
    <Table stripe :loading="loading" :columns="columns" :data="data1"></Table>
    <Page
      :total="total"
      :page-size="limit"
      show-sizer
      show-total
      transfer
      @on-change="changPage"
      @on-page-size-change="changePageSize"
    />
    <Modal v-model="modal" title="信息修改" ok-text="确定修改" @on-ok="ok('formValidate')">
      <Form ref="formValidate" :rules="ruleValidate" :model="formTop" label-position="top">
        <FormItem label="姓名" prop="name">
          <Input v-model="formTop.name"></Input>
        </FormItem>
        <FormItem label="年龄" prop="age">
          <Input v-model="formTop.age"></Input>
        </FormItem>
        <FormItem label="性别" prop="sex">
          <Input v-model="formTop.sex"></Input>
        </FormItem>
        <FormItem label="电话" prop="tel">
          <Input v-model="formTop.tel"></Input>
        </FormItem>
        <FormItem label="邮箱" prop="email">
          <Input v-model="formTop.email"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "Tl",
  inject: ["reload"],
  data() {
    return {
      columns: [
        {
          title: "姓名",
          key: "name",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "性别",
          key: "sex"
        },
        {
          title: "电话",
          key: "tel"
        },
        {
          title: "邮箱",
          key: "email"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.edit(params.row);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.row.id);
                    }
                  }
                },
                "刪除"
              )
            ]);
          }
        }
      ],
      data: [], //请求到的所有数据
      dataOrign: [], //原始数据，主要用于筛选初始化后恢复原来的数据
      data1: [], //表格的数据
      loading: true, //表格加载
      inputFilter: "", //搜索值
      modal: false, //对话框显示隐藏
      formTop: {
        //表单数据
      },
      formValidate: {},
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ]
      },
      total: 0, //分页总数
      limit: 10 //每页条数
    };
  },
  methods: {
    // 编辑
    edit(item) {
      //在编辑中获取数据
      this.$axios
        .get("http://localhost:3000/users/" + item.id)
        .then(response => {
          this.formTop = response.data;
        })
        .then(() => {
          this.modal = true;
        });
      // console.log(this.filterData('80'))
      //   this.$Modal.info({
      //     title: "User Info",
      //     content: `Name：${item.name}<br>Age：${
      //       item.age
      //     }<br>sex：${item.sex}`
      //   });
    },
    // 删除
    remove(index) {
      this.$axios
        .delete("http://localhost:3000/users/" + index)
        .then(result => {
          this.$Message.success("删除成功");
        })
        .then(() => {
          this.reload();
          // this.showData();//使用此方法也可以刷新当前页面数据
        });
    },
    // 数据展示
    showData() {
      // 请求获取数据
      this.$axios.get("http://localhost:3000/users").then(response => {
        this.loading = false; //加载中
        this.data = response.data; //获取所有的数据
        this.dataOrign = JSON.parse(JSON.stringify(response.data)); //保存原始数据
        this.dataChange(this.data); //传入总数据
      });
    },
    //因为筛选数据后还要重新调用一次所以单独抽离出来
    dataChange(res) {
      // 如果获取数据的总条数小于每页的条数，就把总数据赋值给表格数据，否则就根据每页条数进行分页
      this.total = res.length; //获取数据条数
      if (this.total < this.limit) {
        this.data1 = res;
      } else {
        this.data1 = res.slice(0, this.limit);
      }
    },
    // 确认编辑
    ok(name) {
      //   this.$Message.info("点击了确定");
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$axios
            .patch(
              "http://localhost:3000/users/" + this.formTop.id,
              this.formTop
            )
            .then(response => {
              this.$Message.success("信息修改成功!");
              this.showData();
            });
        } else {
          this.$Message.error("信息修改失败!");
        }
      });
    },
    // 改变页码(page为改变后的页码)
    changPage(page) {
      var _start = (page - 1) * this.limit;
      var _end = page * this.limit;
      this.data1 = this.data.slice(_start, _end);
    },
    changePageSize(pageSize) {
      // console.log(pageSize);
      this.limit = pageSize;
      this.showData();
    },
    // 数据过滤
    filterData() {
      let value = this.inputFilter;
      //如果输入值为空则保持为原数据
      if (value == "") {
        this.dataChange(this.dataOrign);
        this.data = this.dataOrign//让新的总数据(data1)与原始数据(dataOrign)保持一致
      } else {
        this.data = this.data.filter(function(item) {
          return (
            item.name.match(value) ||
            item.sex.match(value) ||
            String(item.age).match(value) ||
            item.tel.match(value) ||
            item.email.match(value)
          );
        });
        this.dataChange(this.data);
      }
    }
  },
  created() {
    this.showData();
  }
};
</script>

<style lang="">
.ivu-table th {
  background: rgb(184, 233, 250);
}
</style>

<style scoped>
#search {
  margin: 10px 0;
  width: 100px;
}
</style>

<template>
  <div class="home2">
    <Table border :columns="columns" :data="data1"></Table>
    <Modal
      v-model="modal"
      title="信息修改"
      @on-ok="ok('formValidate')"
    >
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
  name: "Home2",
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
                      this.show(params.row);
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
      data1: [],
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
      }
    };
  },
  methods: {
    show(item) {
      //在编辑中获取数据
      this.$axios
        .get("http://localhost:3000/users/" + item.id)
        .then(response => {
          this.formTop = response.data;
        })
        .then(() => {
          this.modal = true;
        });
      //   this.$Modal.info({
      //     title: "User Info",
      //     content: `Name：${item.name}<br>Age：${
      //       item.age
      //     }<br>sex：${item.sex}`
      //   });
    },
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
    showData() {
      this.$axios.get("http://localhost:3000/users").then(response => {
        this.data1 = response.data;
      });
    },
    ok(name) {
      //   this.$Message.info("点击了确定");
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$axios.patch("http://localhost:3000/users/"+ this.formTop.id,this.formTop).then( response => {
            this.$Message.success("信息修改成功!");
            this.showData();
          })
        } else {
          this.$Message.error("信息修改失败!");
        }
      });
    }
  },
  created() {
    this.showData();
  }
};
</script>

<style scoped>
</style>

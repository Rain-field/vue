<template>
  <Layout>
    <div id="cart">
      <Table
        border
        ref="selection"
        :columns="columns7"
        :data="data6"
        @on-selection-change="selectChange"
      ></Table>
      <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      value1: 12,
      columns7: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "Name",
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
          title: "Number",
          align:"center",
          key: "num",
          render: (h, params) => {
            return h("InputNumber", {
              max: "20",
              props:{
                  value:this.data6[params.index].num
              },
              on: {
                'on-change': (value) => {
                this.data6[params.index].num = value;
                }
              }
            });
          }
        },
        {
          title: "Address",
          key: "address"
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
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      data6: [
        {
          name: "John Brown",
          num:1,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          num:2,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          num:1,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          num:4,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  methods: {
    remove(index) {
      this.data6.splice(index, 1);
    },
    selectChange(selection) {
      console.log(selection);
      console.log(this.data6);
    }
  }
};
</script>

<style scoped>
#cart {
  width: 1240px;
  margin: auto;
}
</style>


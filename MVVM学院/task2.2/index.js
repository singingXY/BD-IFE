
    var MyApp = san.defineComponent({
      template: '<div>'
        + '<button on-click="addData">添加</button>'
        + '<table class= "table" > '
        + '  <tr><td>姓名</td><td>审核状态</td><td>操作</td></tr> '
        + '  <tr s-for="data,index in data"> '
        + '    <td>{{ data.name }}</td><td>{{ data.status | status }}</td> '
        + '    <td> '
        + '      <template s-if="data.status>0"><button on-click="removeData(index)">删除</button></template> '
        + '      <template s-else><button on-click="reviewData(index)">审核</button></template> '
        + '    </td>'
        + '  </tr>'
        + '</table></div> '
      ,
      initData: function () {
        return {
          data: [{
            name: '张三',
            status: 1
          },
          {
            name: '李四',
            status: 2
          },
          {
            name: '王五',
            status: 0
          },
          {
            name: '赵六',
            status: 0
          },
          {
            name: '孙琪',
            status: 0
          }]
        };
      },
      addData: function () {
        this.data.push('data', {
          name: '匿名',
          status: 0
        })
      },
      removeData: function (index) {
        //通过数据项的索引移除一条数据
        this.data.removeAt('data', index);
      },
      reviewData: function (index) {
        this.data.get('data', index)
        this.data.set('data[' + index + '].status', 1);
      },
      filters: {
        status: function (value) {
          let review;
          if (value == 1) {
            review = '合格'
          } else if (value == 2) {
            review = '不合格'
          } else {
            review = '待审核'
          }
          return review
        }
      }
    });
    var myApp = new MyApp();
    myApp.attach(document.body);
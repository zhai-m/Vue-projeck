<template>
  <div>
    <!--添加头部信息-->
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">品牌管理</h3>
      </div>
      <div class="panel-body form-control">
        panel-form-control
      </div>
    </div>

    <!--渲染页面-->
    <div>
      <label>id:
        <input type="text" v-model="id">
      </label>
      <label>name:
        <input type="text" v-model="name">
      </label>
      <input type="button" value="添加" @click="add" class="btn btn-primary">
      <label>搜索关键字:
        <input type="text" class="form-control" v-model="keywords">
      </label>
    </div>
    <div>
      <table class="table table-bordered table-hover table-striped">
        <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>cTime</th>
          <th>Operation</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in  search(keywords)" :key="item.id">
          <td>{{item.id }}</td>
          <td>{{item.name }}</td>
          <td>{{item.cTime }}</td>
          <td><a href="" @click.prevent="del(item.id)">删除</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
    export default {
        name: "Test06",
        data() {
            return {
                id: '',
                name: '',
                keywords: '',
                user: [
                    {id: 1, name: '张三', cTime: new Date()},
                    {id: 2, name: '李四', cTime: new Date()},
                    {id: 3, name: '王五', cTime: new Date()},
                    {id: 4, name: '赵六', cTime: new Date()},
                    {id: 5, name: '李七', cTime: new Date()}
                ]
            }
        },
        methods: {
            add() {
                //添加到use中
                this.user.push({id: this.id, name: this.name, cTime: new Date()})
                //添加完成后清空文本框内容
                this.id = this.name = ''
            },
            del(id) {
                debugger
                //利用some方法循环数组，返回true即可停止循环
                // this.user.some((item, i) => {
                //     if (item.id == id) {
                //         // 移除记录 1代表移除一条记录
                //         this.user.slice(i, 1);
                //         //返回true终止循环
                //         return true;
                //     }
                // })
                //通过findIndex方法来获取要删除记录的index
                var index = this.user.findIndex(item => {
                    if (item.id == id) return true;
                })
                //通过splice方法来移除
                this.user.splice(index, 1)

            },
            search(keywords) {
                // debugger
                // 创建一个数组
                var newList = [];
                this.user.forEach(item => {
                    if (item.name.indexOf(keywords) != -1) {
                        newList.push(item)
                    }
                })
                //返回数组
                return newList

                // filter过滤
                //  return   this.user.filter(item =>{
                //        //includes 是否含有
                //        if (item.name.includes(keywords)){
                //            return item
                //        }
                //    })
            }
        }
    }
</script>

<style scoped>

</style>

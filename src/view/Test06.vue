<template>
  <div>
    <!--添加头部信息-->
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title" v-fontWeight="100">品牌管理</h3>
      </div>
      <div class="panel-body form-control">
        panel-form-control
      </div>
    </div>

    <!--查询条件-->
    <div>
      <label>
        id:<input type="text" v-model="id">
      </label>
      <label>
        name:<input type="text" v-model="name" @keyup.enter="add">
      </label>
      <input type="button" value="添加" @click="add" class="btn btn-primary">
      <label>
        搜索关键字:<input type="text" class="form-control" v-model="keywords" v-focus v-color="'blue'">
      </label>
    </div>

    <!--渲染页面-->
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
          <td>{{item.cTime | msgDateFormat('yyyy-mm-dd hh-mi-sss') }}</td>
          <td><a href="" @click.prevent="del(item.id)">删除</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
    import Vue from 'vue'
    //定义全局指令 v-focus
    Vue.directive("focus", {
        bind: function (el) {

        },
        inserted: function (el) {
            el.focus()
        },
        update: function (el) {

        }
    })
    //定义一个全局样式 color样式的指令
    Vue.directive("color", {
        bind: function (el, binding) {
            el.style.color = binding.value
        }
    })
    // Vue.directive("color",{
    //     bind:function (el) {
    //       el.style.color='red'
    //     }
    // })
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
        },
        filters: { //听过局部过滤器来实现
            msgDateFormat: function (msg, pattern = '') {
                //将字符串转换成date类型
                var mt = new Date(msg)
                //获取年
                var y = mt.getFullYear()
                //获取月f 从0开始 所以要+1
                var m = mt.getMonth() + 1
                //获取天
                var d = mt.getDate()
                //拼接需要的格式
                if (pattern === 'yyyy-mm-dd') {
                    return y + "-" + m + "-" + d
                }
                /*获取时*/
                var h = mt.getHours().toString().padStart(2, "0")
                /*获取分*/
                var mi = mt.getMinutes().toString().padStart(2, "0")
                /*获取秒*/
                var s = mt.getSeconds().toString().padStart(2, "0")
                /*拼接需要的格式*/
                return y + "-" + m + "-" + d + h + ":" + mi + ":" + s
            }
            // ,
            // directives:{
            //     "fontWeight":{
            //         bind:function (el,binding) {
            //             el.style.fontWeight=binding.value
            //         }
            //     }
            // }
        }
    }
</script>

<style scoped>

</style>

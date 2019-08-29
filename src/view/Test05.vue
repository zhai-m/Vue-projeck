<template>

  <!--v-if，v-show和v-for指令-->
  <!--    <h2 v-if="flag">v-if&#45;&#45;flag被使用</h2>-->
  <!--    <h2 v-show="flag">v-show&#45;&#45;flag被使用</h2>-->

  <!--针对数循环v-for -->
  <!--      <p>{{ list[0] }}</p>-->
  <!--      <p>{{ list[1] }}</p>-->
  <!--      <p>{{ list[2] }}</p>-->
  <!--      <p>{{ list[3] }}</p>-->
  <!--      <p>{{ list[4] }}</p>-->

  <!--使用for循环遍历-->
  <!--    <p v-for="item in list">循环的内容：{{ item }}</p>-->
  <!--    <p v-for="(item,index) in list">索引值：{{ index }}循环的内容：{{ item }}</p>-->

  <!--对象数组，集合中的元素是数组 -->
  <!--  <p v-for="(user ,i) in  list">id:{{ user.id }} -&#45;&#45;名字:{{ user.name}}&#45;&#45; 索引：{{ i }}</p>-->

  <!--遍历对象身上的键值对和索引 -->
  <!--  <div>-->
  <!--    <template v-for="user in list">-->
  <!--      <p v-for="(val,key,i) in user"> 键：{{ key }} 值:{{ val }} 索引：{{ i }}</p>-->
  <!--      <p>下一行</p>-->
  <!--    </template>-->
  <!--  </div>-->

  <!--  <div>-->
  <!--    <p v-for="i in 10">{{ i }}</p>-->
  <!--  </div>-->

  <!--循环中key属性的使用-->
  <div>
    <label>
      id:
      <input type="text" v-model="id">
    </label>

    <label>
      name:
      <input type="text" v-model="name">
    </label>

  <input type="button" @click="add" value="添加">

    <p v-for="user in list" :key="user.id">
      <input type="checkbox">{{ user.id }} -- {{ user.name }}
    </p>

  </div>
</template>
<script>
    export default {
        name: "Test05",
        data() {
            return {
                id: '',
                name: '',
                list: [
                    {id: 1, name: '张三'},
                    {id: 2, name: '李四'},
                    {id: 3, name: '王五'},
                    {id: 4, name: '赵六'},
                    {id: 5, name: '李七'}
                ]
            }
        },
        methods:{
            add(){
                this.list.unshift({id:this.id, name:this.name})
            }
        }
    }

    // <!--遍历对象身上的键值对和索引 -->
    // export default {
    //     name: "Test05",
    //     data() {
    //         return {
    //             list: [
    //                 {id: 1, name: '张三'},
    //                 {id: 2, name: '李四'},
    //                 {id: 3, name: '王五'},
    //                 {id: 4, name: '赵六'},
    //                 {id: 5, name: '李七'}
    //             ]
    //         }
    //     }
    // }

    /*v-if，v-show和v-for指令*/
    // export default {
    //     name: "Test05",
    //     data(){
    //         return{
    //           list: [1,2,3,4,5,6]
    //         }
    //     }
    // }

</script>

<style scoped>

</style>

<template>
  <!--  <div>-->
  <!--    <my-com></my-com>-->
  <!--  </div>-->
  <!--  <div>-->
  <!--    <input type="button" value="show" @click="show">-->
  <!--    <h3>这是自定义的vue组件 {{ id }} -&#45;&#45; {{ name }}</h3>-->
  <!--  </div>-->
  <div id="app">
    <div>
      <!--复用3个 Vue 组件-->
      <App></App>
      <hr>
      <App></App>
      <hr>
      <App></App>
    </div>

    <div>
      <input type="button" value="加1" @click="increment">
      <h3>{{count}}</h3>
    </div>
  </div>

</template>

<script>
    import Vue from 'vue'
    // import App from "../App";
    /*第一种方式*/
    // var com1 = Vue.extend({
    //     template : "<h3>这是第一个vue组件</h3>"
    // })
    // Vue.component("myCom",com1);
    //
    // /*第二种方式*/
    // Vue.component("myCom",Vue.extend({
    //     template: "<div><h3>这是我们使用的另一个组件</h3><span>我是spend</span></div>"
    // }))
    // 声明的全局对象
    // 这是一个计数器的组件, 身上有个按钮,每当点击按钮,让 data 中的 count 值 +1
    // Vue.component({
    //     data: function () {
    //         return dataObj
    //     }
    // })

    export default {
        name: "Test11",
        data() {
            return {id: 1, name: '买买买'}; //返回一个data对象
        },
        methods: {
            // show(){
            //     console.log("show被调用了")
            // }
        }
    }
</script>

<style scoped>
</style>

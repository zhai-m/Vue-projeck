<template>
  <!--父组件传子组件-->
  <!--  <div>-->
  <!--    &lt;!&ndash;父组件的使用&ndash;&gt;-->
  <!--    <h1>父组件&#45;&#45;{{ msg }}</h1>-->
  <!--    &lt;!&ndash;子组件的使用&ndash;&gt;-->
  <!--    <com1 v-bind:parentmsg="msg"></com1>-->
  <!--  </div>-->

  <!--子组件穿父组件-->
  <div>
    <!--父组件的使用-->
    <h1>我是父组件: {{ msg }}</h1>
    <com1 v-on:focus="show"></com1>

    <div id="temp1">
      <h3>我是子组件</h3>
      <input type="button" value="调用父组件" @click="myclick">
    </div>

  </div>

</template>

<script>
    var com1 = {
        template: "#temp1",
        data() {
            return {sonmsg: {name: '哈哈哈哈', age: 18}};
        },
        methods: {
            myclick(){
                this.$emit('func',this.sonmsg)
            }
        }
    }

    export default {
        name: "Test13",
        data() {
            return {
                msg: null
            }
        },
        methods: {
            show(data) {
                this.msg = data
            }
        },
        components: {
            com1
        }
    }
</script>

<style scoped>

</style>

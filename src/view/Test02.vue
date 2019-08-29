<template>
  <div>

    <div class="inner" @click="divHandler">
      <!--.stop 防止冒泡，只走点击的触发事件-->
      <input type="button" value="点击" v-on:click.stop="btnHandler">
    </div>
    <br>
    <div>
      <a href="http://www.baidu.com" @click.prevent="baiduclick">上百度找答案</a>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Test02",
        data() {
            return {}
        },
        methods: {
            divHandler() {
                console.log('这是触发了 inner div 的点击事件')
            },
            btnHandler() {
                console.log('这是触发了 btn的点击事件')
            },
            baiduclick() {
                console.log("点击了 百度 触发事件")
            }
        }
    }
</script>

<style scoped>
  .inner {
    height: 150px;
    background-color: yellowgreen;
  }

  .outer {
    height: 150px;
    background-color: crimson;
  }
</style>

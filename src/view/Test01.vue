<template>
  <div id="app">
<!--    <h1>{{ message }}</h1>-->
<!--    <p v-text="message"></p>-->
<!--    <p v-text="message">-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
<!--    <p v-html="message"></p>-->

<!--    <input type="button" value="提交一" title="提交按钮">-->
<!--    <input type="button" value="提交二" v-bind:title="message">-->
<!--    <input type="button" value="提交三" :title="message">-->
<!--    <input type="button" value="提交四" :title="message + '88888888'">-->

<!--    <input type="button" value="点击触发" @click="show">-->
<!--    <input type="button" value="点击触发" v-on:click="show">-->


<!--        实现跑马灯-->
<!--    a.点击"加油"按钮绑定一个点击事件，使用v-on或者缩写:"@"-->
<!--    b.在按钮的事件处理函数中，写相关的业务逻辑代码：拿到 msg 字符串，然后 调用 字符串的 substring 来进行字符串的截取操作，把 第一个字符截取出来，放到最后一个位置即可；-->
<!--    为了实现点击下按钮，自动截取的功能，需要把 2 步骤中的代码，放到一个定时器中去；-->

    <input type="button" value="加油" @click="lang">
    <input type="button" value="低调" @click="stop">

    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
    export default {
        name: "Test01",
        data(){
            return{
                msg:'加油，小强，你最棒！！',
                intervalId: null
            }
        },
        methods: {
            lang() {
                if (this.intervalId != null) return;
                // 判断定时器有没有在运行，在运行 则直接返回。避免重复点击导致多个定时器同时生效。
                // this.intervalId != null  表示定时器里的内容不是空值，所以是在运行。

                this.intervalId = setInterval(() => {   // 注意箭头函数用法和特点，ES6再复习一下。
                    var start = this.msg.substring(0, 1)
                    // 获取到 后面的所有字符
                    var end = this.msg.substring(1)
                    // 重新拼接得到新的字符串，并赋值给 this.msg
                    this.msg = end + start
                }, 400)

                // 注意： VM实例，会监听自己身上 data 中所有数据的改变，
                // 只要数据一发生变化，就会自动把 最新的数据，从data 上同步到页面中去；
                // 【好处：程序员只需要关心数据，不需要考虑如何重新渲染DOM页面】
            },
            stop() { // 停止定时器
                clearInterval(this.intervalId)
                this.intervalId = null;
                // 每当清除了定时器之后，需要重新把 intervalId 置为 null
                // 否则下一次点击开启定时器时，定时器的值不是null，就无法运行新一轮定时器。

                //　疑问：　清除了定时器之后，　定时器的值是？？？
            }
        }
    }
    // export default {
    //     name: "Test01",
    //     data(){
    //         return{
    //             // message: "<h3>我是第一个路由</h3>"
    //             message: "message"
    //         }
    //     },
    //     methods:{
    //         show:function () {
    //             alert('hello')
    //         }
    //     }
    // }
</script>

<style scoped>

</style>

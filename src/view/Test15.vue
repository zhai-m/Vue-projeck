<template>
  <div>
    <input type="button" value="获取h3的值" @click="getElement">
    <h3 id="myh3" ref="myh3">我是h3</h3>
    <hr>
    <login id="mylogin"></login>
  </div>
</template>

<script>

  var login = {
      template:"<h3>我是组件h3</h3>",
      data() {
          return {
              msg: "ok"
          }
      },
      methods: {
          show() {
              console.log("执行了show方法")
          }
      }
  }

    export default {
        name: "Test15",
        data(){
            return{}
        },
        methods:{
            getElement(){
                /*通过$refs 获取属性值*/
              // console.log(this.$refs.myh3.innerHTML)
                console.log(this.$refs.mylogin.msg)
                this.$refs.mylogin.show()
            }
        },
        components:{
            login
        }
    }
</script>

<style scoped>

</style>

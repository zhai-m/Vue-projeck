<template>

<!--  <div>-->
<!--    <a href="" @click.prevent="flag=true">登录</a>-->
<!--    <a href="" @click.prevent="flag=false">注册</a>-->
<!--    &lt;!&ndash;注意： v-if v-else-if v-else 使用^_^ &ndash;&gt;-->
<!--    <login v-if="flag"></login>-->
<!--    <register v-else></register>-->
<!--  </div>-->
  <div>
    <a href="" @click.prevent="comName='login'">登录</a>
    <a href="" @click.prevent="comName='register'">注册</a>

  <transition mode="out-in">
    <component :is="comName"></component>
  </transition>

  </div>
</template>

<script>
    import Vue from 'vue'
    // 创建登录的组件
    Vue.component("login",{
        template: "<h3>这是一个登录LOGIN组件</h3>"
    })
    // 创建注册的组件
    Vue.component("register",{
        template: "<h3>这是一个注册组件</h3>"
    })

    export default {
        name: "Test12",
        data() {
            return {
                // flag: false
                comName: "login"
            }
        },
        methods: {}
    }
</script>

<style scoped>
  .v-leave-to{
    opacity: 0;
    transform: translateX(150px) ;
  }

  .v-enter-active,
  .v-leave-active{
    transition: all 1s ease;
  }
</style>

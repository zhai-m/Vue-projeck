<template>
    <div>
      this is a test page
      <router-link to='/'>返回Hello world</router-link><br>
      <ul>
        <li><router-link to='blog'>访问Test01页面:实现跑马灯效果</router-link></li>
        <li><router-link to='blog2'>访问Test02页面</router-link></li>
        <li><router-link to='blog3'>访问Test03页面</router-link></li>
        <li><router-link to='blog4'>访问Test04页面</router-link></li>
        <li><router-link to='blog5'>访问Test05页面</router-link></li>
        <li><router-link to='blog6'>综合小案例</router-link></li>
        <li><router-link to='blog7'>访问Test07页面:vue教程08过滤器的使用</router-link></li>
        <li><router-link to='blog8'>访问Test08页面:Vue教程(动画-基础入门)</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Test',
}
</script>

<style scoped>

</style>

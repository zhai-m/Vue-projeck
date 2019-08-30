<template>

  <div>
    <input type="button" value="开关" @click="flag=!flag">
    <transition name="mm">
      <h3 v-if="flag">这是一个开关</h3>
    </transition>
  </div>

</template>

<script>
    export default {
        name: "Test08",
        data (){
            return{
                flag: false
            }
        },
        methods:{}
    }
</script>

<style scoped>
  /*opacity 透明度 定义对应的样式*/
  .mm-enter,
  .mm-leave-to{
    opacity: 0;
    transform: translateX( 150px );
  }

  .mm-enter-active,
  .mm-leave-active{
    transition: all 1s ease;
  }

</style>

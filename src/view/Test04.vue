<template>
  <div>
    <!--基本使用-->
    <h1 class="red thin">vue中的样式设置1</h1>
    <!--听过v-bind绑定数组 v-bind 可简写为 “：”-- -->
    <h1 v-bind:class="['red','thin']">vue中的样式设置2</h1>
    <h1 :class="['red','thin']">vue中的样式设置3</h1>
    <!--绑定数组添加三目运算-->
    <h1 :class="['red','thin', flag? 'active':'']">vue中的样式设置4</h1>
    <!--绑定数组使用对象-->
    <h1 :class="['red','thin',{'active':flag}]">vue中的样式设置5</h1>
    <h1 :style="styleObject">这是style样式</h1>
    <h1 :style="[styleObject,styleObject1]">这是style样式</h1>
  </div>
</template>

<script>
    // vue样式处理
    export default {
        name: "Test04",
        data() {
            return {
                flag: true,
                styleObject: {color: 'red', 'font-weight': 200},
                styleObject1: {'font-style': 'italic'}
            }
        },
        methods: {}
    }
</script>

<style scoped>
  .red {
    color: red;
  }

  .thin {
    width: 200px;
  }

  .italic {
    font-style: italic;
  }

  .active {
    letter-spacing: 0.5cm;
  }
</style>

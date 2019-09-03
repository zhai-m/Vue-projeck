<template>

  <div>
    <input type="button" value="动画开关" @click="flag=!flag">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="ball" v-show="flag"></div>
    </transition>
  </div>

</template>

<script>
    export default {
        name: "Test09",
        data() {
            return {
                flag: false
            }
        },
        methods: {
            // el 表示要执行动画的那个DOM元素, 是原生的 js DOM 对象
            beforeEnter(el) {
                // 设置动画开始之前的初始位置
                el.style.transform = "translate(0,0)"
            },
            enter(el,done) {
                // 刷新动画效果
                el.offsetWidth;
                // 动画完成后的样式
                el.style.transform = "translate(550px, 350px)";
                // 动画的持续时间
                el.style.transition = "all 3s ease";
                // done 其实是 afterEnter() 的引用
                done();
            },
            afterEnter(el) {
                //改变状态
                this.flag = !this.flag
            }
        }
    }
</script>

<style scoped>
  /*opacity 透明度 定义对应的样式*/
  .ball {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
  }
</style>

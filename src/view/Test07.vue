<template>
  <!--过滤器的使用-->
  <!--  <p>{{ msg }}</p>-->

  <div>
    <!--通过管道符，填写自定义的过滤器-->
    <p>{{ msg | msgFilter("和西甲") | test}}</p>
    <p>{{ msg2 | msgFilter("和足球") | test}}</p>
  </div>


</template>

<script>
    import Vue from 'vue'
    /*创建过滤器方法*/
    Vue.filter("msgFilter", function (msg, msg1) {
        return msg.replace(/NBA/g, "世界杯" + msg1)
    })
    /*再创建一个过滤器*/
    Vue.filter("test", function (msg) {
        return msg + "****************"
    })
    export default {
        name: "Test07",
        data() {
            return {
                msg: "今日NBA,保罗换威少,哈哈...NBA新闻真多，大家一起关注NBA...",
                msg2: "今日中国篮球,姚明换威少,哈哈...中国篮球新闻真多，大家一起关注中国篮球..."
            }
        }
    }

</script>

<style scoped>

</style>

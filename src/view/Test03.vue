<template>
    <div>
     <input type="text" v-model="n1">

      <select v-model="opt">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input type="text" v-model="n2">

      <input type="button" value="=" v-on:click="calc">

      <input type="text" v-model="result">

    </div>
</template>

<script>
    export default {
        name: "Test03",
        data(){
            return{
                n1: 0,
                n2: 0,
                opt: 0,
                result: '+'
            }
        },
        methods:{
            calc(){ // 计算器算数的方法
                switch (this.opt) {
                    case '+':
                        this.result = parseInt(this.n1) + parseInt(this.n2)
                        break;
                    case '-':
                        this.result = parseInt(this.n1) - parseInt(this.n2)
                        break;
                    case '*':
                        this.result = parseInt(this.n1) * parseInt(this.n2)
                        break;
                    case '/':
                        this.result = parseInt(this.n1) / parseInt(this.n2)
                        break;
                }
                /*不正规写法*/
                // var codeStr = 'parseInt(this.n1) '+this.opt+' parseInt(this.n2)'
                // this.result = eval(codeStr)
            }
        }
    }
</script>

<style scoped>

</style>

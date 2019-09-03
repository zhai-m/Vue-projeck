<template>
  <div>
    <div>
      <label>
        id:<input type="text" v-model="id">
      </label>
      <label>
        name:<input type="text" v-model="name">
      </label>
      <label>
        <input type="button" value="添加" @click="add">
      </label>
    </div>
    <transition-group appear tag="ul">
      <li v-for="(item,i) in list" :key="item.id" @click="del(i)">
        {{ item.id}} --- {{ item.name }}
      </li>
    </transition-group>
  </div>
</template>

<script>
    export default {
        name: "Test10",
        data() {
            return {
                id: '',
                name: '',
                list: [
                    {id: 1, name: 'java'},
                    {id: 2, name: 'vue'},
                    {id: 3, name: 'php'},
                    {id: 4, name: 'mysql'}
                ]
            }
        },
        methods: {
            add(){
                this.list.push({id:this.id,name:this.name})
                this.id=this.name=''
            },
            del(i){
                this.list.splice(i,1)
            }
        }
    }
</script>

<style scoped>
  li {
    border: 1px dashed red;
    margin-top: 5px;
    line-height: 40px;
    padding-left: 10px;
  }

  /*鼠标划过的动画*/
  li:hover {
    background-color: aquamarine;
    transition: all 0.8s ease;
  }

  /*动画初始和结束的时候*/
  .v-enter,.v-leave-to{
    opacity: 0;
    transform: translateY(80px);
  }

  /*入场和离场*/
  .v-enter-active,.v-leave-active{
    transition: all 0.8s ease;
  }

  /**/
  .v-move{
    transition:  all 0.6s ease;
  }
  .v-leave-active{
    position: absolute;
  }
</style>

<template>
  <div>
<!--    <input type="text" v-model="firstname" @keyup="getfullname"> +-->
<!--    <input type="text" v-model="lastname" @keyup="getfullname"> =-->
<!--    <input type="text" v-model="fullname">-->
    <input type="text" v-model="firstname"> +
    <input type="text" v-model="lastname"> =
    <input type="text" v-model="fullname">

  </div>
</template>

<script>

    export default {
        name: "Test16",
        data() {
            return {
                firstname: '',
                lastname: '',
                fullname: ''
            }
        },
        // methods: {
        //     getfullname: function () {
        //         this.fullname = this.firstname + "-" + this.lastname
        //     }
        // }
        watch:{
            'firstname':function (to, from) {
                this.fullname = this.firstname + "-" + this.lastname
            },
            'lastname':function (to,from) {
                this.fullname = this.firstname + "-" + this.lastname
            }
        }
    }

</script>

<style scoped>

</style>

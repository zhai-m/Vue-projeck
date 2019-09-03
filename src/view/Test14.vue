<div id="app">


  <cmt-box @func="loadComments"></cmt-box>


  <ul class="list-group">
    <li class="list-group-item" v-for="item in list" :key="item.id">
      <span class="badge">评论人： {{ item.user }}</span>
      {{ item.content }}
    </li>
  </ul>
</div>
<template id="tmpl">
  <div>

    <div class="form-group">
      <label>评论人：</label>
      <input type="text" class="form-control" v-model="user">
    </div>

    <div class="form-group">
      <label>评论内容：</label>
      <textarea class="form-control" v-model="content"></textarea>
    </div>

    <div class="form-group">
      <input type="button" value="发表评论" class="btn btn-primary" @click="postComment">
    </div>

  </div>
</template>

<script>
    import Vue from 'vue'
    var commentBox = {
        data() {
            return {
                user: '',
                content: ''
            }
        },
        template: '#tmpl',
        methods: {
            postComment() { // 发表评论的方法
                var comment = {id: Date.now(), user: this.user, content: this.content}

                // 从 localStorage 中获取所有的评论
                var list = JSON.parse(localStorage.getItem('cmts') || '[]')
                list.unshift(comment)

                // 重新保存最新的 评论数据
                localStorage.setItem('cmts', JSON.stringify(list))

                this.user = this.content = ''

                this.$emit('func')
            }
        }
    }

    export default {
        name: "Test14",
        data() {
            return {
                list: [
                    {id: Date.now(), user: 'zs1', content: 'aaa'},
                    {id: Date.now(), user: 'zs2', content: 'bbbb'},
                    {id: Date.now(), user: 'zs3', content: 'cccc'}
                ]
            }
        },
        beforeCreate() { // 注意：这里不能调用 loadComments 方法，因为在执行这个钩子函数的时候，data 和 methods 都还没有被初始化好

        },
        created() {
            this.loadComments()
        },
        methods: {
            loadComments() { // 从本地的 localStorage 中，加载评论列表
                var list = JSON.parse(localStorage.getItem('cmts') || '[]')
                this.list = list
            }
        },
        components: {
            'cmt-box': commentBox
        }
    }
</script>

<style scoped>

</style>

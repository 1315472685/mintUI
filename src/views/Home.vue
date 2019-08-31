<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png">
    <mt-field label="用户名"
              placeholder="请输入用户名"
              v-model="username"></mt-field>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// import { Indicator } from 'mint-ui'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      username: ''
    }
  },
  created () {
    // Indicator.open('加载中...')
  }
}
</script>

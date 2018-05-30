<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="addit">增加</button>
    <button @click="deleteit">减去</button>
    <p>
      <input type="text" v-model="email.temp_email"  @input="updateData" name="email">
    </p>
    <p>
      <input type="text" v-model="token.temp_token"  @input="updateData"  name="token">
    </p>
    <p>
      <button @click="login">注册</button>
    </p>
    <router-link to="/link2">页面二</router-link>
    <h2>{{eventItem}}</h2>
    <!--<h2>{{add}}</h2>-->
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '页面一'
    }
  },
  methods: {
    // Dispatching getBook
    addit () {
      console.log(this.$store)
      this.$store.dispatch('someAsyncTask')
    },
    deleteit () {
      this.remove()
    },
    updateData: function (e) {
      // v-model Form handling
      this.$store.commit({
        type: 'updateData',
        name: e.target.name,
        value: e.target.value
      })
    },
    login () {
      this.$store.dispatch({
        type: 'login',
        email: this.email,
        token: this.token
      }).then(res => {
        console.log(res)
        // Success handle
      }, err => {
        // Error handle
        console.log(err)
      })
    },
    ...mapMutations({
      remove: 'REMOVE_COUNTER' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  },
  computed: {
    ...mapState({
      eventItem: state => state.active.main,
      email: state => state.active,
      token: state => state.active
    }),
    ...mapGetters([
      'add'
    ])
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

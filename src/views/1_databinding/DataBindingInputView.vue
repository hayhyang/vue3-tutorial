<template>
  <input type='text' v-model='userId'/>
  <button @click='myFunction'>눌러</button>
  <button @click='changeData'>변경</button>
  <input type='text' v-model='num1'> +
  <input type='text' v-model='num2'> =
  <span>{{num1 + num2}}</span>
  <input type='text' v-model.number='num3'> +
  <input type='text' v-model.number='num4'> =
  <span>{{num3 + num4}}</span>
</template>

<script>
export default {
  component: {},
  data () {
    return {
      userId: 'user',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    myFunction () {
      console.log(this.userId)
      console.log(this)
    },
    changeData () {
      this.userId = '바뀐 유저아이디'
    }
  }
}
</script>

<style>

</style>

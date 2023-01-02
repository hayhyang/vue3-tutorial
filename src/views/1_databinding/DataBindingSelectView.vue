<template>
<select name='' id='' v-model='selectedCity'>
  <option value=''></option>
  <option value='02'>서울</option>
  <option value='051'>제주</option>
  <option value='064'>부산</option>
</select>
</template>

<script>
export default {
  component: {},
  data () {
    return {
      selectedCity: '02'
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>

<style>

</style>

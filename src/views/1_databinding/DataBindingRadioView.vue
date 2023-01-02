<template>
<div>
  <input type='radio' name='' id='html' value='HTML' v-model='favoriteLang' />
  <label for='html'>HTML</label>
</div>
<div>
  <input type='radio' name='' id='css' value='CSS' v-model='favoriteLang'/>
  <label for='css'>CSS</label>
</div>
<div>
  <input type='radio' name='' id='js' value='JS' v-model='favoriteLang'/>
  <label for='js'>Javascript</label>
</div>
  <div>{{favoriteLang}}</div>
</template>

<script>
export default {
  component: {},
  data () {
    return {
      sampleData: '',
      favoriteLang: 'JS'
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

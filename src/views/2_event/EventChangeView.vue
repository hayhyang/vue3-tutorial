<template>
<div>
  <select @change='changeCity' v-model='selectedCity'>
    <option>==도시선택==</option>
    <option :value='city.cityCode' :key='city.cityCode' v-for='city in cityList'>{{city.cityTitle}}</option>
  </select>
  <select>
    <option :value='dong.dongCode' :key='dong.dongCode' v-for='dong in selectedDongList'>{{dong.dongTitle}}</option>
  </select>
  <select>
    <option :value='dong.dongCode' :key='dong.dongCode' v-for='dong in dongList.filter(dong => dong.cityCode === this.selectedCity)'>{{dong.dongTitle}}</option>
  </select>
</div>
</template>

<script>
export default {
  component: {},
  data () {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', cityTitle: '서울' },
        { cityCode: '051', cityTitle: '부산' },
        { cityCode: '064', cityTitle: '제주' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울 4동' },
        { cityCode: '051', dongCode: '1', dongTitle: '부산 1동' },
        { cityCode: '051', dongCode: '2', dongTitle: '부산 2동' },
        { cityCode: '051', dongCode: '3', dongTitle: '부산 3동' },
        { cityCode: '051', dongCode: '4', dongTitle: '부산 4동' },
        { cityCode: '064', dongCode: '1', dongTitle: '제주 4동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주 2동' },
        { cityCode: '064', dongCode: '3', dongTitle: '제주 3동' },
        { cityCode: '064', dongCode: '4', dongTitle: '제주 4동' }
      ],
      selectedDongList: []
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    changeCity () {
      this.selectedDongList = this.dongList.filter(dong => dong.cityCode === this.selectedCity)
    }
  }
}
</script>

<style>

</style>

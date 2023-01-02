<template>
<select>
  <option :key='city.code' :value='city.code' v-for='city in cities'>{{city.title}}</option>
</select>

  <div>
    <table>
      <thead>
      <tr>
        <th>제품번호</th>
        <th>제품명</th>
        <th>가격</th>
        <th>주문수량</th>
        <th>합계</th>
      </tr>
      </thead>
      <tbody>
      <tr :key='i' v-for='(drink, i) in drinks'>
        <td>{{drink.drinkId}}</td>
        <td>{{drink.drinkName}}</td>
        <td>{{drink.price}}</td>
        <td><input type='number' name='' id='' v-model='drink.qty'></td>
        <td>{{drink.price * drink.qty}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  component: {},
  data () {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '052' },
        { title: '제주', code: '064' }
      ],
      drinks: [
        { drinkId: '1', drinkName: '코카콜라', price: 700, qty: 1 },
        { drinkId: '2', drinkName: '환타', price: 300, qty: 3 },
        { drinkId: '3', drinkName: '밀키스', price: 900, qty: 5 },
        { drinkId: '4', drinkName: '아아', price: 400, qty: 7 }
      ]
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

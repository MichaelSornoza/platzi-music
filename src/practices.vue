<template lang="pug">
  #app
    input(v-model="name")
    label Nombre
    input(v-model="lastName")
    label Apellido
    p {{ fullName }}
    //select(v-model="daySelected")
      option(v-for="day in days" v-model="days") {{ day }}
    //label Día
    //select(v-model="monthSelected")
      option(v-for="month in months" v-model="months") {{ month }}
    //label Mes
    //select(v-model="yearSelected")
      option(v-for="year in years" v-model="years") {{ year }}
    //label Año
    //p Su edad es {{ age }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',

      lastName: '',
      /*
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

      daySelected: 0,
      monthSelected: 0,
      yearSelected: 0,

      lastYear: new Date().getFullYear(),
      lastMonth: new Date().getMonth(),
      lastDay: new Date().getDate()*/
    }
  },
  computed: {
    fullName() {
      return `${this.name} ${this.lastName}`
    },/*
    days(){
      let allDays = []
      for(let i = 1; i <= 31; i++){
        allDays[i-1] = i
      }
      return allDays
    },
    years(){
      let allYears = []
      for(let i=0;i<= 150;i++){
        allYears[i] = this.lastYear - i;
      }
      return allYears
    },
    age(){
      let agnos = this.lastYear - this.yearSelected

      if((this.monthSelected < this.lastMonth) || (this.monthSelected == this.lasMonth && this.daySelected < this.lastDay)){
        agnos--
      }
      return agnos
    }*/
  },
  watch: {
    name (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>

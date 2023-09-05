<script>

export default{
  name: 'CurrentDate',
  methods: {
    getCurrentDate () {
      const data = new Date()
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const currentMonth = month[data.getMonth()].slice(0,4)
      const currentDay = days[data.getDay()]
      const currentDate = data.getDate()
      return `${currentDay}, ${currentDate} ${currentMonth}`
    }
  }

}
</script>

<template>
  <div class="date-wrapper">
    <time
    datetime=""
    class="current-date"
    >
      {{ getCurrentDate() }}
    </time>
  </div>

</template>

<style lang="scss">
.date-wrapper{
  display: flex;
  justify-content: center;
  padding-top: 12px;
}
.current-date{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  border-radius: 16px;
  background-color: #32333E;
  padding: 11px;
  color: #9B9EAD;
  font-size: 10px;

}
</style>
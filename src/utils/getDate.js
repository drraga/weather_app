export default function getCurrentDate () {
  const data = new Date()
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const currentMonth = month[data.getMonth()].slice(0,4)
  const currentDay = days[data.getDay()]
  const currentDate = data.getDate()
  return `${currentDay}, ${currentDate} ${currentMonth}`
}
function createTimestamp(){
    const now = new Date()
    const seconds = Number(document.getElementById("second").value) || now.getSeconds()
    const minutes  = Number(document.getElementById("minute").value) || now.getMinutes()
    const hours = Number(document.getElementById("hour").value) || now.getMinutes()
    const day = Number(document.getElementById("day").value) || now.getUTCDate()
    const month = Number(document.getElementById("month").value) || now.getMonth()
    const year = Number(document.getElementById("year").value) || now.getUTCFullYear()
    const date = new Date(year, month, day, hours - 1, minutes, seconds)
    const timestamp = Math.floor(date.getTime() / 1000)
}
function timestampReverse(){

}
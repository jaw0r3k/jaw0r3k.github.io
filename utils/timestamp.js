const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
styles = ["f", "F", "d", "D", "t", "T", "R"]
function createTimestamp(){
    const now = new Date()
    const seconds = Number(document.getElementById("second").value) || now.getSeconds()
    const minutes  = Number(document.getElementById("minute").value) || now.getMinutes()
    const hours = document.getElementById("hour").value ? Number(document.getElementById("hour").value) : now.getHours()
    const day = Number(document.getElementById("day").value) || now.getUTCDate()
    const month = document.getElementById("month").value ? Number(document.getElementById("month").value) - 1 : now.getMonth()
    const year = Number(document.getElementById("year").value) || now.getUTCFullYear()
    const date = new Date(year, month, day, hours, minutes, seconds)
    const style = document.getElementById("tstyle").value
    const timestamp = Math.floor(date.getTime() / 1000)
    document.getElementById("timestamp").value = `<t:${timestamp}${style != "f" ? ":" + style : ""}>`
    document.getElementById("pw").value = preview(date, style)
}
function timestampReverse(event){
    console.log(event.target)
    const idk = event.target.value.replace("<t:", "").replace(">", "").split(":")
    const date = new Date(idk[0] * 1000)
    const style = styles.includes(idk[1]) ? idk[1] : "f"
    document.getElementById("pw").value = preview(date, style)
    document.getElementById("second").value = date.getSeconds()
    document.getElementById("minute").value = date.getMinutes()
    document.getElementById("hour").value = date.getHours() + 1
    document.getElementById("day").value = date.getUTCDate()
    document.getElementById("month").value = date.getMonth() + 1
    document.getElementById("year").value = date.getUTCFullYear()
}
function preview(date, style){
    if(style === "F") return `${days[date.getDay()]}, ${date.getUTCDate()} ${monthNames[date.getMonth()]} ${date.getUTCFullYear()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    if(style === "f") return `${date.getUTCDate()} ${monthNames[date.getMonth()]} ${date.getUTCFullYear()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    if(style === "t") return `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    if(style === "T") return `${date.toLocaleTimeString('it-IT')}`
    if(style === "d") return `${date.getUTCDate()}/${date.getMonth() + 1}/${date.getUTCFullYear()}`
    if(style === "D") return `${date.getUTCDate()} ${monthNames[date.getMonth()]} ${date.getUTCFullYear()}`
    if(style === "R") return reverseTime(Math.floor((Date.now() - date.getTime()) / 1000))
}   

function reverseTime(diff){
    // By Jaw0r3k
    console.log(diff)
    if(diff > 45360000) return Math.floor(diff / 31536000) + " years ago"
    if(diff > 30240000) return "A year ago"
    if(diff > 3888000) return Math.floor(diff / 2505600) + " months ago"
    if(diff > 2246400) return "A month ago"
    if(diff > 151200) return Math.floor(diff / 86400) + " days ago"
    if(diff > 79200) return "A day ago"
    if(diff > 5400) return Math.floor(diff / 3600) + " hours ago"
    if(diff > 2700) return "An hour ago"
    if(diff > 90) return Math.floor(diff / 60) + " minutes ago"
    if(diff > 59) return "A minute ago"
    if(diff >= 0) return "A few seconds ago"
    if(diff < -45360000) return "In " +  Math.floor(Math.abs(diff) / 31536000) + " years"
    if(diff < -30240000) return "In a year"
    if(diff < -3888000) return "In " + Math.floor(Math.abs(diff) / 2505600) + " months"
    if(diff < -2246400) return "In a month"
    if(diff < -151200) return "In " + Math.floor(Math.abs(diff) / 86400) + " days"
    if(diff < -79200) return "In a day"
    if(diff < -5400) return "In " + Math.floor(Math.abs(diff) / 3600) + " hours"
    if(diff < -2700) return "In an hour"
    if(diff < -90) return "In " + Math.floor(Math.abs(diff) / 60) + " minutes"
    if(diff < -59) return "In minute"
    if(diff < 0) return "In few seconds"
}
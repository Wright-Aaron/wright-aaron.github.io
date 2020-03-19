var now = new Date();
var dayOfWeek = now.getDay();
console.log(dayOfWeek);
if (dayOfWeek != 5) {
    document.getElementById("message").style.display = "none";
} else {
    document.getElementById("message").style.display = "block";
} 
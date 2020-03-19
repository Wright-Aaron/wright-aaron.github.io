// Web Font
WebFont.load({
    google: {
        families: ['Poppins', 'Cormorant+SC']
    }
  });

// Alert
var now = new Date();
var dayOfWeek = now.getDay();
console.log(dayOfWeek);
if (dayOfWeek != 5) {
    document.getElementById("message").style.display = "none";
} else {
    document.getElementById("message").style.display = "block";
} 

// Responsive Button
function toggleMenu() {
document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// Time
try {
    document.getElementById('currentYear').innerHTML = new Date().getFullYear();
}
catch (e) {
    alert ["Function not supported"]
}

try {
    document.getElementById('lastUpdated').innerHTML = new Date().toLocaleDateString("en-US") + " " + new Date().toLocaleTimeString("en-US");
}
catch (e) {
    alert ["Function not supported"]
}

// Adjust Rating
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
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

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
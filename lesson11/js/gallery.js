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

// Lazy Load
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.removeAttribute('data-src');
}

const imgOptions = {
    threshold: 0.5,
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})
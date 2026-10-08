```javascript
/* =========================
   QUANTUM CLOCK
========================= */

function updateClock() {

    const now = new Date();

    // Get time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();

    // Add leading zeros
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(3, "0");

    // Update clock
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    document.getElementById("milliseconds").textContent =
        "." + milliseconds;

    // Update date
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", dateOptions);
}


/* =========================
   START CLOCK
========================= */

setInterval(updateClock, 10);

updateClock();


/* =========================
   QUANTUM PARTICLES
========================= */

const particleContainer =
    document.getElementById("particles");


// Create particles
for (let i = 0; i < 70; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    // Random horizontal position
    particle.style.left =
        Math.random() * 100 + "%";

    // Random animation delay
    particle.style.animationDelay =
        Math.random() * 8 + "s";

    // Random animation speed
    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    // Random opacity
    particle.style.opacity =
        Math.random();

    particleContainer.appendChild(particle);
}


/* =========================
   QUANTUM STATE EFFECT
========================= */

const states = [
    "QUANTUM STATE: STABLE",
    "QUANTUM STATE: OBSERVED",
    "QUANTUM STATE: SUPERPOSITION",
    "QUANTUM STATE: ENTANGLED"
];

const stateElement =
    document.querySelector(".state");


setInterval(() => {

    const randomState =
        states[Math.floor(Math.random() * states.length)];

    stateElement.innerHTML = `
        <span class="status-dot"></span>
        ${randomState}
    `;

}, 3000);
```

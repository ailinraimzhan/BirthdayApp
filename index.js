function birthdayCountdown () {
    const birthdayDate = new Date("May 20, 2027 00:00");
    const now = new Date();
    const diff = birthdayDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector('.days').textContent = displayDay;
    
    const displayHour = Math.floor((diff % msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;

        clearInterval(timerID)
        birthday();
    }
}

let timerID = setInterval(birthdayCountdown, 1000);

function birthday() {
    const heading = document.querySelector("h1")
    heading.textContent = "Happy Birthday AILIN!";
    heading.classList.add('pink');
}

const button = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');

button.addEventListener('click', function() {
    if(audio.paused) {
        audio.play();
        button.classList.toggle('pause');
    }

    else {
        audio.pause();
        button.classList.toggle('pause');
    }
})

particlesJS("particles-js", {
    particles: {
    number: {
        value: 1000,
        density: {
        enable: true,
        value_area: 631
        }
    },
    color: {
        value: "#ffffff"
    },
    shape: {
        type: ["circle", "triangle", "star"]
    },
    opacity: {
        value: 0.5,
        random: true
    },
    size: {
        value: 5,
        random: true
    },
    line_linked: {
        enable: false
    },
    move: {
        enable: true,
        speed: 5,
        direction: "bottom",
        out_mode: "out"
    }
    },
    interactivity: {
    events: {
        onclick: {
        enable: true,
        mode: "repulse"
        },
        resize: true
    },
    modes: {
        repulse: {
        distance: 200,
        duration: 0.4
        }
    }
    },
    retina_detect: true
});
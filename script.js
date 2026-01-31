// Load data from JSON
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").innerText = data.name;
    document.getElementById("footerName").innerText = data.name;
    document.getElementById("age").innerText = data.age;
    document.getElementById("message").innerText = data.message;
    document.getElementById("date").innerText = data.date;
  });

// Candle blowing logic
const wishBtn = document.getElementById("wishBtn");
const candleSpans = document.querySelectorAll(".candles span");
const blowText = document.getElementById("blowText");

let blown = false;

wishBtn.addEventListener("click", () => {
  if (!blown) {
    candleSpans.forEach(candle => {
      candle.classList.add("off");
    });

    blowText.style.opacity = "1";

    setTimeout(() => {
      blowText.style.opacity = "0";
      wishBtn.innerText = "✨ Make a Wish";
      blown = true;
    }, 1500);

  } else {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=9138513377&text&type=phone_number&app_absent=0";
  }
});

// Music toggle
function toggleMusic() {
  const m = document.getElementById("music");
  m.paused ? m.play() : m.pause();
}


const music = document.getElementById("music");
const musicBtn = document.querySelector(".music-btn");
const overlay = document.getElementById("startOverlay");

let isPlaying = false;

/* First interaction */
overlay.addEventListener("click", () => {
  music.volume = 0.7;
  music.play().then(() => {
    isPlaying = true;
    musicBtn.innerText = "🔇";
    overlay.style.display = "none"; // overlay hat jaaye
  });
});

/* Mute / Unmute */
function toggleMusic() {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "🔊";
  } else {
    music.pause();
    musicBtn.innerText = "🔇";
  }
}


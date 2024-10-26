const imgBoxes = document.querySelectorAll(".img-box");
const countdownModal = document.getElementById("countdown-modal");
const overlay = document.getElementById("overlay");
const countdownMessage = document.getElementById("countdown-message");

imgBoxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    imgBoxes.forEach((b) => b.classList.remove("selected"));
    box.classList.add("selected");

    const img = box.querySelector("img");
    console.log("Selected Image Source:", img.src);

    function showCountdownAndRedirect(message, url, countdown) {
      let countdownNumber = countdown;
      countdownMessage.textContent = `${message} \nRedirecting in ${countdownNumber} seconds...`;
      countdownModal.style.display = "block";
      overlay.style.display = "block";

      const countdownInterval = setInterval(() => {
        countdownNumber--;
        countdownMessage.textContent = `${message} \nRedirecting in ${countdownNumber} seconds...`;
        if (countdownNumber <= 0) {
          clearInterval(countdownInterval);
          window.location.href = url;
        }
      }, 1000);
    }

    if (index === 0) {
      showCountdownAndRedirect(
        "YUK IKUTI KAMI AGAR MENJADI KAYA RAYA",
        "https://46kawan777.com/",
        5
      );
    } else if (index === 1) {
      showCountdownAndRedirect(
        "YUK SHOLAT",
        "https://www.youtube.com/watch?v=LH4Te_KiILY",
        5
      );
    } else if (index === 2) {
      showCountdownAndRedirect("SELAMAT BERCOLI", "https://www.xnxx.com/", 5);
    }
  });
});

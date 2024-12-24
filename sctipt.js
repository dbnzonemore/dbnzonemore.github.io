document.addEventListener("DOMContentLoaded", () => {
  const buttonGetSignal = document.getElementById("get-signal");
  const screenStart = document.getElementById("screenStart");
  const loadingSignal = document.getElementById("loading");
  const signal = document.getElementById("img-signal");

  // Initial state
  screenStart.classList.add("active");

  buttonGetSignal.addEventListener("click", () => {
    // Show loading and hide others
    screenStart.classList.remove("active");
    loadingSignal.classList.add("active");
    signal.classList.remove("active");

    // Simulate loading
    setTimeout(() => {
      loadingSignal.classList.remove("active");
      signal.classList.add("active");
      // Set a random image
      const randomPhotoNumber = Math.floor(Math.random() * 80) + 1;
      signal.src = `assets/images/signal/${randomPhotoNumber}.jpg`;
    }, 3000);
  });
});

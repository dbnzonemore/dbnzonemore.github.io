document.addEventListener("DOMContentLoaded", () => {
  const buttonGetSignal = document.getElementById("get-signal");
  const screenStart = document.getElementById("screenStart");
  const loadingSignal = document.getElementById("loading");
  const signal = document.getElementById("img-signal");

  // Изначальное состояние
  screenStart.classList.add("active");

  buttonGetSignal.addEventListener("click", () => {
    // Показать загрузку и скрыть стартовую картинку
    screenStart.classList.remove("active");
    loadingSignal.classList.add("active");
    signal.classList.remove("active");

    // Эмуляция загрузки
    setTimeout(() => {
      loadingSignal.classList.remove("active");
      signal.classList.add("active");
      // Устанавливаем случайное изображение
      const randomPhotoNumber = Math.floor(Math.random() * 80) + 1;
      signal.src = `assets/images/signal/${randomPhotoNumber}.jpg`;
    }, 2000); // Задержка 2 секунды
  });
});

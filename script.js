const messages = [
  "Ты уверенна?",
  "Точно уверенна??",
  "Может передумаешь?",
  "Нуу зайка...",
  "Обдумай это!",
  "Если ты скажешь нет, я буду расстроен...",
  "Я буду очень расстроен...",
  "Я буду очень очень очень расстроен...",
  "Ок, как скажешь, я больше не спрошу...",
  "Да шучу я ^_^, скажи 'Да' пожалуйста! 💜",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

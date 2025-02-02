document.addEventListener("DOMContentLoaded", () => {
  const emojiContainer = document.querySelector(".emoji-container");
  const emojis = ["💕", "💋", "❤️", "😍", "💖", "😘"];

  function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 90 + "vw";
    emoji.style.animationDuration = Math.random() * 4 + 3 + "s";
    emojiContainer.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 2800);
  }

  setInterval(createEmoji, 300);
});

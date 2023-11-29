const jsConfetti = new JSConfetti();

window.onload = function() {
  jsConfetti.addConfetti({
    emojis: ['❤️', '🎈', '🎉', '🎊', '🎊', '🎉', '🎈', '❤️'],
  }).then(() => jsConfetti.addConfetti());
};
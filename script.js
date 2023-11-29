const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

window.onload = function() {
    jsConfetti.addConfetti({
      emojis: ['❤️', '🎈', '🎉', '🎊', '🎊', '🎉', '🎈', '❤️'],
    }).then(() => jsConfetti.addConfetti());
  };

button.addEventListener('click', () => {
    // jsConfetti.addConfetti({
    //     emojis: ['❤️', '🎈', '🎉', '🎊', '🎊', '🎉', '🎈', '❤️'],
    // }).then(() => jsConfetti.addConfetti());
    window.location.href = 'wish.html';
});

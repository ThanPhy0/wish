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

function handleOrientationChange() {
  const portraitDiv = document.getElementById('portrait');
  const landscapeDiv = document.getElementById('landscape');
  
  if (window.matchMedia("(orientation: portrait)").matches) {
      portraitDiv.style.display = 'block';
      landscapeDiv.style.display = 'none';
  } else {
      portraitDiv.style.display = 'none';
      landscapeDiv.style.display = 'block';
  }
}

// Initial check on page load
handleOrientationChange();

// Listen for orientation change
window.addEventListener('orientationchange', handleOrientationChange);

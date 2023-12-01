function refreshAnimation() {
  var loadBox = document.querySelector('.load-box');
  loadBox.innerHTML = loadBox.innerHTML;
}

setInterval(refreshAnimation, 1500);

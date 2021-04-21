var $modal = document.querySelector('.modal-container');
var $main = document.querySelector('.container');
var $purpbutt = document.querySelector('.purple-butt');
var $ojbutt = document.querySelector('.orange-butt');

$purpbutt.addEventListener('click', function (event) {
  $modal.className = 'modal-container shown';
  $main.className = 'container background';
});

$ojbutt.addEventListener('click', function (event) {
  $modal.className = 'modal-container hidden';
  $main.className = 'container';
});

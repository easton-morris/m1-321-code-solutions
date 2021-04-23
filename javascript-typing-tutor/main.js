var $charList = document.querySelectorAll('span');
var $resetButt = document.querySelector('button');
var $modalWindow = document.querySelector('div.modal-container');
var $tutorWindow = document.querySelector('div.tutor-container');
var $scoreText = document.querySelector('modal-window > p:last-child');
var $errorText = document.querySelector('modal-window > p:first-child');

var position = 0;
var errors = 0;
var possScore = $charList.length;

document.addEventListener('keydown', function (event) {
  if (event.key === $charList[position].textContent) {
    $charList[position].className = 'tutor-char correct';
    position++;
    $charList[position].className = 'tutor-char current';
  } else if (event.key !== $charList[position].textContent) {
    $charList[position].className = 'tutor-char incorrect';
    errors++;
  }
  if ($charList[($charList.length - 1)].className === 'tutor-char correct') {
    $modalWindow.className = 'modal-container shown active';
    $tutorWindow.className = 'tutor-container inactive';
    $errorText.textContent = errors;
    $scoreText.textContent = possScore / (possScore - errors);
  }
});

$resetButt.addEventListener('click', function (event) {
  $modalWindow.className = 'modal-container hidden inactive';
  position = 0;
  errors = 0;
});

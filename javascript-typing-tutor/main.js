var $charList = document.querySelectorAll('span');
var $resetButt = document.querySelector('button');
var $modalWindow = document.querySelector('div.modal-container');
var $tutorWindow = document.querySelector('div.tutor-container');
var $errorText = document.querySelector('.errors');

var position = 0;
var errors = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === $charList[position].textContent) {
    $charList[position].className = 'tutor-char correct';
    position++;
    if (position < $charList.length) {
      $charList[position].className = 'tutor-char current';
    }
  } else if (event.key !== $charList[position].textContent) {
    $charList[position].className = 'tutor-char incorrect current';
    errors++;
  }
  if ($charList[($charList.length - 1)].className === 'tutor-char correct') {
    $modalWindow.className = 'modal-container shown active';
    $tutorWindow.className = 'tutor-container inactive';
    $errorText.textContent = errors;
  }
});

$resetButt.addEventListener('click', function (event) {
  $modalWindow.className = 'modal-container hidden inactive';
  position = 0;
  errors = 0;
  for (var i = 0; i < $charList.length; i++) {
    if (i === 0) {
      $charList[i].className = 'tutor-char current';
    } else {
      $charList[i].className = 'tutor-char';
    }
  }
});

var $button = document.querySelector('button');
var $container = document.querySelector('.container');

$button.addEventListener('click', function (event) {
  if ($button.className === 'switched-on') {
    $button.textContent = 'OFF';
    $container.className = 'container dark';
    $button.className = 'switched-off';
  } else {
    $button.textContent = 'ON';
    $container.className = 'container lit';
    $button.className = 'switched-on';
  }
});

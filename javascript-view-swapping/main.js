var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabList.length; i++) {
      if (event.target === $tabList[i]) {
        $tabList[i].className = 'tab active';
      } else {
        $tabList[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {
    var targetView = event.target.getAttribute('data-view');
    for (var j = 0; j < $viewList.length; j++) {
      if ($viewList[j].getAttribute('data-view') === targetView) {
        $viewList[j].className = 'view';
      } else {
        $viewList[j].className = 'view hidden';
      }
    }
  }
});

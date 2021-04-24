document.forms[0].addEventListener('submit', function (event) {
  event.preventDefault();
  var $formObj = {
    name: document.getElementById('user-name').value,
    email: document.getElementById('user-email').value,
    message: document.getElementById('user-message').value
  };
  console.log($formObj);
  document.getElementById('contact-form').reset();
});

document.getElementById('login-submit').addEventListener('click', ()=>{
  emailField = document.getElementById('email-field');
  passField = document.getElementById('pass-field');

  if(emailField.value == 'marwa@gmail.com' && passField.value  == 'secret'){
    console.log('valid user');
    window.location.href = '../banking.html'
  }
})
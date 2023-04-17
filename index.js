
let form = document.getElementById('form')
let firstName = document.getElementById('first-name')
let secondName = document.getElementById('last-name')
let eMail = document.getElementById('email')
let password = document.getElementById('password')


form.addEventListener('submit', (e) => {

    e.preventDefault()
    checkInputs();
})

const checkInputs = () => {
const  firstNameData = firstName.value.trim() 
const secondNameData = secondName.value.trim();
const eMailData = eMail.value.trim();
const passwordData = password.value.trim();
    
if (firstNameData === '') {
    setErrorFor(firstName, 'First name cannot be blank');

  } else {
    setSuccessFor(firstName);
  }

  if (secondNameData === '') {
    setErrorFor(secondName, 'Second name cannot be blank');

  } else {
    setSuccessFor(secondName);
  }
  if (eMailData=== '') {
    setErrorFor(eMail ,'Email cannot be blank');

  }
  else if (!chechkEmail(eMailData)) {
    setErrorFor(eMail, 'Email is not valid')
  }
  
  else {
    setSuccessFor(eMail);
  }
  if (passwordData === '') {
    setErrorFor(password, 'Second name cannot be blank');
    input.style

  }
  else if( passwordData.length < 8 ) {
    setErrorFor(password, 'password cannot be smaller then 8 charecters')
  }

   else {
    setSuccessFor(password);
  }

}

function setErrorFor(input, message) {
    const errorData = input.nextElementSibling;
    errorData.textContent = message;
    input.style.border = '3px solid red'

}

function setSuccessFor (input) {
    const errorData = input.nextElementSibling;
    errorData.textContent = ' '
    input.style.border = '3px solid green'
}

const chechkEmail = ( eMail ) => {
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(eMail)
}


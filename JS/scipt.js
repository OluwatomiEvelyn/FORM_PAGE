//eventlisteners
let getForm = document.getElementById('reg');
//FullName
let getFullName = document.getElementById('fullName');
let getFullNameError = document.getElementById('fullNameError');
//Email
let getEmail = document.getElementById('email');
let getEmailError = document.getElementById('emailError');
//PhoneNumber
let getPhoneNumber = document.getElementById('phoneNumber');
let getPhoneNumberError = document.getElementById('phoneNumberError');
//Passsword
let getPassword = document.getElementById('password');
let getPasswordError = document.getElementById('passwordError');
//GetConfirmPasssword
let getConfirmPassword = document.getElementById('confirmpassword');
let getConfirmPasswordError = document.getElementById('confirmPasswordError');

//Error
const mssg = document.querySelector('.msg');
//Success
const success = document.querySelector('.successMsg');

//UL
let list = document.getElementById('list');

getForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    //Applogic

    if ((getPassword.value).length < 8) {
        getPasswordError.innerHTML = `<p style="color:red"> Your Password must be greater than 8 characters </p>`;
        mssg.classList.add('error');
        mssg.innerHTML = '<h2> Please complete all fields </h2>';
    }else {
        if (getPassword.value != getPassword.value === '' && getConfirmPassword.value === '') {
            mssg.classList.add('error');
            mssg.innerHTML = '<h2> Please complete all fields </h2>';
        }else if (getFullName.value === '' || getPhoneNumber.value === '' || getEmail.value === '') {
            mssg.classList.add('error');
            mssg.innerHTML = '<h2> Please complete all fields </h2>';
        }else {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${getFullName.value}: ${getPhoneNumber.value}`));
            // li.appendChild(li);

             mssg.innerHTML = '';
             mssg.classList.remove('error');
             success.classList.add('success');
             success.innerHTML = '<p>User successfully added</p>';
             getFullName.value = '';
             getEmail.value = '';
             getPhoneNumber.value = '';
             getPassword.value = '';
             getConfirmPassword = '';
    }
    getPasswordError.innerHTML = '';
   }

   //set time out for our success message
   setTimeout(() => {
    success.classList.remove('success');
    success.innerHTML = ''
   }, 3000);
})

let toggle =  document.getElementById('button-addon2');
toggle.addEventListener('click', (e) => {
    let getPasswordField = document.getElementById('password');
    if(getPasswordField.type === 'password') {
       getPasswordField.setAttribute('type', 'text');
       toggle.innerText = 'Hide';
    }else {
        getPasswordField.setAttribute('type', 'password');
        toggle,innerText = 'Show'
    }

})
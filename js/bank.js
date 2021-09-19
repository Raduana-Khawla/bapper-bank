document.getElementById('login-submit').addEventListener('click',function(){
    //console.log('button clicked');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //console.log(userEmail);
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //console.log(userPassword);

    if(userEmail == 'sontan@gmail.com' && userPassword == 'secret'){
        window.location.href = 'bank.html';
    //     console.log('valid user');
    // }else {
    //     console.log('invalid user');
    }
})


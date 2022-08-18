document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('password');
    const pass = passField.value;

    // DANGER: DO NOT DO THIS ON THE CLIENT SITE
    if(email==='hrrajon@gmail.com' && pass==='rajon'){
        window.location.href ='bank.html';
    }
    else{
        alert('Invalid User');
    }
})
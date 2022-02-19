document.querySelector('#the-button').addEventListener('click', function() {
    let pw = document.querySelector('#password');
    let pw2 = document.querySelector('#password-confirm');
    if (!pw.value || !pw2.value || pw.value !== pw2.value){

        document.getElementById('password').classList.add("error-field");
        document.getElementById('password-confirm').classList.add("error-field");
        alert(`passwords don't match`);
    }
    else {
        console.log(pw.value);
        window.location.reload();
    }
})
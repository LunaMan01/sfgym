let entrar = (function(){
    
        document.querySelector('.login-form').addEventListener('submit', function () {
            console.log('submitting');
            let usuario = document.querySelector('#user').value;
            let contra = document.querySelector('#pass').value;


            var req = new XMLHttpRequest();
            req.open("POST", 'php/login.php', false);
            req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            req.send('usuario=' + usuario + "&contrase=" + contra);

            console.log(req.responseText);
            if (req.responseText == 1) {
                sessionStorage.setItem('logged',true);
                window.open('index.html', '_self');
            }
        });
    
})();
function login() {
    let emailInput = document.getElementById("email-input").value;
    let passwordInput = document.getElementById("password-input").value;

    let dataObject = {
        email: emailInput,
        password: passwordInput
    }

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("login-status").innerHTML = "LOGIN SUCCESS";
            let tokenObject = JSON.parse(this.responseText);
            console.log(tokenObject);
            Cookies.set("getCookie", tokenObject.token);
            window.open("page2.html", "_self");
        } else if(this.readyState != 4) {
            document.getElementById("login-status").innerHTML = "LOADING";
            console.log(tokenObject);
        } else {
            document.getElementById("login-status").innerHTML = "LOGIN ERROR";
            console.log(tokenObject);
        }
    };
    ajax.open("POST", "https://reques.in/api/login", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(dataOject));

}


document.getElementById("login-input").addEventListener("click", login);
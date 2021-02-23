window.addEventListener('DOMContentLoaded', (event) => {
    const email = document.querySelector('#email');
    const pwd = document.querySelector('#pwd');
    const emailError = document.querySelector('.email-error');
    const pwdError = document.querySelector('.pwd-error');

    email.addEventListener('input', function () {
        if (email.value.length == 0) {
            emailError.textContent = "";
            return;
        }
        try {
            (new SignUpData()).email = email.value;
            emailError.textContent = "";
        } catch (e) {
            emailError.textContent = e;
        }
    })
    pwd.addEventListener('input', function () {
        if (pwd.value.length == 0) {
            pwdError.textContent = "";
            return;
        }
        try {
            (new SignUpData()).pwd = pwd.value;
            pwdError.textContent = "";
        } catch (e) {
            pwdError.textContent = e;
        }
    })
});

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        createAddReset();
        return;
    } catch (e) {
        return;
    }
}

const createAddReset = () => {

    const email = document.querySelector('#email').value;
    const pwd = document.querySelector('#pwd').value;
    const formData =
    {
        "email": email,
        "password": pwd,
        

    };
    let xhr = new XMLHttpRequest();
    console.log(formData);
    let postURL = apiCall.login
    let methodCall = "POST";
    makeServiceCall(methodCall, postURL, true, formData)
        .then(responseText => {
            console.log(responseText)
            let response = JSON.parse(responseText);
            console.log(response)
            console.log(response.id)

            localStorage.setItem("token", response.id);
            localStorage.setItem("firstName", response.fullName);
            localStorage.setItem("email", response.email);
            localStorage.setItem("phone", response.phone);
            // setTimeout(() => {
            //     window.location.replace(site_properties.dashboard);
            // }, 2000);
            resetForm();
        })
        .catch(error => {
            throw error;
        });
}
const resetForm = () => {
    setValue('#email', '');
    setValue('#pwd', '');

}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
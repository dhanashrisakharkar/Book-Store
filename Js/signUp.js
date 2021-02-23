window.addEventListener('DOMContentLoaded', (event) => {
    const fname = document.querySelector('#fname');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const pwd = document.querySelector('#pwd');
    const rpwd = document.querySelector('#rpwd');
    const textError = document.querySelector('.text-error');
    const emailError = document.querySelector('.email-error');
    const textErrorTwo = document.querySelector('.phone-error');
    const pwdError = document.querySelector('.pwd-error');
    const rpwdError = document.querySelector('.rpwd-error');
    fname.addEventListener('input', function () {
        if (fname.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new SignUpData()).fname = fname.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    })

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
    phone.addEventListener('input', function () {
        if (phone.value.length == 0) {
            textErrorTwo.textContent = "";
            return;
        }
        try {
            (new SignUpData()).phone = phone.value;
            textErrorTwo.textContent = "";
        } catch (e) {
            textErrorTwo.textContent = e;
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

    rpwd.addEventListener('input', function () {
        if (rpwd.value.length == 0) {
            rpwdError.textContent = "";
            return;
        }
        try {
            (new SignUpData()).rpwd = rpwd.value;
            rpwdError.textContent = "";
        } catch (e) {
            rpwdError.textContent = e;
        }
    })


});



const store = () => {
    try {
        createUserDetail();
        save();
        return;

    } catch (e) {
        return;
    }
}

const createUserDetail = () => {
    let userData = new SignUpData();
    try {
        userData.fname = getInputValueById('#fname')
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    try {
        userData.email = getInputValueById('#email')
    } catch (e) {
        setTextValue('.email-error', e);
        throw e;
    }
    
    try {
        userData.phone = getInputValueById('#phone')
    } catch (e) {
        setTextValue('.phone-error', e);
        throw e;
    }

    try {
        userData.pwd = getInputValueById('#pwd')
    } catch (e) {
        setTextValue('.pwd-error', e);
        throw e;
    }

    try {
        userData.rpwd = getInputValueById('#rpwd')
    } catch (e) {
        setTextValue('.rpwd-error', e);
        throw e;
    }

    return userData;

}
const save = (event) => {
    // event.preventDefault();
    // event.stopPropagation();
    try {
        createAddReset();
        return;
    } catch (e) {
        return;
    }
}

const createAddReset = () => {
    const fname = document.querySelector('#fname').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    const pwd = document.querySelector('#pwd').value;
    const formData =
    {

        fullName: fname,
        email: email,
        password: pwd,
        phone: phone,

    };

    let a = "ten";
    let b= "twenty";

    console.log(a + b + "thirty");
    console.log(`${a}thirty`);
    console.log(formData);
    let postURL = apiCall.signUp;
    let methodCall = "POST";
    makeServiceCall(methodCall, postURL, true, formData)
        .then(responseText => {
            // setTimeout(() => {
            //     window.location.replace(site_properties.login_page);
            // }, 2000);
            resetForm();
        })
        .catch(error => {
            throw error;
        });
}
const resetForm = () => {
    setValue('#fname', '');
    setValue('#phone', '');
    setValue('#email', '');
    setValue('#pwd', '');
    setValue('#rpwd', '');
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

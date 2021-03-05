let validate =(event , id) => {
    const fname = document.getElementById('fname').value;
    const phone = document.getElementById('phone').value;
    const pincode = document.getElementById('pincode').value;
    let fnameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
    let txt = ""
    if (fname === fnameRegex )
    {
        txt = " "
    }else{
        txt = "Name is Incorrect" 
        document.getElementById('.text-error').innerHTML = txt;
    }
    
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

    pincode.addEventListener('input', function () {
        if (pincode.value.length == 0) {
            textErrorThree.textContent = "";
            return;
        }
        try {
            (new SignUpData()).pincode = pincode.value;
            textErrorThree.textContent = "";
        } catch (e) {
            textErrorThree.textContent = e;
        }
    })
    

};
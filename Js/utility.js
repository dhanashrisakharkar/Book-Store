class SignUpData {
    get id() { return this._id }
    set id(id) {
        this._id = id
    }
    get fname() { return this.fname }
    set fname(fname) {
        let fnameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (fnameRegex.test(fname))
            this._fname = fname
        else throw 'Name is Incorrect'
    }
    get phone() { return this.phone }
    set phone(phone) {
        console.log(phone)
        let phoneRegex = RegExp('^.{10,}$')
        if (phoneRegex.test(phone))
            this._phone = phone
        else throw 'Phone No is Incorrect'
    }
    get email(){
        return this.email
    }
    set email(email){
        let emailRegex = RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        console.log(email);
        if(emailRegex.test(email))
       
        this._email = email
        else throw 'email is Incorrect'
    }
    get pwd(){
        return this.pwd
    }
    set pwd(pwd){
        let pwdRegex = RegExp('^[a-z]{0,5}(@)[0-9]{0,5}$')
        if(pwdRegex.test(pwd))
        this._pwd = pwd
        else throw 'password is Incorrect'
    }
    get rpwd(){
        return this.pwd
    }
    set rpwd(rpwd){
        let rpwdRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(rpwdRegex.test(rpwd))
        this._rpwd = rpwd
        else throw 'password is Incorrect'
    }

    get pincode() {
        return this.pincode
    }

    set pincode(pincode){
        let pwdRegex = RegExp('^.{6,}$')
        if(pwdRegex.test(pwd))
        this._pwd = pwd
        else throw 'pincode  is Incorrect'
    }
    toString() {       
        return "id=" + this.id + ", first name=" + this.name + "phone no" + this.phone + "email" + this.email + "password" + this.pwd + "repeat password" + this.rpwd
    }
}
const displayBooks = () => {
    let rem = document.getElementById("AddToCart");
    rem.style.display = "none";
    let display = document.getElementById("display");
    display.style.display = "inline-flex";
    let innerHtml = "";
    let postURL = apiCall.bookDisplay
    let methodCall = "GET";
    makeServiceCall(methodCall, postURL, true)
        .then(responseText => {
            console.log(responseText)
            let data = [];
            let response = JSON.parse(responseText);
            console.log(response)
            data = Object(response.result)
            console.log(data)
            creatInnerHtml(data);
        })
}

const addToCart = (id, value) => {
    value.classList.add("added-to-bag")
    let postURL = apiCall.addToCart
    let methodCall = "POST";
    makeServiceCall(methodCall, `${postURL}/${id}`, true)
        .then(responseText => {
            console.log("ok");
        })
}
const searchBook = (value) => {
    let innerHtml = "";
    let postURL = apiCall.bookDisplay
    let methodCall = "GET";
    makeServiceCall(methodCall, postURL, true)
        .then(responseText => {
            let data = [];
            let response = JSON.parse(responseText);
            data = Object(response.result)
            let details = data
            let filterArray = data.filter((bookStrore) => {
                let author = bookStrore.author
                let bookName = bookStrore.bookName
                if (author.match(value) || bookName.match(value)) {
                    if (value !== " ") {
                        return true;
                    }
                } else {
                    return false;
                }

            })
            creatInnerHtml(filterArray)

        })

}

const getCartCount = () => {


    let data = [];
    let postURL = apiCall.getCartItem
    let methodCall = "GET";
    makeServiceCall(methodCall, postURL, true)
        .then(responseText => {
            let response = JSON.parse(responseText);
            data = Object(response.result)
            document.getElementById('cartCount').innerHTML = `(${data.length})`

        })

}
const creatInnerHtml = (bookArray) => {
    let innerHtml = "";
    for (let i = 0; i < bookArray.length; i++) {
        let details = bookArray[i]

        innerHtml += `
                <div class="noteCard my-2 mx-2 card cardBook" >
            <div class="card-body bodyCard" >
                <div class="backgroungColour"  >
                <img class="bookImage"  src="../assets/images/Book.png">
            </div>
                <h6 class="card-title1" data-toggle="modal" data-target="#myModal" >${details.bookName}</h5>
                <div style="font-size: 13px;"  class="card-text" >${details.author}</div>
                <div class="bookQuantity" >${details.quantity}</div>
                <div class="bookPrice"  >${details.price}</div>
               
                <button type="button" class="btn1 btn-danger addToCard"  id=${details._id} onclick='addToCart(this.id , this),document.getElementById(${i}).style.display="none"'>Add to cart</button>
                <button type="button" id=${i} class="btn1 btn-danger wishlist"  >Wishlist</button>
            </div>
    </div>
    </div>
                `
        document.querySelector('#display').innerHTML = innerHtml

    }

}
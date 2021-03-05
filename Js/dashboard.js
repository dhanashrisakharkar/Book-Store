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
    let postURL = apiCall.addToCart
    let methodCall = "POST";
    makeServiceCall(methodCall, `${postURL}/${id}`, true)
        .then(responseText => {
            console.log(responseText);
        })
}
const searchBook = (value) => {
    let innerHtml = "";
    console.log(value);
    let postURL = apiCall.bookDisplay
    let methodCall = "GET";
    makeServiceCall(methodCall, postURL, true)
        .then(responseText => {
            let data = [];
            let response = JSON.parse(responseText);
            console.log(response)
            data = Object(response.result)
            console.log(data)
                let details = data
                console.log(details.bookName)
                let filterArray =  data.filter( (bookStrore) => {
                    let  author =  bookStrore.author
                    let  bookName = bookStrore.bookName
                    console.log(author,bookName)
                    if(author.match(value) || bookName.match(value)   ){
                        if(value !== " "){
                          return true;
                        }
                    }else{
                        return false;
                    }

                    })
                    console.log(filterArray);
                    creatInnerHtml(filterArray)
                    
        })

}

const creatInnerHtml = (bookArray) => {
   let innerHtml = "";
    for (let i = 0; i < bookArray.length; i++) {
        let details = bookArray[i]

        innerHtml += `
                <div class="noteCard my-2 mx-2 card" style="width: 15rem;  
                border-radius: 0.55rem; display:flex">
            <div class="card-body" style="margin-bottom: -10%">
                <div  style="background-color: #F5F5F5 ; width:15em;height: 9em; margin: -11% 0% 0% -10.5% ">
                <img style="position: relative; width:6em; left:28%; top:6%" src="../assets/images/Book.png">
            </div>
                <h6 class="card-title1" data-toggle="modal" data-target="#myModal" >${details.bookName}</h5>
                <div style="font-size: 13px;"  class="card-text" >${details.author}</div>
                <div style=" width: 300px;font: normal normal bold 12px/16px Roboto; letter-spacing: 0px;color: #0A0102;
                opacity: 1; margin:5px 5px 10px 0px ;">${details.quantity}</div>
                <div style=" width: 300px;font: normal normal bold 12px/16px Roboto;letter-spacing: 0px;color: #0A0102;opacity: 1; margin:-7px 5px 15px 0px">${details.price}</div>
                <p style="display:none" class="card-text" style=" margin:5px 5px 15px 25px">${details.author}</p>
                <button type="button" class="btn1 btn-danger" style="left: 20px; margin: 0% 0% 5% -5%; position: inherit;" id=${details._id} onclick='addToCart(this.id) ,style.backgroundColor = "#3371B5",style.width="80%",document.getElementById(${i}).style.display="none"'  >Add to cart</button>
                <button type="button" id=${i} class="btn1 btn-danger" style=" width:50%; background-color: white; color:black  ; border-color:whitesmoke; margin: 0% 0% 5% 4%; position: absolute;"  >Wishlist</button>
            </div>
    </div>
    </div>
                `
                document.querySelector('#display').innerHTML = innerHtml

    }

}
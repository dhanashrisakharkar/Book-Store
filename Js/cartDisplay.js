const getCartItems = () => {
 
   let innerHtml = "";

   let data = [];
 
  let postURL = apiCall.getCartItem
  let methodCall = "GET";
  makeServiceCall(methodCall, postURL, true)
      .then(responseText => {
          console.log(responseText)
          let response = JSON.parse(responseText);
          console.log(response)
          data = Object(response.result)
          console.log(data)
          for (let details of data) {
         console.log(details.product_id.bookName)
        innerHtml += `
     <div class="block">
     <h5>
    My Cart(1)
     </h5>
     <img class="cartBook" src="../assets/images/Book.png">
     <div class=" details">
     <div class="titlecart">
        <h6 class="card-title"> ${details.product_id.bookName}</h6>
        <div class="authorcart">by ${details.product_id.author}</div>
        <div class="pricecart">Rs. ${details.product_id.price}</div>
        <div class="plusicon">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-dash-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
          </div>
          <input class="cartinput" value=${details.product_id.quantity} />
                <div class="minuscart">
                  
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </div>
      </div>
     
      <div class="removedbutton">
        <button
          type="button"
          class="btn btn-light"
          style="background-color: transparent; 
         border: none;"
        >
          REMOVE
        </button>
      </div>
      <div class="placeOrder">
      <button type="button" class="btn btn-primary" onclick="placeOrderForm()">
        place order
    </button>
    </div> 
     <!-- <div className="authorcart"> {item.product_id.author}</div> -->
    </div>
              `
              document.querySelector('#display').innerHTML = innerHtml
          }

        })

}


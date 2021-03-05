
const getCartItems = () => {
  let rem = document.getElementById("display");
  rem.style.display = "none"; 
  let remm = document.getElementById("AddToCart2");
  remm.style.display = "none"; 
  let display = document.getElementById("AddToCart");
  display.style.display = "block"; 
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
     <img class="cartBook" src="../assets/images/Book.png">
     <div class=" details">
     <div class="titlecart">
        <h6 class="card-title" > ${details.product_id.bookName}</h6>
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
     
    </div> 
     <!-- <div className="authorcart"> {item.product_id.author}</div> -->
   
              `
              document.querySelector('#block').innerHTML = innerHtml
          }

        })

}

const placeOrderForm = () => {
    
  let innerHtml = "";

  innerHtml = `
  
  <div class="card1" >
        <div class="container">
        <div >
          <h5 class="Customer">
          Customer Details
        </h5>
        </div>
        <form class="fillForm">
        <div class="space">
        <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example1">First name</label>
                <input type="text" name="fname" id="fname" oninput="validate(event.target.value)" class="form-control1" />
                <error-output id="text-error" for="text"></error-output>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example2">Phone No</label>
                <input type="phone" id="phone" oninput="validate(event.target.value)"  class="form-control1" />
                <error-output id="phone-error" for="text"></error-output>
              </div>
            </div>
          </div>
        
          <!-- <div class="space"> -->
           
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">Pincode</label>
                  <input type="pincode" id="pincode" oninput="validate(event.target.value)" class="form-control1" />
                  <error-output id="pincode-error" for="text"></error-output>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example2">Locality</label>
                  <input   class="form-control1" />
                  
                </div>
              </div>
            </div>
         
          <!-- Text input -->
          
          <div class="form-outline mb-4">
            <div class="space2">
            <label class="form-label" for="form6Example7">Address</label>
            <textarea class="form-control1"  rows="4"></textarea>
          </div>
          </div>

          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example1">city/town</label>
                <input type="text" id="form6Example1" class="form-control1" />
              
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example2">Landmark</label>
                <input type="text" id="form6Example2" class="form-control1" />
                
              </div>
            </div>
          </div>
        
          <!-- Email input -->
          
        
          <!-- Submit button -->
          <div class="continueButton">
          <button style="background-color: #3371B5; color:#FFFFFF;font: normal normal normal 14px/19px Roboto;" type="button" class="btn btn-primarycart" onclick="displayCartAgian()">Continue</button>
        </div>
        </div>
          </form>
        </div>
        </div>
        <script defer src="../Js/formValidation.js"></script>
    <script defer src="../Js/utility.js"></script>
      `
    
      document.querySelector('#Customer').innerHTML = innerHtml


}


const displayCartAgian = () => {
  let remm = document.getElementById("AddToCart2");
  remm.style.display = "block";
  let card = document.getElementById("card1");
  card.style.zIndex = "-1";
  let remme = document.getElementById("Customer");
  remme.style.display = "none"; 
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
         console.log(details.product_id.price * details.product_id.quantity)
        innerHtml += `
      
    
     <img class="cartBook2" src="../assets/images/Book.png">
     <div class=" details2">
     <div class="titlecart2">
        <h6 class="card-title2" > ${details.product_id.bookName}</h6>
        <div class="authorcart2">by ${details.product_id.author}</div>
        <div class="pricecart2">Rs. ${details.product_id.price * details.product_id.quantity}</div>
      </div>
     
     
    
              `
              document.querySelector('#block2').innerHTML = innerHtml
          }

        })

}



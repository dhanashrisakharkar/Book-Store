const displayBooks = () => {
    let innerHtml = "";
    
    let email = localStorage.getItem("email");
    // let innerHtml = "";
    // let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList";
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
            for (let details of data) {
              console.log(details.author)
                innerHtml += `
                <div class="noteCard my-2 mx-2 card" style="width: 15rem;  
    border-radius: 0.55rem; display:flex">
            <div class="card-body" style="margin-bottom: -10%">
                <div  style="background-color: #F5F5F5 ; width:15em;height: 9em; margin: -11% 0% 0% -10.5% ">
                <img style="position: relative; width:6em; left:28%; top:6%" src="../assets/images/Book.png">
            </div>
                <h6 class="card-title" data-toggle="modal" data-target="#myModal" style=" font: normal normal normal 19px/19px Roboto;margin:7px 5px 10px 0px">${details.bookName}</h5>
                <div style="font-size: 13px;margin:-2px 5px 5px 0px"  class="card-text" style=" font: normal normal normal 10px/13px Roboto;margin-top: 10%;">${details.author}</div>
                <div style=" width: 300px;font-size: 14px;  border: none; margin:5px 5px 10px 0px">${details.quantity}</div>
                <div style=" width: 300px;font-size: 14px;    border: none;  margin:-7px 5px 15px 0px">${details.price}</div>
                <p style="display:none" class="card-text" style=" margin:5px 5px 15px 25px">${details.author}</p>
                <button type="button" class="btn1 btn-danger" style="left: 20px; margin: 0% 0% 5% -5%; position: inherit;" id=${details._id} onclick='addToCart(this.id) ,style.backgroundColor = "#3371B5",style.width="80%",document.getElementById("whistle").style.display="none"'  >Add to cart</button>
                <button type="button" id="whistle" class="btn1 btn-danger" style=" width:50%; background-color: white; color:black  ; border-color:whitesmoke; margin: 0% 0% 5% 4%; position: absolute;"  >Wishlist</button>
            </div>
    </div>
    </div>

                `
                document.querySelector('#display').innerHTML = innerHtml
            }
            
           
        })
    

}

const addToCart = (id , value) => {
    // console.log(id , value)
    // let r =value;
    //  let rem = document.getElementById(r).innerHTML;
    //  rem.style.display = "none";
//   let display = document.getElementById("rown");
//   rem.style.display = "none";
//   display.style.display = "none";

    
    
    let postURL = apiCall.addToCart
    
    let methodCall = "POST";
    makeServiceCall(methodCall, `${postURL}/${id}`, true)
        .then(responseText => {
            console.log(responseText);
        })




}
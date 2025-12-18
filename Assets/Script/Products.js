var products=[
    {
        id:1,
        name:"Mobile",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    },
     {
        id:2,
        name:"Mob",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    },
     {
        id:3,
        name:"Mobi",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    },
     {
        id:4,
        name:"Mobil",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    }
    
]

function displayProducts(data){
    console.log("function is running");
    
    var getdata=""
    data.map((value)=>(
        getdata+=`
        <div class="col-lg-3 col-sm-6" id="product-card">
            <div class="card">
                <img src="${value.Image}" height="150px" width="100%" alt="">
                <div class="card-body">
                    <span>Name:${value.name}</span>
                    <span>Price:${value.price}</span>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary" onclick="addcart(${value.id})">Cart</button>
                </div>
            </div>
        </div>`
    ))
    document.getElementById("display-data").innerHTML=getdata
}
displayProducts(products)


// Add to cart function
var cartlist=[]
var totalamt=0
function addcart(productId){
    console.log("Product added to cart:", productId);
    var cartdata=products.find((item)=>item.id==productId)
        console.log(cartdata);
        var existing=cartlist.find((item)=>item.id==productId)
    if(existing){
        cartdata.quantity++
    }
    else{
        cartlist.push(cartdata)
        cartdata.quantity=1
    }
displaycartitems(cartlist)
totalamt=totalamt+cartdata.price
document.getElementById("total").innerText=`Total Amount : ${totalamt}`
}

function displaycartitems(data){
    var  cartdata=""
    data.map((value)=>(
cartdata+=` <tr>
                    <td><img src="${value.Image}" height="100px" width="100%" alt=""></td>
                    <td>${value.name}</td>
                    <td>${value.price}</td>
                    <td>${value.quantity}</td>
                    <td><button class="btn btn-danger" onclick="removeItem(${value.id})">Remove</button></td>
                  </tr>`
    ))
document.getElementById("cart-list").innerHTML=cartdata
}

// remove item from cart
function removeItem(productId){
    var remove_item=cartlist.find((value)=>value.id==productId)
    console.log(remove_item);
    
    if(remove_item.quantity>1){
        remove_item.quantity--
        totalamt=totalamt-remove_item.price
    }
    else{
        cartlist=cartlist.filter((value)=>value.id!=productId)
        totalamt=0
    }
    document.getElementById("total").innerText=`Total Amount : ${totalamt}`

displaycartitems(cartlist)

}

// search function
function serarchFun(event){
event.preventDefault()
console.log(e,"event");

var seacrh_input= document.getElementById("search-input").value
console.log(seacrh_input);

var output=products.filter((value)=>value.name.toLowerCase().includes(seacrh_input.toLowerCase()))
console.log(output);

var finaloutput=""
output.map((item)=>(
    finaloutput+=`
    <div class="col-lg-3">
                    <div class="card">
                        <img src="${item.Image}" height="150px" width="100px"   alt="">
                        <div class="card-body">
                        ${item.name}
                        </div>
                    </div>
                </div>`
))
document.getElementById("search-row").innerHTML=finaloutput
}
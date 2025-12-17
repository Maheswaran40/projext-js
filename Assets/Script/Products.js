var products=[
    {
        id:1,
        name:"Mobile",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    },
     {
        id:2,
        name:"Mobile2",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    },
     {
        id:3,
        name:"Mobile3",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    },
     {
        id:4,
        name:"Mobile4",
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


var carlist=[]

function addcart(productId){
    var cartdata=products.find((value)=>value.id==productId)
    var existing=carlist.find((value)=>value.id==productId)
    console.log("Function is working");
    
    if(existing){
        existing.quantity++
    }
    else{
        carlist.push(cartdata)
        cartdata.quantity=1

    }

    console.log(carlist);
displayCartlist(carlist)
    
}
// display cartlist

function displayCartlist(data){
    var cartdata=""
    data.map((value)=>(
        cartdata+=` 
        <tr>
                    <td><img src="${value.Image}" height="100px" width="100px"/></td>
                    <td>${value.name}</td>
                    <td>${value.price}</td>
                    <td>${value.quantity}</td>
                    <td><button class="btn btn-danger" onclick="removecart(${value.id})">Remove</button></td>
        </tr>`
    ))
    document.getElementById("cart-list").innerHTML=cartdata

}

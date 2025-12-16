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
    },
     {
        id:4,
        name:"Mobile4",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    },
     {
        id:4,
        name:"Mobile4",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    },
     {
        id:4,
        name:"Mobile4",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    },
     {
        id:4,
        name:"Mobile4",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    },
     {
        id:4,
        name:"Mobile4",
        price:19999,
        Image:"./Assets/Images/mobile.png"
    },
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
                    <button class="btn btn-primary">Cart</button>
                </div>
            </div>
        </div>`
    ))
    document.getElementById("display-data").innerHTML=getdata
}
displayProducts(products)
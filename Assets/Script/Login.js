function Formsub(a){
a.preventDefault();
var username=document.getElementById("username").value
console.log(username);

var password=document.getElementById("password").value
console.log(password);

if(username=="Ilife" && password==123){
    window.location.href="./Home.html"
}
else{
    alert("invalid password or username")
}

}
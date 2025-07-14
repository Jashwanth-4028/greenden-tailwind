    const menuIcon = document.getElementById("menuicon");
    const sideNav = document.getElementById("sidenav");
    const closeNav = document.getElementById("close-nav");

    menuIcon.addEventListener("click", function () {
        sideNav.style.right = "0";
    });

    closeNav.addEventListener("click", function () {
        sideNav.style.right = "-50%";
    });

var productContainer=document.getElementById("productContainer")
var search=document.getElementById("search");

    var productlist=productContainer.querySelectorAll("div")
    search.addEventListener("keyup",function(){
        var value=event.target.value.toUpperCase()
        for(count=0;count<productlist.length;count=count+1){
            var productname=productlist[count].querySelector("h1").textContent
            if(productname.toUpperCase().indexOf(value)<0){
                productlist[count].style.display="none"
            }
            else{
                productlist[count].style.display="block"
            }
        }
    })
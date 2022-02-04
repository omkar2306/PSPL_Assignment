var arr = [];
window.onload = function ClickMe() {
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((jsonBody) => {
            //console.log(jsonBody);
            List(jsonBody);
        });
}

function List(pro) {
    let p = "";
    for (let x of pro) {
        p += `<div class="card">
		<div class = "check"><input type="checkbox" id="myCheck" value="${x.title }" name ="title" onclick="Add()"></div>
		<h1 class="title">${x.title}</h1>
		<img src=${x.image} alt="img" class="image">
		<p>${x.description}</p>
		<p class="category">${x.category}</p>
		<p class="price">${x.price}</p>
	</div>`;
    }
    document.getElementById("refer").innerHTML = p;
}

function Add() {
    var check = document.getElementsByName("title");
    let select = document.getElementById("cart");;
    for (var i = 0; i < check.length; i++) {
        var productContainer = document.createElement('div');
        if (check[i].checked == true) {
            arr.push(check[i].value);
            select = [...new Set(arr)];
        } else if (check[i].checked == false) {
            arr.pop(check[i].value);
        }
    }
    document.getElementById("cart").innerHTML = select;
}
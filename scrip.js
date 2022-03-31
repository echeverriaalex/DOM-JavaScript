
/*
let nombre = "Alex";

let h2 = document.createElement('h2').textContent = 'h2 con javascript';


document.getElementById("div").innerHTML = `<h1> h1 con div ${nombre} </h1>`;
let article = document.getElementById('article').innerHTML = h2;
article.appendChild(h2);
document.body.appendChild(h2);

*/

let listaId = document.getElementById("lista");
//let listaquery = document.querySelector("ul");

let li1 = document.createElement('li');
li1.textContent = "campari";

listaId.appendChild(li1);
//listaquery.appendChild(li1);

//li1.textContent = "7 up";
//listaquery.appendChild(li1);

/*
let li2 = document.createElement('li').textContent = "fernet";
listaquery.appendChild(li2);
*/



let article = document.getElementById('article');
let ul = document.createElement('ul');
let li = document.createElement('li');
li.textContent = 'bmw';

article.appendChild(ul);
ul.appendChild(li);


let main = document.createElement('main');
let div = document.createElement('div');
let ul2 = document.createElement('ul');
let li2 = document.createElement('li');
li2.textContent = 'ferrari';

ul2.appendChild(li2);
main.appendChild(div);
div.appendChild(ul2);

document.body.appendChild(main);


let RegistrarBebidas = ()=>{

    let descripcion = prompt("Ingrese descripcion del producto: ");
    let precio = prompt("Ingrese precio del producto: ");
    let stock = prompt("Ingrese stock del producto: ");


    console.log(descripcion + " " + precio + " " + stock);
};









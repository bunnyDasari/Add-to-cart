let container = document.getElementById("HeadingContainer");




let heading = document.createElement("h1");
heading.textContent = "Add To Cart";
heading.classList.add("text-center");
container.appendChild(heading);


let inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.id = "cartItemTextInput";
container.appendChild(inputElement);

let button = document.createElement("button");
button.classList.add("btn", "btn-primary", "button_1", "m-4");
button.textContent = "Add";
button.id = "addBtn";
button.onclick = "onAddCartItem()";
container.appendChild(button);


let para = document.createElement("p");
para.textContent = "My Cart items";
para.classList.add("text-center");
container.appendChild(para);

let cartItemTextInputE1 = document.getElementById("cartItemTextInput");

function onAddCartItem() {

    let cartItemText = cartItemTextInputE1.value;

    let cartItemE1 = document.createElement("li");
    cartItemE1.textContent = cartItemText;

    cartItemTextInputE1.value = "";
    container.appendChild(cartItemTextInputE1);



}
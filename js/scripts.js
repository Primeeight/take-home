/**
 * You are welcome to change and update any code within this file as part of your solution
 */

// Fetch products from the API and display them on the page
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    setActiveButton();
});

// Fetch products from the API
function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Display all products on the page based on the given data
function displayProducts(products) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productElement = createProductElement(product);
        productGrid.appendChild(productElement);
    });
}

// Function to build each product card element
function createProductElement(product) {
    const productElement = document.createElement('article');
    productElement.classList.add('product');
    //Add parameters such as category during product creation.
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <h2 class="title">${product.title}</h2>
        <h2 class = "category">${product.category}</h2>
        <p class="price">$${product.price}</p>
        <div></div>
    `;
    return productElement;
}
// Set the current category button as active.
function setActiveButton() {
    var container = document.getElementById("CategoryButtons");
    var buttons = container.getElementsByClassName("btn");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

function showCategory(category){
    var x, i;
    x = document.getElementsByClassName("product");
    if (category === " all") category = "";
    for (i = 0; i < x.length; i++) {
        hide(x[i]);
        //Searches the classname for the mentioned category.
        if (x[i].innerHTML.includes(category)) console.log(x[i].innerHTML);
        if (x[i].innerHTML.includes(category)) show(x[i]);
    }
}
function hide(element){
    this
    element.style.display = "none";
}
function show(element){
    element.style.display = "block";
}




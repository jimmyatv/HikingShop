const productList = document.querySelector('#productList');

let products = [];

window.addEventListener('load', () => {
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(resJson => {
        // console.log(resJson);
        products = [...resJson];
    })
    .then(_ => {

        console.log(products);
        products.forEach(product => {
            productList.innerHTML += `
        <div class="item">
            <a href="single1.html">
                <img src="http://localhost:3000/${product.img}" alt="">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
            </a>
        </div>`
        })
    })
})
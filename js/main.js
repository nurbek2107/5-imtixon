fetch("http://localhost:3000/products")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(products => updateProducts(products))
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function updateProducts(products) {
    products.forEach(product => {
        console.log(product);
    });
}

const shop = document.getElementById("cart");
const el = document.getElementById("car5");
const bodyel = document.getElementById("body")
const overlay = document.getElementById('overlay')
let isPlaying = false;

shop.addEventListener("click", () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        el.classList.add('visible');
        const overlay = document.getElementById('overlay')
    } else {
        el.classList.remove('visible');
        const overlay = document.getElementById('overlay')
    }
});
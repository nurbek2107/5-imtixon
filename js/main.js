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

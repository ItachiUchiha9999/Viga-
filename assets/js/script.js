var slideIndex=0;
showSlide();
function showSlide(){
    var i;
    var slides=document.getElementsByClassName('mySlides');
    for (i = 0; i <slides.length; i++) {
        slides[i].style.display='none';
    }
    slideIndex++;
    if (slideIndex>slides.length) {
        slideIndex=1;
    }
    slides[slideIndex-1].style.display='block';
    setTimeout(showSlide,5000);
}

function searchProducts() {
    let searchQuery = document.getElementById('Search-Bar').value.toLowerCase();
    let products = Array.from(document.getElementsByClassName('element-card'));

    products.forEach(function(product) {
        let nameProduct = product.dataset.name.toLowerCase();
        let priceProduct = product.dataset.price.toLowerCase();
        let displayStyle = 'none';

        if (nameProduct.includes(searchQuery) || priceProduct.includes(searchQuery)) {
            displayStyle = '';
        }

        product.style.display = displayStyle;
    });
}

document.getElementById('Search-Bar').addEventListener('input', searchProducts);
document.getElementById('btn-search').addEventListener('click', searchProducts);

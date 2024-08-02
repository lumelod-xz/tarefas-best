document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Carregar o carrinho do localStorage

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    showSlide(currentSlide); // Mostra o primeiro slide inicialmente

    // Função para adicionar produtos ao carrinho
    function addToCart(product, price) {
        const itemIndex = cart.findIndex(item => item.product === product);
        if (itemIndex > -1) {
            // Se o item já estiver no carrinho, atualiza a quantidade
            cart[itemIndex].quantity += 1;
        } else {
            // Se o item não estiver no carrinho, adiciona novo
            cart.push({ product, price, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart)); // Salva o carrinho no localStorage
        alert(`${product} adicionado ao carrinho!`);
    }

    // Adiciona o evento de clique aos botões "Adicionar ao Carrinho"
    document.querySelectorAll('.produto button').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.dataset.produto;
            const price = parseFloat(event.target.dataset.price);
            addToCart(product, price);
        });
    });
});

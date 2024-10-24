//document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.photo');
    
    // Função para animar cada imagem com GSAP
    function animateImages() {
        gsap.fromTo(images, {
            y: '100%', // Começa fora da tela (em baixo)
            opacity: 0
        }, {
            y: '0%',
            opacity: 1,
            duration: 1,
            stagger: 0.50, // Delay entre cada animação
            ease: 'power2.out',
            onComplete: () => {
                // Reinicia a animação em loop
                gsap.to(images, {
                    y: '-0%',
                    duration: 1,
                    repeat: -0, // Repetir indefinidamente
                    ease: 'none'
                });
            }
        });
    }

    animateImages();
});

//const carousel = document.querySelector('.carousel');
//const prevButton = document.querySelector('.nav-button.prev');
//const nextButton = document.querySelector('.nav-button.next');
//let currentIndex = 0;

//function updateCarousel() {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

//nextButton.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

//prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

//window.addEventListener('resize', updateCarousel);

//urna heranilson


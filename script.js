// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary-dark': '#0f172a',
                'primary-blue': '#3b82f6',
                'primary-neon': '#60a5fa',
                'accent-purple': '#8b5cf6',
                'accent-red': '#ef4444',
            }
        }
    }
}

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(e.target) && 
        e.target !== mobileMenuButton) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Add to cart animation
const addToCartButtons = document.querySelectorAll('.product-card button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-check"></i>';
        this.classList.add('bg-green-500');
        this.classList.remove('bg-primary-blue', 'hover:bg-blue-600');
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i>';
            this.classList.remove('bg-green-500');
            this.classList.add('bg-primary-blue', 'hover:bg-blue-600');
        }, 2000);
    });
});

// Add to wishlist animation
const wishlistButtons = document.querySelectorAll('.product-card .fa-heart');
wishlistButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('far')) {
            this.classList.remove('far');
            this.classList.add('fas', 'text-accent-red');
        } else {
            this.classList.remove('fas', 'text-accent-red');
            this.classList.add('far');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-slide');
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Initialize tilt effect on hero image
const tiltElement = document.querySelector('.tilt-effect');
if (tiltElement) {
    tiltElement.addEventListener('mousemove', (e) => {
        const rect = tiltElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;
        
        tiltElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    tiltElement.addEventListener('mouseleave', () => {
        tiltElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

// Category hover effect
const categoryCards = document.querySelectorAll('.card-3d');
categoryCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = (x - centerX) / 25;
        const rotateX = (centerY - y) / 25;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});
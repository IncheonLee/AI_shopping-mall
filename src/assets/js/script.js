// DOM 요소 선택
document.addEventListener('DOMContentLoaded', function() {
    // 슬라이더 기능
    initSlider();
    
    // 테스티모니얼 슬라이더 기능
    initTestimonialSlider();
    
    // 장바구니 기능
    initCartFunctionality();
    
    // 뉴스레터 구독 기능
    initNewsletterSubscription();
});

// 메인 슬라이더 초기화 및 기능
function initSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    
    // 초기 상태에서는 첫 번째 슬라이드만 표시
    if (slides.length > 1) {
        // 자동 슬라이드 기능
        const autoSlide = setInterval(() => {
            moveToNextSlide();
        }, 5000);
        
        // 이전 슬라이드 버튼 클릭 이벤트
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                clearInterval(autoSlide);
                moveToPrevSlide();
            });
        }
        
        // 다음 슬라이드 버튼 클릭 이벤트
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                clearInterval(autoSlide);
                moveToNextSlide();
            });
        }
    } else {
        // 슬라이드가 하나만 있을 경우 버튼 숨기기
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
    }
    
    // 이전 슬라이드로 이동
    function moveToPrevSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        slides[currentSlide].classList.add('active');
    }
    
    // 다음 슬라이드로 이동
    function moveToNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        slides[currentSlide].classList.add('active');
    }
}

// 테스티모니얼 슬라이더 초기화 및 기능
function initTestimonialSlider() {
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevTestimonialBtn = document.querySelector('.prev-testimonial');
    const nextTestimonialBtn = document.querySelector('.next-testimonial');
    let currentTestimonial = 0;
    
    // 초기 상태에서는 첫 번째 테스티모니얼만 표시
    if (testimonialSlides.length > 1) {
        // 자동 슬라이드 기능
        const autoTestimonial = setInterval(() => {
            moveToNextTestimonial();
        }, 6000);
        
        // 이전 테스티모니얼 버튼 클릭 이벤트
        if (prevTestimonialBtn) {
            prevTestimonialBtn.addEventListener('click', () => {
                clearInterval(autoTestimonial);
                moveToPrevTestimonial();
            });
        }
        
        // 다음 테스티모니얼 버튼 클릭 이벤트
        if (nextTestimonialBtn) {
            nextTestimonialBtn.addEventListener('click', () => {
                clearInterval(autoTestimonial);
                moveToNextTestimonial();
            });
        }
    } else {
        // 테스티모니얼이 하나만 있을 경우 버튼 숨기기
        if (prevTestimonialBtn) prevTestimonialBtn.style.display = 'none';
        if (nextTestimonialBtn) nextTestimonialBtn.style.display = 'none';
    }
    
    // 이전 테스티모니얼로 이동
    function moveToPrevTestimonial() {
        testimonialSlides[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial === 0) ? testimonialSlides.length - 1 : currentTestimonial - 1;
        testimonialSlides[currentTestimonial].classList.add('active');
    }
    
    // 다음 테스티모니얼로 이동
    function moveToNextTestimonial() {
        testimonialSlides[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial === testimonialSlides.length - 1) ? 0 : currentTestimonial + 1;
        testimonialSlides[currentTestimonial].classList.add('active');
    }
}

// 장바구니 기능 초기화
function initCartFunctionality() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    // 로컬 스토리지에서 장바구니 데이터 가져오기
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // 장바구니 카운트 업데이트
    if (cartCount) {
        cartCount.textContent = cartItems.length;
        count = cartItems.length;
    }
    
    // 장바구니 추가 버튼 이벤트 리스너
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.current-price').textContent;
            const productImage = productCard.querySelector('.product-image img').getAttribute('src');
            
            // 새 상품 객체 생성
            const newItem = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            };
            
            // 장바구니에 상품이 이미 있는지 확인
            const existingItemIndex = cartItems.findIndex(item => item.id === productId);
            
            if (existingItemIndex !== -1) {
                // 이미 있으면 수량 증가
                cartItems[existingItemIndex].quantity += 1;
                showToast('상품 수량이 증가되었습니다.');
            } else {
                // 없으면 새로 추가
                cartItems.push(newItem);
                count++;
                if (cartCount) cartCount.textContent = count;
                showToast('장바구니에 상품이 추가되었습니다.');
            }
            
            // 로컬 스토리지에 장바구니 데이터 저장
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            
            // 버튼 애니메이션 효과
            this.classList.add('added');
            setTimeout(() => {
                this.classList.remove('added');
            }, 1000);
        });
    });
    
    // 위시리스트 버튼 이벤트 리스너
    const wishlistButtons = document.querySelectorAll('.add-to-wishlist');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const isActive = this.classList.contains('active');
            showToast(isActive ? '위시리스트에 추가되었습니다.' : '위시리스트에서 제거되었습니다.');
        });
    });
}

// 뉴스레터 구독 기능 초기화
function initNewsletterSubscription() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // 실제 구현에서는 서버로 데이터를 전송해야 함
                // 여기서는 간단히 로컬 스토리지에 저장
                const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
                
                if (!subscribers.includes(email)) {
                    subscribers.push(email);
                    localStorage.setItem('subscribers', JSON.stringify(subscribers));
                    showToast('뉴스레터 구독이 완료되었습니다. 감사합니다!');
                } else {
                    showToast('이미 구독 중인 이메일입니다.');
                }
                
                emailInput.value = '';
            }
        });
    }
}

// 토스트 메시지 표시 함수
function showToast(message) {
    // 기존 토스트가 있으면 제거
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // 새 토스트 생성
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // 토스트 스타일 설정
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    toast.style.color = 'white';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '4px';
    toast.style.zIndex = '9999';
    
    // 토스트 추가 및 자동 제거
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
} 
// Dynamic Premium Optimization Engine - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animated counter for hero stats
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            if (element.textContent.includes('%')) {
                element.textContent = (progress * (end - start) + start).toFixed(1) + '%';
            } else if (element.textContent.includes('ms')) {
                element.textContent = '<' + Math.floor(progress * (end - start) + start) + 'ms';
            } else if (element.textContent.includes('$')) {
                element.textContent = '$' + (progress * (end - start) + start).toFixed(1) + 'M';
            }
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate stats when hero section is visible
                if (entry.target.classList.contains('hero-stats')) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    setTimeout(() => {
                        animateCounter(statNumbers[0], 0, 96.2, 2000);
                        animateCounter(statNumbers[1], 0, 150, 2000);
                        animateCounter(statNumbers[2], 0, 8.9, 2000);
                    }, 500);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .benefit-category, .tech-item, .hero-stats');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Demo video placeholder interaction
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // Placeholder for demo video functionality
            alert('Demo video would play here. You can:\n\n1. Record your application demo\n2. Upload to YouTube/Vimeo\n3. Embed the video here\n\nFor now, users can download the app to see it in action!');
        });
    }

    // Mobile menu toggle (if needed)
    const createMobileMenu = () => {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768) {
            if (!navbar.querySelector('.mobile-toggle')) {
                const mobileToggle = document.createElement('button');
                mobileToggle.classList.add('mobile-toggle');
                mobileToggle.innerHTML = '☰';
                mobileToggle.style.cssText = `
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                `;
                
                mobileToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('mobile-active');
                });
                
                navbar.appendChild(mobileToggle);
            }
        }
    };

    // Call mobile menu function
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // Add some interactive feedback for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Add loading animation simulation
    const addLoadingEffect = () => {
        const statsElements = document.querySelectorAll('.stat-number');
        statsElements.forEach(stat => {
            const originalText = stat.textContent;
            stat.textContent = '...';
            setTimeout(() => {
                stat.textContent = originalText;
            }, 1000);
        });
    };

    // Simulate real-time data updates (for demo purposes)
    setInterval(() => {
        const accuracyStat = document.querySelector('.stat-number');
        if (accuracyStat && Math.random() > 0.7) {
            const currentValue = parseFloat(accuracyStat.textContent);
            const newValue = (currentValue + (Math.random() - 0.5) * 0.1).toFixed(1);
            accuracyStat.style.color = '#00ff88';
            accuracyStat.textContent = newValue + '%';
            
            setTimeout(() => {
                accuracyStat.style.color = '#00d4ff';
            }, 1000);
        }
    }, 10000); // Update every 10 seconds

    console.log('🚀 Dynamic Premium Optimization Engine - Showcase loaded successfully!');
    console.log('📊 Features: Real-time pricing, AI risk assessment, 96.2% accuracy');
    console.log('💰 Impact: $8.9M customer savings, $890K monthly revenue');
    console.log('🔗 Ready for GitHub Pages deployment');
});

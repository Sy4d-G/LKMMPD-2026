
    // Benefits — Power Circuit
    const circuitBoard = document.getElementById('circuitBoard');
    if (circuitBoard) {
        const circuitObs = new IntersectionObserver(([e]) => {
            e.target.classList.toggle('is-live', e.isIntersecting);
        }, { threshold: 0.25 });
        circuitObs.observe(circuitBoard);
    }


    // ─── Electric Strike Animation (3s loop) ───
    (function() {
        const board = document.getElementById('circuitBoard');
        if (!board) return;

        const paths = [
            'M800,290 L800,20',
            'M800,290 L900,290 L900,100 L1520,100',
            'M800,290 L900,290 L900,480 L1520,480',
            'M800,290 L800,560',
            'M800,290 L700,290 L700,480 L80,480',
            'M800,290 L700,290 L700,100 L80,100'
        ];

        let currentStrike = 0;

        function triggerStrike() {
            if (!board.classList.contains('is-live')) return;

            const idx = currentStrike % 6;
            const strikeLine = document.getElementById('strike' + (idx + 1));
            const card = board.querySelectorAll('.node-card')[idx];

            if (strikeLine) {
                // Reset and animate the strike trace
                strikeLine.classList.remove('active');
                void strikeLine.offsetWidth; // Force reflow
                strikeLine.classList.add('active');
            }

            if (card) {
                // Flash the card
                card.classList.add('elec-hit');
                setTimeout(() => card.classList.remove('elec-hit'), 800);
            }

            currentStrike++;
        }

        // Start after board is live, then every 3 seconds
        setInterval(() => {
            if (board.classList.contains('is-live')) {
                triggerStrike();
            }
        }, 3000);

        // Trigger first strike 1s after becoming live
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    if (board.classList.contains('is-live')) {
                        setTimeout(triggerStrike, 1000);
                    }
                }
            });
        });
        observer.observe(board, { attributes: true });
    })();

    
    // ─── Lightning Strike (3s interval) ───
    (function() {
        const board = document.getElementById('circuitBoard');
        if (!board) return;
        const svg = board.querySelector('.traces-layer');
        if (!svg) return;

        const pointData = [
            '800,290 800,20',
            '800,290 900,290 900,100 1520,100',
            '800,290 900,290 900,480 1520,480',
            '800,290 800,560',
            '800,290 700,290 700,480 80,480',
            '800,290 700,290 700,100 80,100'
        ];

        const ns = 'http://www.w3.org/2000/svg';
        const lightningLines = [];

        pointData.forEach((pts, i) => {
            const polyline = document.createElementNS(ns, 'polyline');
            polyline.setAttribute('points', pts);
            polyline.setAttribute('fill', 'none');
            polyline.setAttribute('stroke', '#f9d347');
            polyline.setAttribute('stroke-width', '5');
            polyline.setAttribute('stroke-linecap', 'round');
            polyline.setAttribute('stroke-linejoin', 'round');
            polyline.style.opacity = '0';
            polyline.style.filter = 'drop-shadow(0 0 8px #f9d347) drop-shadow(0 0 20px rgba(249,211,71,0.8))';
            svg.appendChild(polyline);
            lightningLines.push(polyline);
        });

        const core = board.querySelector('.core-gear');
        const cards = board.querySelectorAll('.node-card');
        let strikeIdx = 0;

        function lightningStrike() {
            if (!board.classList.contains('is-live')) return;

            const idx = strikeIdx % 6;
            const line = lightningLines[idx];
            const card = cards[idx];

            // Flash core
            if (core) {
                core.classList.remove('lightning-flash');
                void core.offsetWidth;
                core.classList.add('lightning-flash');
            }

            // Multi-flash lightning effect
            const flashes = [0, 60, 120, 180];
            flashes.forEach((delay, i) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.setAttribute('stroke-width', i % 2 === 0 ? '6' : '4');

                    if (card) {
                        card.classList.add('lightning-hit');
                    }

                    setTimeout(() => {
                        line.style.opacity = '0';
                        if (card) {
                            card.classList.remove('lightning-hit');
                        }
                    }, 50);
                }, delay);
            });

            // Final sustained flash
            setTimeout(() => {
                line.style.opacity = '1';
                line.setAttribute('stroke-width', '5');
                if (card) card.classList.add('lightning-hit');

                setTimeout(() => {
                    line.style.opacity = '0';
                    if (card) card.classList.remove('lightning-hit');
                }, 150);
            }, 250);

            strikeIdx++;
        }

        // Start lightning every 3 seconds
        setInterval(() => {
            if (board.classList.contains('is-live')) {
                lightningStrike();
            }
        }, 3000);

        // First strike 1s after live
        const obs = new MutationObserver(() => {
            if (board.classList.contains('is-live')) {
                setTimeout(lightningStrike, 1000);
            }
        });
        obs.observe(board, { attributes: true });
    })();

    // LKMMPD Stream - seamless loop
    function generateText() {
        return '<span class="lkm">LKMMPD</span> <span class="year">2026</span>';
    }
    function buildStream() {
        let text = '';
        for (let i = 0; i < 40; i++) {
            text += generateText() + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        }
        return text;
    }
    document.querySelectorAll('.binary-stream').forEach(el => {
        el.innerHTML = buildStream() + buildStream();
        el.classList.add('anim');
    });

            // Nav scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('h-16');
            nav.classList.remove('h-20');
        } else {
            nav.classList.add('h-20');
            nav.classList.remove('h-16');
        }
    });

    // ─── Observatory Particle System ───
    (function() {
        const canvas = document.getElementById('obsParticles');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        
        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        
        resize();
        window.addEventListener('resize', resize);
        
        class Particle {
            constructor() {
                this.reset();
            }
            
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = Math.random() > 0.7 ? '#f9d347' : '#064fbd';
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x < 0 || this.x > canvas.width || 
                    this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }
        
        // Create particles
        const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            
            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = '#064fbd';
                        ctx.globalAlpha = 0.1 * (1 - dist / 100);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                });
            });
            
            animationId = requestAnimationFrame(animate);
        }
        
        // Start animation when section is visible
        const section = document.getElementById('mascot');
        if (section) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animate();
                    } else {
                        cancelAnimationFrame(animationId);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(section);
        }
        
        // Counter animation for stats
        const statValues = document.querySelectorAll('.obs-stat-value');
        statValues.forEach(el => {
            const target = parseInt(el.dataset.count);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    el.textContent = target;
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current);
                }
            }, 30);
        });
        
        // Dynamic beam adjustment based on mascot position
        const mascotArea = document.querySelector('.obs-mascot-area');
        const beam = document.querySelector('.obs-beam');
        const beamCore = document.querySelector('.obs-beam-core');
        const beamHighlight = document.querySelector('.obs-beam-highlight');
        const beamParticles = document.querySelector('.obs-beam-particles');
        
        function adjustBeam() {
            if (!mascotArea || !beam) return;
            
            const section = document.querySelector('.obs-section');
            if (!section) return;
            
            const sectionRect = section.getBoundingClientRect();
            const mascotRect = mascotArea.getBoundingClientRect();
            
            // Calculate mascot position relative to section (percentage)
            const mascotLeftPercent = ((mascotRect.left - sectionRect.left) / sectionRect.width) * 100;
            const mascotCenterPercent = mascotLeftPercent + (mascotRect.width / sectionRect.width * 100);
            
            // Adjust beam widths to reach mascot
            const beamWidth = Math.max(50, mascotCenterPercent + 10);
            
            if (beam.style) {
                beam.style.setProperty('--beam-width', beamWidth + '%');
            }
            
            // Update all beam layers
            const beamBefore = document.querySelector('.obs-beam::before');
            const beamAfter = document.querySelector('.obs-beam::after');
            
            // Use CSS custom properties for dynamic updates
            section.style.setProperty('--beam-target-width', beamWidth + '%');
        }
        
        // Run on load and resize
        if (mascotArea) {
            adjustBeam();
            window.addEventListener('resize', adjustBeam);
            
            // Also re-adjust on scroll for any layout changes
            window.addEventListener('scroll', adjustBeam, { passive: true });
        }
    })();

    // ─── Navbar Hamburger Toggle ───
    (function() {
        const hamburger = document.getElementById('navbar-hamburger');
        const navLinks = document.getElementById('navbar-links');
        
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
            
            // Close menu when clicking a link
            navLinks.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    })();


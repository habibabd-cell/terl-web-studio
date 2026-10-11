// 2. Reading Scroll Progress Bar & Sticky Nav
    const nav = document.getElementById('nav');
    const backToTop = document.getElementById('backToTop');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section, header');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // Sticky Nav Glass Effect
      if (nav) nav.classList.toggle('scrolled', scrollTop > 25);

      // Back to Top visibility
      if (backToTop) backToTop.classList.toggle('visible', scrollTop > 450);

      // Active Section Tracking
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollTop >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });

    // Back to Top Click
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 3. Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (navToggle && mobileMenu) {
      navToggle.addEventListener('click', () => {
        const isOpen = navToggle.classList.toggle('open');
        mobileMenu.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen);
      });

      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navToggle.classList.remove('open');
          mobileMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // 4. Staggered Scroll Reveal with IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    

    // 6. Interactive 3D Card Tilt Effect (Subtle & Fluid)
    if (window.matchMedia('(hover: hover)').matches) {
      const tiltCards = document.querySelectorAll('[data-tilt]');
      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5;
          const rotateY = ((x - centerX) / centerX) * 5;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    }

    // 7. Portfolio Showcase Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        workCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });

    // 8. FAQ Accordion Interaction
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });

    // 8b. Pricing Filter Tabs Interaction
    const pricingFilterBtns = document.querySelectorAll('.pricing-filter-btn');
    const pricingCards = document.querySelectorAll('.price-card');
    const pricingGrid = document.querySelector('.pricing-grid');

    pricingFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        pricingFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-pricing-filter');

        if (pricingGrid) {
          pricingGrid.classList.remove('filtered-personal', 'filtered-business', 'filtered-signature');
          if (filter !== 'all') {
            pricingGrid.classList.add(`filtered-${filter}`);
          }
        }

        pricingCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = card.classList.contains('featured') ? 'scale(1.02)' : 'translateY(0)';
            }, 40);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.96)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 240);
          }
        });
      });
    });

    // 9. Product Click -> Direct WhatsApp Chat with Tailored Data Templates
    const WA_PHONE = '6285194732008';
    const PACKAGE_TEMPLATES = {
      'Personal (Rp200.000)':
        `Halo TERL Web Studio 👋\n\n` +
        `Saya ingin memesan *Paket Personal (Rp200.000)* (1 Halaman Profil / Web CV).\n\n` +
        `Berikut data awal saya:\n` +
        `• *Nama Lengkap:* \n` +
        `• *Status (Mahasiswa/Pemula/Pencari Kerja):* \n` +
        `• *Kampus / Bidang Keahlian:* \n` +
        `• *Tujuan Web (Lamaran Kerja / Portofolio Pribadi):* \n` +
        `• *Akun Medsos / Kontak yang Ditampilkan:* \n\n` +
        `Mohon info ketersediaan slot pengerjaannya. Terima kasih!`,

      'Personal Plus (Rp450.000)':
        `Halo TERL Web Studio 👋\n\n` +
        `Saya ingin memesan *Paket Personal Plus (Rp450.000)* (1 Halaman + Domain Nama Sendiri 1 Tahun).\n\n` +
        `Berikut data kebutuhan saya:\n` +
        `• *Nama Lengkap:* \n` +
        `• *Bidang Profesi / Jasa (Freelance/Kreator):* \n` +
        `• *Usulan Nama Domain Sendiri (misal: namaku.com / .my.id):* \n` +
        `• *Jumlah Karya/Proyek untuk Showcase:* \n` +
        `• *Link Akun Medsos / Kontak:* \n\n` +
        `Mohon info ketersediaan slot & aktivasi domainnya. Terima kasih!`,

      'Bisnis Profil (Rp800.000)':
        `Halo TERL Web Studio 👋\n\n` +
        `Saya ingin memesan *Paket Bisnis Profil (Rp800.000)* untuk UMKM (Profil Bisnis 3 Halaman).\n\n` +
        `Berikut data usaha kami:\n` +
        `• *Nama Bisnis / UMKM:* \n` +
        `• *Kategori Produk / Jasa:* \n` +
        `• *Kota / Lokasi Usaha:* \n` +
        `• *Rencana Menu/Halaman (Profil, Produk, Maps, Kontak):* \n` +
        `• *Nomor WA Pemesanan Bisnis:* \n\n` +
        `Mohon info estimasi pengerjaan & ketersediaan slotnya. Terima kasih!`,

      'Bisnis Pro (Rp1.500.000)':
        `Halo TERL Web Studio 👋\n\n` +
        `Saya ingin memesan *Paket Bisnis Pro (Rp1.500.000)* (Hingga 5 Halaman + Domain Sendiri + SEO Dasar).\n\n` +
        `Berikut data bisnis kami:\n` +
        `• *Nama Usaha / Brand:* \n` +
        `• *Jenis Bisnis (Cafe/Resto/Klinik/Jasa):* \n` +
        `• *Pilihan Nama Domain (.com / .id):* \n` +
        `• *Halaman yang Dibutuhkan (Home, Tentang, Layanan, Galeri, Kontak):* \n` +
        `• *Fitur Khusus (Google Maps, WA Form, Analytics):* \n\n` +
        `Mohon informasi ketersediaan slot & konsultasi singkatnya. Terima kasih!`,

      'Signature (Mulai Rp3.000.000)':
        `Halo TERL Web Studio 👋\n\n` +
        `Saya ingin berkonsultasi mengenai *Paket Signature (Mulai Rp3.000.000)* untuk Company Profile / Korporasi.\n\n` +
        `Berikut gambaran awal instansi/perusahaan kami:\n` +
        `• *Nama Perusahaan / Organisasi:* \n` +
        `• *Bidang Usaha / Industri:* \n` +
        `• *Target Nama Domain:* \n` +
        `• *Kebutuhan Khusus (Bespoke UI/UX, 10 Halaman, Multi-bahasa, dll):* \n` +
        `• *Target Timeline Launch:* \n\n` +
        `Mohon informasi proposal dan jadwal briefing dengan tim TERL. Terima kasih!`,

      'TERL Care Maintenance (Rp199.000/bln)':
        `Halo TERL Web Studio 👋\n\n` +
        `Saya ingin berlangganan *TERL Care Maintenance (Rp199.000/bulan)*.\n\n` +
        `Berikut data website saya:\n` +
        `• *Nama Lengkap:* \n` +
        `• *Nama Bisnis / Brand:* \n` +
        `• *Link / URL Website Saat Ini:* \n` +
        `• *Kebutuhan Maintenance / Kendala Utama:* \n\n` +
        `Mohon informasi untuk mulai penjadwalan pemeliharaannya. Terima kasih!`
    };

    const priceCtas = document.querySelectorAll('.price-cta, .btn[data-package]');
    priceCtas.forEach(cta => {
      cta.addEventListener('click', (e) => {
        const pkg = cta.getAttribute('data-package');
        if (pkg && PACKAGE_TEMPLATES[pkg]) {
          e.preventDefault();
          const message = PACKAGE_TEMPLATES[pkg];
          const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
          window.open(waUrl, '_blank');
        }
      });
    });

    // 10. Audit Form -> WhatsApp Auto-Handoff (Optional Form)
    const form = document.getElementById('auditForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const business = document.getElementById('business').value.trim();
        const segment = document.getElementById('segment').value;
        const wa = document.getElementById('whatsapp').value.trim();

        let message = `Halo TERL Web Studio 👋\n\nSaya ingin mengajukan brief konsultasi website:\n`;
        if (name) message += `• *Nama:* ${name}\n`;
        if (business) message += `• *Bisnis/Brand:* ${business}\n`;
        if (segment) message += `• *Pilihan Paket:* ${segment}\n`;
        if (wa) message += `• *Kontak WA:* ${wa}\n`;
        message += `\nMohon info ketersediaan slot pengerjaannya. Terima kasih!`;

        const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      });
    }

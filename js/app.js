// عناصر القائمة
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle menu للموبايل
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll smooth + تفعيل active link
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });

    // إزالة active من الكل
    links.forEach(l => l.classList.remove('active'));
    // إضافة active للّينك الحالي
    link.classList.add('active');

    // إذا على موبايل، إخفاء المينيو بعد اختيار أي لينك
    navLinks.classList.remove('show');
  });
});

// Update active link أثناء السكّول
window.addEventListener('scroll', () => {
  let current = '';

  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

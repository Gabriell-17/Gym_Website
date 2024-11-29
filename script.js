document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');

    // Cambiar el estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            logo.style.fontSize = '1.2rem';
        } else {
            header.classList.remove('scrolled');
            logo.style.fontSize = '1.5rem';
        }
    });

    // Smooth scrolling para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Manejar el envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí normalmente enviarías los datos del formulario a un servidor
            // Por ahora, solo mostraremos un mensaje de éxito
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
});


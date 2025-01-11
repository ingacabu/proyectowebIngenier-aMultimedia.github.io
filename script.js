document.addEventListener('DOMContentLoaded', function() {
    // Reproducir el video automáticamente una vez
    const video = document.querySelector('video');
    video.addEventListener('ended', function() {
        video.pause();
    });

    // Animación y información de los logotipos
    const logos = document.querySelectorAll('.logo');
    const info = document.querySelector('.info');

    logos.forEach(logo => {
        logo.addEventListener('click', function() {
            const company = logo.alt;
            let companyInfo = '';

            switch (company) {
                case 'Adobe':
                    companyInfo = 'Adobe: Empresa que desarrolla software para la creación de contenido digital.';
                    break;
                case 'Unity':
                    companyInfo = 'Unity: Empresa especializada en el desarrollo de videojuegos y contenido interactivo 3D.';
                    break;
                case 'Python':
                    companyInfo = 'Python: Lenguaje de programación utilizado para desarrollo web, ciencia de datos y automatización.';
                    break;
                default:
                    companyInfo = '';
            }

            info.textContent = companyInfo;
            info.classList.add('active');
        });
    });

    // Línea de tiempo interactiva
    const events = document.querySelectorAll('.event');

    events.forEach(event => {
        event.addEventListener('click', function() {
            const eventText = event.getAttribute('data-text');
            info.textContent = eventText;
            info.classList.add('active');
        });
    });

    // Animaciones de botones
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener[_{{{CITATION{{{_1{](https://github.com/la9una/web/tree/ba1073ae044ebb7b538a3b13f0f9598f7c410bb6/docs%2Fbootstrap%2Falignci.md)

            document.addEventListener('DOMContentLoaded', function() {
                // Reproducir el video automáticamente una vez
                const video = document.querySelector('video');
                video.addEventListener('ended', function() {
                    video.pause();
                });
            
            [_{{{CITATION{{{_1{](https://github.com/la9una/web/tree/ba1073ae044ebb7b538a3b13f0f9598f7c410bb6/docs%2Fbootstrap%2Falignci.md)
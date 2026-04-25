// Script per il countdown completamente riscritto
document.addEventListener('DOMContentLoaded', function () {
    // Funzione di aggiornamento del countdown

    function updateCountdown() {
        // Data del matrimonio - formato YYYY-MM-DD
        var weddingDate = new Date('2026-08-31T15:30');


        // Data corrente
        var currentDate = new Date();

        // Differenza in millisecondi
        var difference = weddingDate.getTime() - currentDate.getTime();

        // Se la data è già passata
        if (difference <= 0) {
            document.getElementById('countdown').innerHTML = "";
            return;
        }

        var oneDay = 1000 * 60 * 60 * 24;
        var oneHour = 1000 * 60 * 60;
        var oneMinute = 1000 * 60;

        var days = Math.floor(difference / oneDay);
        var hours = Math.floor((difference % oneDay) / oneHour);
        var minutes = Math.floor((difference % oneHour) / oneMinute);
        var seconds = Math.floor((difference % oneMinute) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    // Esegui subito
    updateCountdown();
    updateRsvpVisibility();
    updatePhotoVisibility();

    // Esegui ogni secondo
    setInterval(updateCountdown, 1000);

    function updateRsvpVisibility() {
        var currentDate = new Date();
        var maxDisplayDate = new Date('2026-08-16T00:00:00');
        var rsvpSection = document.getElementById('rsvpSection');

        if (!rsvpSection) {
            return;
        }

        if (currentDate <= maxDisplayDate) {
            rsvpSection.style.display = 'block';
        } else {
            rsvpSection.style.display = 'none';
        }
    }
    function updatePhotoVisibility() {
        var currentDate = new Date();
        var minDisplayDate = new Date('2026-08-25T00:00:00');
        var minDisplayDate = new Date('2025-08-25T00:00:00');
        var photoSection = document.getElementById('photoSection');

        if (!photoSection) {
            return;
        }

        if (currentDate >= minDisplayDate) {
            photoSection.style.display = 'block';
        } else {
            photoSection.style.display = 'none';
        }
    }
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calcola l'opacità in base alla posizione di scroll
    // Inizia a sbiadire quando iniziamo a scorrere
    const opacity = Math.max(0, 1.2 - (scrollPosition / (windowHeight * 0.9)));

    // Applica l'opacità all'header
    header.style.opacity = opacity;

    // Se stiamo scrollando, rendi l'header fisso sullo sfondo
    if (scrollPosition > 0) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.left = '0';
        header.style.width = '100%';
        header.style.zIndex = '-1'; // Posiziona dietro il contenuto
        document.body.style.paddingTop = windowHeight + 'px'; // Aggiungi padding per compensare l'header fisso
    } else {
        header.style.position = 'relative';
        header.style.zIndex = '0';
        document.body.style.paddingTop = '0';
    }
});

// Esegui lo script anche al caricamento della pagina
window.dispatchEvent(new Event('scroll'));

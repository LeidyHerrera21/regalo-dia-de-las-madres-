function nextScreen(id){

    document.querySelectorAll(".screen").forEach(screen=>{
        screen.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}

function mostrarAlerta() {
    alert("¡Mensaje enviado con amor! ❤️");
}

// Puedes añadir efectos como que las fotos se muevan al pasar el mouse
const strip = document.querySelector('.photo-strip');
strip.addEventListener('mouseenter', () => {
    strip.style.transform = 'rotate(0deg) scale(1.1)';
    strip.style.transition = '0.5s';
});

strip.addEventListener('mouseleave', () => {
    strip.style.transform = 'rotate(-5deg) scale(1)';
});

// Seleccionamos todos los carriles
const lanes = document.querySelectorAll('.film-lane');

lanes.forEach(lane => {
    // Al pasar el mouse, pausar la animación
    lane.addEventListener('mouseenter', () => {
        lane.style.animationPlayState = 'paused';
    });
    
    // Al quitar el mouse, reanudar
    lane.addEventListener('mouseleave', () => {
        lane.style.animationPlayState = 'running';
    });
});

document.addEventListener("click", () => {

    const music = document.getElementById("bg-music");

    music.play();

}, { once: true });
"use strict";

const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

// Cuando CLICK en punto
// Saber la posición de ese punto
// Aplicar un transform translateX al grande
// QUITAR la clase activo de TODOS puntos
// AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach((cadaPunto, i) => {
  // Asignamos un CLICK a cadaPunto
  punto[i].addEventListener("click", () => {
    // Guardar la posición de ese PUNTO
    let posicion = i;
    // Calculando el espacio que debe DESPLAZARSE el GRANDE
    let operacion = posicion * -50;

    // MOVEMOS el grand
    grande.style.transform = `translateX(${operacion}%)`;

    // Recorremos TODOS los punto
    punto.forEach((cadaPunto, i) => {
      // Quitamos la clase ACTIVO a TODOS los punto
      punto[i].classList.remove("activo");
    });
    // Añadir la clase activo en el punto que hemos hecho CLICK
    punto[i].classList.add("activo");
  });
});

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[index].style.display = "block";
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);

// Avanzar al siguiente slide cada 3 segundos
setInterval(nextSlide, 3000);

//cambia color la cabezera de la web

window.addEventListener("scroll", function () {
  let cebezera = document.querySelector(".cabezera");
  let h4 = document.querySelector(".h4");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 200) {
    cebezera.classList.add("scrolled");
    h4.classList.add("scroll");
  } else {
    cebezera.classList.remove("scrolled");
    h4.classList.remove("scroll");
  }
});

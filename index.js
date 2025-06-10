//efecto escritura
const mensaje = "una apasionada del desarrollo web";
    const velocidadEscritura = 100;
    let i = 0;

    function escribir() {
      if (i < mensaje.length) {
        document.getElementById("texto").textContent += mensaje.charAt(i);
        i++;
        setTimeout(escribir, velocidadEscritura);
      }
    }

    // Cursor parpadeante sin keyframes
    setInterval(() => {
      const cursor = document.getElementById("cursor");
      cursor.style.visibility = (cursor.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500);
    window.onload = escribir;

// Menu Responsive para mobiles
function mobile() {
  const menu = document.getElementById("idMobile");
  menu.classList.toggle("active");
}

const container = document.querySelector('body');

// para dirigir a cada seccion

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu__navegacion a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Click en:', this.textContent);
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      document.getElementById('idMobile').classList.remove('active');
    });
  });
});

//Crea los círculos
for (let i = 0; i < 50; i++) {
  const circleContainer = document.createElement('div');
  circleContainer.classList.add('circle-container');
  const circle = document.createElement('div');
  circle.classList.add('circle');

  circleContainer.appendChild(circle); container.appendChild(circleContainer);
}
// Selecciona todos los elementos circle-container 
const circleContainers = document.querySelectorAll('.circle-container');
// Itera sobre los elementos circle-container 
circleContainers.forEach(circleContainer => { const circle = circleContainer.querySelector('.circle'); console.log(circle); });

// Detecta el scroll y aplica la clase cuando se llega a la sección
window.addEventListener("scroll", function () {
  const section = document.querySelector('.sobre__mí__container');
  const imagen = document.querySelector('.sobre__mi__imagen');
  
  // Obtener la posición de la sección en la pantalla
  const sectionPosition = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  // Si la sección está dentro de la ventana de visualización
  if (sectionPosition < windowHeight - 100) {
    section.classList.add('aparecer');
  }
  
  // Si la imagen está dentro de la ventana de visualización
  const imagenPosition = imagen.getBoundingClientRect().top;
  if (imagenPosition < windowHeight - 100) {
    imagen.classList.add('aparecer');
  }
});

// animacion de section sobre mi

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // para que solo se anime una vez
      }
    });
  }, {
    threshold: 0.1 // el porcentaje del elemento visible para activar
  });

  document.querySelectorAll('.animar').forEach(element => {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2 // el porcentaje del elemento visible para activar
  });

  document.querySelectorAll('.animar').forEach(element => {
    observer.observe(element);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.derecha').forEach(element => {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.izquierda').forEach(element => {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.skills__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      640: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
    },
  });
});

 document.addEventListener('DOMContentLoaded', function () {
    const toggleLink = document.getElementById('toggleLink');
    const contenido = document.getElementById('mascontenido');

    toggleLink.addEventListener('click', function () {
      contenido.classList.toggle('mostrar');

      // Cambia el texto dinámicamente
      this.textContent = contenido.classList.contains('mostrar') ? 'Leer menos' : 'Leer más';
    });
  });

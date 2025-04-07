// Menu Responsive para mobiles
function mobile() {
  const menu = document.getElementById("idMobile");
  menu.classList.add("show");
  menu.style.listStyle = none
}

const container = document.querySelector('body');

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
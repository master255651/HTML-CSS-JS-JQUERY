var map = document.querySelector('.map');
var cars = document.querySelectorAll('.car');

map.addEventListener('dragover', (event) => {
  event.preventDefault();
});

cars.forEach(car => {
  car.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('id', event.target.id);
  })
});

map.addEventListener('drop', (event) => {
  let car = document.getElementById(event.dataTransfer.getData('id'));
  car.style.position = "absolute";
  car.style.top = "430px";
  car.style.left = "0px";
  car.style.animation = "move 8s ease-in";
  car.style.animationFillMode = "forwards";
  event.target.append(car);
});
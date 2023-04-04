const btnMobile = document.querySelector('.btn-mobile');
const nav = document.querySelector('#nav');

btnMobile.addEventListener('click', function() {
  nav.classList.toggle('active');
  btnMobile.classList.toggle('active');
});

function calcularIMC() {
  var altura = document.getElementById("height").value / 100;
  var peso = document.getElementById("weight").value;
  var imc = peso / (altura * altura);
  
  if (altura && peso) {
    document.getElementById("imc").innerHTML = imc.toFixed(2);

    if (imc < 18.5) {
      document.getElementById("imc").classList.add("abaixo-peso");
      document.getElementById("imc-message").innerHTML = "Abaixo do peso";
    } else if (imc < 25) {
      document.getElementById("imc").classList.add("peso-normal");
      document.getElementById("imc-message").innerHTML = "Peso normal";
    } else if (imc < 30) {
      document.getElementById("imc").classList.add("acima-peso");
      document.getElementById("imc-message").innerHTML = "Acima do peso";
    } else {
      document.getElementById("imc").classList.add("obesidade");
      document.getElementById("imc-message").innerHTML = "Obesidade";
    }
  } else {
    alert("Por favor, preencha os campos de altura e peso.");
  }
}
/*
var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  calcularIMC();
});


const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollPosition = 0;
const planWidth = document.querySelector('.plan').clientWidth;
const numPlans = slider.children.length;
const maxScrollPosition = (numPlans - 1) * (planWidth + 20);

prevBtn.addEventListener('click', () => {
  if (scrollPosition > 0) {
    scrollPosition -= planWidth + 20;
    slider.style.transform = `translateX(-${scrollPosition}px)`;
  }
});

nextBtn.addEventListener('click', () => {
  if (scrollPosition < maxScrollPosition) {
    scrollPosition += planWidth + 20;
    slider.style.transform = `translateX(-${scrollPosition}px)`;
  }
});
*/
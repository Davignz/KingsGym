const btnMobile = document.querySelector('.btn-mobile');
const nav = document.querySelector('#nav');
const links = document.querySelectorAll('.menu a');

btnMobile.addEventListener('click', function() {
  nav.classList.toggle('active');
  btnMobile.classList.toggle('active');
});

links.forEach(function(link) {
  link.addEventListener('click', function() {
    nav.classList.remove('active');
    btnMobile.classList.remove('active');
  });
});


function calcularIMC() {
  var altura = document.getElementById("height").value / 100;
  var peso = document.getElementById("weight").value;
  
  if (altura && peso) {
    var imc = peso / (altura * altura);
    document.getElementById("imc").innerHTML = imc.toFixed(2);

    if (imc < 18.5) {
      document.getElementById("imc").classList.add("abaixo-peso");
      document.getElementById("resultado").innerHTML = "Abaixo do peso";
    } else if (imc < 25) {
      document.getElementById("imc").classList.add("peso-normal");
      document.getElementById("resultado").innerHTML = "com Peso normal";
    } else if (imc < 30) {
      document.getElementById("imc").classList.add("acima-peso");
      document.getElementById("resultado").innerHTML = "Acima do peso";
    } else {
      document.getElementById("imc").classList.add("obesidade");
      document.getElementById("resultado").innerHTML = "Obeso";
    }
  } else {
    alert("Por favor, preencha os campos de altura e peso.");
  }
}

var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  calcularIMC();
});

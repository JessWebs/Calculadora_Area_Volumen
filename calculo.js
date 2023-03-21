function calcularCubo() {
    var lado = document.getElementById("ladoCubo").value;
    var area = 6 * lado * lado;
    var volumen = lado * lado * lado;
    alert("Área Cubo: " + area.toFixed(2) + "\nVolumen Cubo: " + volumen.toFixed(2));
  }
  
  function calcularEsfera() {
    var radio = document.getElementById("radioEsfera").value;
    var area = 4 * Math.PI * radio * radio;
    var volumen = (4/3) * Math.PI * radio * radio * radio;
    alert("Área Esfera: " + area.toFixed(2) + "\nVolumen Esfera: " + volumen.toFixed(2));
  }
  
  function calcularCilindro() {
    var radio = document.getElementById("radioCilindro").value;
    var altura = document.getElementById("alturaCilindro").value;
    var area = 2 * Math.PI * radio * (radio + altura);
    var volumen = Math.PI * radio * radio * altura;
    alert("Área Cilindro: " + area.toFixed(2) + "\nVolumen Cilindro: " + volumen.toFixed(2));
  }
  
  function calcularCono() {
    var radio = document.getElementById("radioCono").value;
    var altura = document.getElementById("alturaCono").value;
    var area = Math.PI * radio * (radio + Math.sqrt(radio * radio + altura * altura));
    var volumen = (1/3) * Math.PI * radio * radio * altura;
    alert("Área Cono: " + area.toFixed(2) +  "\nVolumen Cono: " + volumen.toFixed(2));
  }
  
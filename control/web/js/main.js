const adelante =document.getElementById("adelante");
const derecha =document.getElementById("derecha");
const izquierda =document.getElementById("izquierda");
const atras =document.getElementById("atras");
const detener =document.getElementById("detener");

const respuesta =document.getElementById("respuesta");

function transladeInstruction(letter){
  switch (letter) {
    case 'w':
      return "Adelante";
      break;
    case 'd':
      return "Derecha";
      break;
    case 'a':
      return "Izquierda";
      break;
    case 's':
      return "Atras";
      break;
    case 'e':
      return "Detenido";
      break;

    default:
      return "No valido"
      break;
  }
}

function callApiRequest(status) {
  // Hacer una petición para un usuario con ID especifico
  axios
    .get(
      "http://localhost/iot-car-control/back-end/apis/setRegistro.php?valorEstatus="+status
    )
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(typeof response.data)
      let action = transladeInstruction(status)
      respuesta.innerText = response.data + " (" + action + ")";
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
      respuesta.innerText = "La operación no se ha podido completar"
    });
}



adelante.addEventListener('click', () => {
  callApiRequest('w');
});
derecha.addEventListener('click', () => {
  callApiRequest('d');
});
izquierda.addEventListener('click', () => {
  callApiRequest('a');
});
atras.addEventListener('click', () => {
  callApiRequest('s');
});

detener.addEventListener('click', () => {
  callApiRequest('e');
});



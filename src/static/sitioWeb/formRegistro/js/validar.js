function validar() {
  var nombre, apellido, correo, usuario, clave, telefono, expression;
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  correo = document.getElementById("correo").value;
  usuario = document.getElementById("usuario").value;
  clave = document.getElementById("clave").value;
  telefono = document.getElementById("telefono").value;

  if(nombre === "" || apellido === "" || correo === "" || usuario === "" || clave === "" || telefono === "") {
    alert("Todos los campos son obligatorios");
    return false;
  }else if(apellido.length > 30) {
    alert("El apellido es muy largo");
    return false;
  }
}

// obtener datos datos del html
const form = document.getElementById("formulario");
const botonVer = document.getElementById("botonVer");

// obtener credenciales del usuario
const nameL = localStorage.getItem("name");
const passwordL = localStorage.getItem("password");
const datos = localStorage.getItem("datos");

// validar credenciales
const handleSubmit = (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = data.get("name");
  const password = data.get("password");

  if (name === nameL && password === passwordL) {
    window.location.href = "index.html";
  } else {
    alert("usuario o contracena incorrecta");
  }
};

form.addEventListener("submit", handleSubmit);

// mostrar/ocultar contraseña
botonVer.addEventListener("click", (e) => {
  e.preventDefault();
  const password = document.getElementById("password");
  const img = document.getElementById("img");

  if (password.type === "password") {
    password.type = "text";
    img.src = "../img/view.png";
  } else {
    password.type = "password";
    img.src = "../img/hide.png";
  }
});

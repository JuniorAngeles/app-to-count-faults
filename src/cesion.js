// obtener datos datos del html
const form = document.getElementById("formulario");

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

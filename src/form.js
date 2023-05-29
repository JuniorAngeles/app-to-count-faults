// formulario
const form = document.getElementById("formulario");
const botonVer = document.getElementById("botonVer");

// crear usuario
const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const password = data.get("password");

  const datos = {
    name,
    password,
  };

  localStorage.setItem("datos", JSON.stringify(datos));
  localStorage.setItem("name", name);
  localStorage.setItem("password", password);
  window.location.href = "index.html";
};

form.addEventListener("submit", handleSubmit);

// comprobar si el usuario existe
const datos = localStorage.getItem("datos");
if (datos) {
  window.location.href = "inicio-sesion.html";
}

// mostrar/ocultar contraseña
botonVer.addEventListener("click", () => {
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

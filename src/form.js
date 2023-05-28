// formulario
const form = document.getElementById("formulario");

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

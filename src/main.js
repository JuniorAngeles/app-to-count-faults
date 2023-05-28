// obtener datos datos del html
const button = document.getElementById("botonClick");
const contenedor = document.getElementById("constenedor");
const botonDelete = document.getElementById("deleteClick");

// variables
let count = 0;
let money = 0;

// agregar los dato de las faltas y el costo
const handleClick = (e) => {
  e.preventDefault();
  count++;
  money = money + 150;

  const valor = {
    count,
    money,
  };
  localStorage.setItem("valor", JSON.stringify(valor));
  const dato = JSON.parse(localStorage.getItem("valor"));
  contenedor.innerHTML = `
  faltas que lleva:
  <h4> ${dato.count}</h4>
  dinero a pagar:
  <h4> ${dato.money}</h4>
  `;
};
button.addEventListener("click", handleClick);

// eliminar datos
const dato = JSON.parse(localStorage.getItem("valor"));
if (dato === null) {
  contenedor.innerHTML = `
  faltas que lleva:
  <h4> ${count}</h4>
  dinero a pagar:
  <h4> ${money}</h4>
  `;
}

const handleDelete = (e) => {
  e.preventDefault();
  const confirmacion = confirm("¿Estás seguro de eliminar los datos?");
  if (confirmacion) {
    localStorage.removeItem("valor");
    window.location.href = "index.html";
  }
};

botonDelete.addEventListener("click", handleDelete);

// comprobar si el usuario existe
const datos = localStorage.getItem("datos");

if (!datos) {
  window.location.href = "forulario.html";
}

// eliminar cuenta
const bCuenta = document.getElementById("botonCuenta");

const handleCuenta = (e) => {
  e.preventDefault();
  const confirmacion = confirm("¿Estás seguro de eliminar tu cuenta?");
  if (confirmacion) {
    window.location.href = "forulario.html";
    localStorage.clear();
  }
};

bCuenta.addEventListener("click", handleCuenta);

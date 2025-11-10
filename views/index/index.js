const API_URL = "https://infraapi.labinfra.cloud-ip.cc/api/usuarios/";



async function listarUsuarios() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const contenedor = document.getElementById("listaUsuarios");
  contenedor.innerHTML = "";

  if (data.length === 0) {
    contenedor.innerHTML = "<p class='text-gray-500'>No hay usuarios registrados.</p>";
  } else {
    data.forEach(u => {
      contenedor.innerHTML += `
        <div class="border p-2 rounded mb-2">
          <p><strong>${u.nombre}</strong> — ${u.email} — ${u.tel}</p>
        </div>`;
    });
  }
}

async function crearUsuario() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, email, tel })
  });

  if (res.ok) {
    mostrarToast("Usuario creado correctamente ✅");
    listarUsuarios();
  } else {
    mostrarToast("Error al crear usuario ❌");
  }
}

function mostrarToast(mensaje) {
  const toast = document.getElementById("toast");
  toast.querySelector("div:last-child").textContent = mensaje;

  toast.classList.remove("hidden");
  void toast.offsetWidth;
  toast.classList.remove("translate-y-4", "opacity-0");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    await crearUsuario();
    form.reset();
  });
  listarUsuarios();
});

async function fetchUsers() {
  const container = document.querySelector(".users-container");
  const messageDiv = document.getElementById("message");

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Respuesta no exitosa");
    }

    const users = await res.json();

    for (const user of users) {
      const skeleton = document.createElement("div");
      skeleton.className = "skeleton bg-white p-4 rounded-xl shadow animate-pulse space-y-2.5 max-w-lg";
      skeleton.innerHTML = `
        <div class="flex items-center w-full">
          <div class="h-2.5 bg-gray-200 rounded-full w-32"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
        </div>
        <div class="flex items-center w-full max-w-[480px]">
          <div class="h-2.5 bg-gray-200 rounded-full w-full"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
        </div>
        <div class="flex items-center w-full max-w-[400px]">
          <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
          <div class="h-2.5 ms-2 bg-gray-200 rounded-full w-80"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
        </div>
        <span class="sr-only">Loading...</span>
      `;
      container.appendChild(skeleton);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const card = document.createElement("div");
      card.className = "card bg-black shadow-md rounded-xl p-4 border hover:shadow-lg transition";

      card.innerHTML = `
        <h3 class="text-xl font-bold text-amber-50 mb-2">Nombre: ${user.name}</h3>
        <p class="text-gray-300"><strong>Usuario:</strong> ${user.username}</p>
        <p class="text-gray-300"><strong>Email:</strong> ${user.email}</p>
        <p class="text-gray-300"><strong>Empresa:</strong> ${user.company.name}</p>
      `;
      container.replaceChild(card, skeleton);
    }
  } catch (error) {
    messageDiv.textContent = "Error al cargar los usuarios. Inténtalo de nuevo más tarde.";
    console.error("Error al hacer fetch:", error);
  }
}

fetchUsers();
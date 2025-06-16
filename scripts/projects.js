import { projects } from "./data/projects-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  const closeModalBtn = document.getElementById("close-modal");
  const modalBox = document.getElementById("modal-box");

  // Render all projects
  projects.forEach((project, index) => {
    const techs = project.technologies
      .map(
        (t) => `<span class="text-xs bg-cyan-700 px-2 py-1 rounded">${t}</span>`
      )
      .join(" ");

    const html = `
      <div 
        class="bg-[#1a1a2e]/80 backdrop-blur-md rounded-xl shadow-lg transition-all duration-500 ease-in-out 
              transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/40 p-6 cursor-pointer"
        data-aos="zoom-in" data-aos-once="false" data-aos-anchor-placement="top-bottom"
        data-index="${index}"
      >
        <img 
          src="${project.image}" 
          alt="${project.title}" 
          class="rounded-lg mb-4 w-full h-60 object-contain bg-white p-3"
        />
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="text-sm text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">${techs}</div>
        <button 
          class="px-4 py-2 text-sm font-medium bg-cyan-500 hover:bg-cyan-600 rounded-lg transition"
          data-open-modal="${index}"
        >
          View More
        </button>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", html);
  });

  // Abrir modal con animación
  container.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open-modal]");
    if (!btn) return;

    const index = btn.getAttribute("data-open-modal");
    const project = projects[index];

    const techs = project.technologies
      .map(
        (t) => `<span class="text-xs bg-cyan-700 px-2 py-1 rounded">${t}</span>`
      )
      .join(" ");

    modalContent.innerHTML = `
      <div class="bg-[#1a1a2e] p-6 rounded-lg text-white">
        <h2 class="text-2xl font-bold mb-4">${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" class="w-full h-60 object-contain bg-white rounded mb-4 p-3" />
        <p class="text-sm text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">${techs}</div>
        <a href="${project.link}" target="_blank" class="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium">
          <i data-lucide="github" class="w-5 h-5"></i> Repository on GitHub
        </a>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");

    // Aplica animación al modal box
    requestAnimationFrame(() => {
      modalBox.classList.remove("scale-95", "opacity-0");
      modalBox.classList.add("scale-100", "opacity-100");
    });

    lucide.createIcons();
  });

  // Cerrar modal con animación
  function closeModal() {
    modalBox.classList.remove("scale-100", "opacity-100");
    modalBox.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }, 300);
  }

  closeModalBtn.addEventListener("click", closeModal);

  // También cierra al hacer clic fuera del modal-box
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Opcional: cerrar con la tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  AOS.refresh();
});

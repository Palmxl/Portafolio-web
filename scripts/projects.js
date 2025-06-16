import { projects } from "./data/projects-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");

  projects.forEach(project => {
    const techs = project.technologies.map(t =>
      `<span class="text-xs bg-cyan-700 px-2 py-1 rounded">${t}</span>`
    ).join(" ");

    const html = `
      <div class="bg-[#1a1a2e] rounded-xl shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-2 transition duration-300 p-6 animate-fadeIn">
        <img src="${project.image}" alt="${project.title}" 
             class="rounded-lg mb-4 w-full h-60 object-contain bg-white p-3" />
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="text-sm text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">${techs}</div>
        <a href="${project.link}" target="_blank" 
           class="inline-block px-4 py-2 text-sm font-medium bg-cyan-500 hover:bg-cyan-600 rounded-lg transition">
           View More
        </a>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", html);
  });
});

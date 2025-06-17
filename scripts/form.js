document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  const inputs = form.querySelectorAll("input, textarea");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    // Mensaje visual
    const messageBox = document.createElement("div");
    messageBox.innerHTML = `✅ Message sent successfully!`;
    messageBox.className = `
      fixed top-5 left-1/2 transform -translate-x-1/2 
      bg-emerald-600 text-white px-6 py-3 
      rounded-xl shadow-lg text-sm z-50 transition-all 
      duration-500 ease-in-out opacity-100 flex items-center gap-2
    `;
    document.body.appendChild(messageBox);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Animación suave para vaciar campos
        inputs.forEach((input) => {
          input.classList.add("transition-all", "duration-500", "opacity-50");
          setTimeout(() => {
            input.value = "";
            input.classList.remove("opacity-50");
          }, 300);
        });

        setTimeout(() => {
          messageBox.style.opacity = "0";
          setTimeout(() => messageBox.remove(), 500);
        }, 4000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error:", error);
      messageBox.innerHTML = `❌ Something went wrong. Please try again.`;
      messageBox.classList.replace("bg-emerald-600", "bg-red-600");

      setTimeout(() => {
        messageBox.style.opacity = "0";
        setTimeout(() => messageBox.remove(), 500);
      }, 4000);
    }
  });
});
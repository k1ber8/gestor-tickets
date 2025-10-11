document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "tickets.html";
    });
  }

  const newTicketForm = document.getElementById("newTicketForm");
  if (newTicketForm) {
    newTicketForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Ticket guardado correctamente");
      window.location.href = "tickets.html";
    });
  }
});

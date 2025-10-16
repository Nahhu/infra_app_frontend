document.addEventListener("DOMContentLoaded", () => {
  const toast = document.getElementById("toast");
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    toast.classList.remove("hidden");
    void toast.offsetWidth;
    toast.classList.remove("translate-y-4", "opacity-0");
    toast.classList.add("opacity-100", "translate-y-0");

    setTimeout(() => {
      toast.classList.remove("opacity-100", "translate-y-0");
      toast.classList.add("translate-y-4", "opacity-0");

      setTimeout(() => {
        toast.classList.add("hidden");
      }, 300);
    }, 3000);
  });
});

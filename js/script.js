document.querySelector(".menu-toggle").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector("#list ul").classList.toggle("show");
  });
  
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: "p1", name: "Smart Watch" },
    { id: "p2", name: "Bluetooth Speaker" },
    { id: "p3", name: "Laptop Sleeve" },
    { id: "p4", name: "Wireless Mouse" },
    { id: "p5", name: "USB-C Hub" }
  ];

  const select = document.getElementById("product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});

function filterMenu(menu) {
  const menuNode = document.querySelector("#menu");
  const vegetarianOptions = menu.filter(
    (option) => option.isVegetarian === true
  );
  vegetarianOptions.forEach((option) => {
    let dish = document.createElement("li");
    dish.textContent = option.name + " price: " + option.price.toFixed(2);
    menuNode.appendChild(dish);
  });
}

filterMenu([
  {
    name: "Chicken parmesan",
    isVegetarian: false,
    price: 1.00
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
    price: 1.00
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
    price: 1.00
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
    price: 1.00
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
    price: 1.00
  },
]);

//product tree colapse
const nestedTableNames = document.querySelectorAll(
  ".nested-item__label-colapse"
);
nestedTableNames.forEach((item) => {
  item.addEventListener("click", () => {
    const child = item.closest(".nested-item__label").nextElementSibling;
    child.classList.toggle("h-full");
    child.classList.toggle("opacity-100");
    const categoryCloseBtn = item.querySelector(".category-close-btn");

    if (child.classList.contains("h-full")) {
      categoryCloseBtn.classList.remove("rotate-180");
    } else {
      categoryCloseBtn.classList.add("rotate-180");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("add_item").addEventListener("click", function () {
    let container = document.querySelector(".nested-item__child");

    if (!container) {
      container = document.createElement("div");
      container.classList.add(
        "nested-item__child",
        "ml-10",
        "h-0",
        "opacity-0",
        "transition-all",
        "duration-300",
        "ease-linear"
      );
      container.innerHTML = "set new child";
      document.querySelector(".nested").appendChild(container);
    }

    let newIndex = document.querySelectorAll(".nested-item__label").length;
    let newItem = document.createElement("input");
    newItem.classList.add("nested-item", "flex", "flex-col", "pl-4", "lg:pl-8");
    newItem.placeholder = "set new child";
    newItem.setAttribute("id", newIndex);
    container.appendChild(newItem);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let nestedItems = document.querySelectorAll(".nested-item__child");

  nestedItems.forEach(function (item) {
    new Sortable(item, {
      group: "nested",
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65,
      // Customize the options based on your requirements
      onAdd: function (evt) {
        // Handle the drop event if needed
        console.log("Dropped:", evt);
      },
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let nestedItems = document.querySelector(".tree_container");
  new Sortable(nestedItems, {
    animation: 150,
    ghostClass: "blue-background-class",
  });
});

nested - item;

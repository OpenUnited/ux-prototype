const button = document.querySelector(".table-products-contribute__button");
let isShowingMore = false;

if (button) {

  const hiddenRows = document.querySelectorAll(".table-row.hidden");

  if (!hiddenRows.length) {
    button.classList.add('hidden');
  }

  button.addEventListener("click", function () {
      const hiddenRows = document.querySelectorAll(".table-row.hidden");
      isShowingMore = !isShowingMore;
      
      if (isShowingMore) {
          for (let i = 0; i < 10 && i < hiddenRows.length; i++) {
              hiddenRows[i].classList.remove("hidden");
          }

          const hiddenRowsRest = document.querySelectorAll(".table-row.hidden");

          if (hiddenRowsRest.length) {
            button.textContent = "Show more";
            isShowingMore = false;
          } else {
            button.textContent = "Show less";
          }

      } else {
        const rows = document.querySelectorAll(".table-row");

          for (let i = 10; i <= rows.length - 1; i++) {
            rows[i].classList.add("hidden");
          }

          button.textContent = "Show more";
      }

  });
}

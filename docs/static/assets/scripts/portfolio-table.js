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

function cutCopyAndRemove(targetElement, sourceElement) {

  if (sourceElement && targetElement) {
    const clonedNode = sourceElement.cloneNode(true);
    
    targetElement.appendChild(clonedNode); // Вставляем клонированный элемент
    sourceElement.parentNode.removeChild(sourceElement); // Удаляем исходный элемент
    return clonedNode;
  }

}

const portfolioTable = document.querySelector('#portfolio-table');
const rows = document.querySelectorAll(".table-row");

rows.forEach((row) => {
  const tableLinkCells = row.querySelectorAll('[data-table-link]');

  tableLinkCells.forEach((tableLink) => {
    let clonedPopup;

    tableLink?.addEventListener("mouseover", (event) => {
      const tablePopup = tableLink.querySelector('[data-table-popup]');
  
      if(!tablePopup) return
      tablePopup.classList.remove('hidden');
      clonedPopup = cutCopyAndRemove(portfolioTable, tablePopup);
  
      clonedPopup.style.position = "absolute";
      clonedPopup.style.top = `${tableLink.offsetTop - clonedPopup.clientHeight}px`; // Adjust the positioning as needed
      clonedPopup.style.left = `${tableLink.offsetLeft}px`;
  
      clonedPopup.addEventListener("mouseleave", (event) => {
        clonedPopup.classList.add('hidden');
        clonedPopup = cutCopyAndRemove(tableLink, clonedPopup);
      })
    });
  
    tableLink?.addEventListener("mouseleave", (event) => {
      if (event.relatedTarget === clonedPopup) return;
  
      clonedPopup.classList.add('hidden');
      clonedPopup = cutCopyAndRemove(tableLink, clonedPopup);
  
    });
  });
  
  
});

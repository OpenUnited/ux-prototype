// Get all tab links and tab bodies
const tabLinks = document.querySelectorAll('.tab-link');
const tabBodies = document.querySelectorAll('.tab-body');
const ideasBtnModal = document.querySelector('.ideas-btn-modal');

// Add click event listeners to tab links
tabLinks.forEach((tabLink, index) => {
  tabLink.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all tab links and tab bodies
    tabLinks.forEach((link) => link.classList.remove('active'));
    tabBodies.forEach((body) => body.classList.remove('active'));

    // Add active class to the clicked tab link and corresponding tab body
    tabLink.classList.add('active');
    tabBodies[index].classList.add('active');

    if (tabLink.classList.contains('active') && tabLink.classList.contains('tab-link-ideas')) {
      ideasBtnModal.innerHTML = "Add Idea";
      ideasBtnModal.dataset.id = "modal-idea"
    } else {
      ideasBtnModal.innerHTML = "Add Bug";
      ideasBtnModal.dataset.id = "modal-bug"
    }

  });
});

// product tree functionality

const nestedTableNames = document.querySelectorAll(".nested-item__label-icon");

nestedTableNames.forEach((item) => {
  item.addEventListener("click", () => {
    const child = item.closest(".nested-item__label").nextElementSibling;
    child.classList.toggle("hidden");

    const categoryOpenBtn = item.querySelector(".category-open-btn");
    const categoryCloseBtn = item.querySelector(".category-close-btn");

    if (child.classList.contains("hidden")) {
      categoryCloseBtn.classList.remove("hidden");
      categoryOpenBtn.classList.add("hidden");
    } else {
      categoryCloseBtn.classList.add("hidden");
      categoryOpenBtn.classList.remove("hidden");
    }
  });
});

// functionality for open mobile menu

const menuWrap = document.querySelector(".menu-wrap");
const menuOverlay = document.querySelector(".menu-overlay");
const openMenuButton = document.querySelector(".btn-open-menu");
const closeMenuButton = document.querySelector(".btn-close-menu");
const body = document.body;

function openMobileMenu() {
  menuWrap.classList.add("menu-open");
  body.classList.add("overflow-hidden");
}

function closeMobileMenu() {
  menuWrap.classList.remove("menu-open");
  body.classList.remove("overflow-hidden");
}

openMenuButton.addEventListener("click", openMobileMenu);
closeMenuButton.addEventListener("click", closeMobileMenu);
menuOverlay.addEventListener("click", closeMobileMenu);

import './modals.js';
import './setup-choices.js';
import './tree-multiselect.js'
import './steps-challenges.js'

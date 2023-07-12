  // filter modal open

  const btnModapOpen = document.querySelectorAll('.btn-modal__open');
  const modalWrapFilter = document.querySelector('.modal-wrap-filter');
  const btnModalClose = document.querySelector('.btn-modal__close');

  btnModapOpen.forEach(btn => {
    btn.addEventListener('click', () => {

      modalWrapFilter.classList.remove('hidden');
    });
  })

  btnModalClose.addEventListener('click', () => {
    modalWrapFilter.classList.add('hidden');
  });

  // video popup open

  const videoBtnsOpen = document.querySelectorAll('.btn-video__open');
  const modalWrap = document.querySelector('.modal-wrap');
  const modalWrapCloseBtn = document.querySelector('.btn-video__close');

  modalWrap.querySelector('iframe').src = '';

  videoBtnsOpen.forEach(btn => {
    btn.addEventListener('click', () => {

      modalWrap.classList.remove('hidden');
      modalWrap.querySelector('iframe').src = btn.dataset.video;
    });
  })

  modalWrapCloseBtn.addEventListener('click', () => {
  modalWrap.classList.add('hidden');
  });

  // product tree functionality

  const nestedTableNames = document.querySelectorAll('.nested-item__label-icon');

  nestedTableNames.forEach(item => {
    item.addEventListener('click', () => {
      
      const child = item.closest(".nested-item__label").nextElementSibling;
      child.classList.toggle('hidden');

      const categoryOpenBtn = item.querySelector('.category-open-btn');
      const categoryCloseBtn = item.querySelector('.category-close-btn');

      if (child.classList.contains('hidden')) {
        categoryCloseBtn.classList.remove('hidden');
        categoryOpenBtn.classList.add('hidden')
      } else {
        categoryCloseBtn.classList.add('hidden');
        categoryOpenBtn.classList.remove('hidden')
      }
    });
  });

  // functionality for open mobile menu

  const menuWrap = document.querySelector('.menu-wrap');
  const menuOverlay = document.querySelector('.menu-overlay');
  const openMenuButton = document.querySelector('.btn-open-menu');
  const closeMenuButton = document.querySelector('.btn-close-menu');
  const body = document.body;

  function openMobileMenu() {
    menuWrap.classList.add('menu-open');
    body.classList.add('overflow-hidden');
  }

  function closeMobileMenu() {
    menuWrap.classList.remove('menu-open');
    body.classList.remove('overflow-hidden');
  }

  openMenuButton.addEventListener('click', openMobileMenu);
  closeMenuButton.addEventListener('click', closeMobileMenu);
  menuOverlay.addEventListener('click', closeMobileMenu);

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

// filter modal open

const btnModapOpen = document.querySelectorAll(".btn-modal__open");
const modalWrapFilter = document.querySelector(".modal-wrap-filter");
const btnModalClose = document.querySelector(".btn-modal__close");

btnModapOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalWrapFilter.classList.remove("hidden");
  });
});

btnModalClose.addEventListener("click", () => {
  modalWrapFilter.classList.add("hidden");
});

// form for idea / bug in modal open

const btnAddModapOpen = document.querySelector(".btn-add-modal__open");
const modalWrapIdeasBugs = document.querySelectorAll(".modal-wrap-ideas-bugs");
const btnsIdeaModalClose = document.querySelectorAll(".btn-idea-modal__close");

if (btnAddModapOpen) {

  btnAddModapOpen.addEventListener("click", () => {

    modalWrapIdeasBugs.forEach((modal) => {

      if (ideasBtnModal.dataset.id === modal.dataset.modal) {
        modal.classList.remove("hidden");
      } else {
        modal.classList.add("hidden");
      }

    })
  });

}

btnsIdeaModalClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalWrapIdeasBugs.forEach((modal) => {
      modal.classList.add("hidden");
    })
  });
});

// video popup open

const videoBtnsOpen = document.querySelectorAll(".btn-video__open");
const modalWrap = document.querySelector(".modal-wrap");
const modalWrapCloseBtn = document.querySelector(".btn-video__close");

modalWrap.querySelector("iframe").src = "";

videoBtnsOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalWrap.classList.remove("hidden");
    modalWrap.querySelector("iframe").src = btn.dataset.video;
  });
});

modalWrapCloseBtn.addEventListener("click", () => {
  modalWrap.classList.add("hidden");
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

// setup for select

const selectControlRefSortedBy = document.querySelector('#control-ref_sortedBy');
const selectControlRefPriority = document.querySelector('#control-ref_priority');
const selectControlRefCategories = document.querySelector('#control-ref_categories');
const selectControlRefTags = document.querySelector('#control-ref_tags');
const selectControlRefStatuses = document.querySelector('#control-ref_statuses');

const choicesSortedBy = new Choices(selectControlRefSortedBy, {

});
const choicesPriority = new Choices(selectControlRefPriority, {
  placeholder: true,
  removeItems: true,
  removeItemButton: true,
});
const choicesCategories = new Choices(selectControlRefCategories, {
  placeholder: true,
  removeItems: true,
  removeItemButton: true,
});
const choicesTags = new Choices(selectControlRefTags, {
  placeholder: true,
  removeItems: true,
  removeItemButton: true,
});
const choicesStatuses = new Choices(selectControlRefStatuses, {
  placeholder: true,
  removeItems: true,
  removeItemButton: true,
});

// options for multiselect tree

const options = [
  {
    name: 'Account management',
    value: 1,
    children: [
      {
        name: 'Sign up',
        value: 2,
        children: []
      },
      {
        name: 'User onboarding',
        value: 3,
        children: []
      },
      {
        name: 'Profile',
        value: 4,
        children: [
          {
            name: 'Personal details',
            value: 5,
            children: []
          },
          {
            name: 'Contributions',
            value: 6,
            children: []
          },
          {
            name: 'Status',
            value: 7,
            children: []
          },
        ]
      }
    ]
  },
  {
    name: 'Product management',
    value: 8,
    children: [
      {
        name: "Create and manage product",
        value: 9,
        children: []
      },
      {
        name: "Discover work",
        value: 10,
        children: []
      },
      {
        name: "Product summary",
        value: 11,
        children: []
      },
      {
        name: "Product Tree",
        value: 12,
        children: [
          {
            name: "Capabilities",
            value: 13,
            children: []
          }
        ]
      },
      {
        name: "Initiatives",
        value: 14,
        children: []
      },
      {
        name: "Task",
        value: 15,
        children: [
          {
            name: "Task claim",
            value: 16,
            children: [
              {
                name: "Request a task claim",
                value: 17,
                children: []
              },
              {
                name: "Withdraw task claim (Quit task)",
                value: 18,
                children: []
              },
              {
                name: "Review task claim",
                value: 19,
                children: [
                  {
                    name: "Accept task claim request",
                    value: 20,
                    children: []
                  },
                  {
                    name: "Reject task claim request",
                    value: 21,
                    children: []
                  }
                ]
              }
            ]
          },
          {
            name: "Contribution",
            value: 22,
            children: [
              {
                name: "Submit contibution",
                value: 23,
                children: []
              },
              {
                name: "Review contribution",
                value: 24,
                children: [
                  {
                    name: "Accept contribution",
                    value: 25,
                    children: []
                  },
                  {
                    name: "Reject contribution",
                    value: 26,
                    children: []
                  }
                ]
              },
              {
                name: "Delivery Message",
                value: 27,
                children: []
              }
            ]
          },
          {
            name: "Contribution destination",
            value: 28,
            children: []
          },
          {
            name: "Comments",
            value: 29,
            children: [
              {
                name: "Submit comment",
                value: 30,
                children: []
              },
              {
                name: "Mention user",
                value: 31,
                children: []
              },
              {
                name: "Update comment",
                value: 32,
                children: []
              },
              {
                name: "Delete comment",
                value: 33,
                children: []
              }
            ]
          },
          {
            name: "Task management",
            value: 34,
            children: []
          }
        ]
      },
      {
        name: "Product Setting",
        value: 35,
        children: [
          {
            name: "Product visibility (public / private)",
            value: 36,
            children: []
          },
          {
            name: "Policies",
            value: 37,
            children: [
              {
                name: "Set / Update Contribution License Agreement",
                value: 38,
                children: []
              }
            ]
          }
        ]
      },
      {
        name: "Product People",
        value: 39,
        children: []
      },
      {
        name: "Ideas & Bugs",
        value: 40,
        children: []
      },
      {
        name: "Guidelines",
        value: 41,
        children: [
          {
            name: "Contributing guidelines",
            value: 42,
            children: []
          }
        ]
      },
      {
        name: "Legal",
        value: 43,
        children: [
          {
            name: "Product license",
            value: 44,
            children: []
          },
          {
            name: "Contributor License Agreement (CLA)",
            value: 45,
            children: []
          }
        ]
      }
    ]
  }
]

const domElements = document.querySelectorAll('.treeselect-demo')

domElements.forEach((domElement) => {

  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [],
    options: options,
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('Selected value:', e.detail)
  });

});

// for challenges steps

const stepNumbs = document.querySelectorAll('[data-step-numb]');
const stepForms = document.querySelectorAll('[data-step-id]');
const stepCurrent = document.querySelector('[data-current-step');
const stepNext = document.querySelector('[data-step-next]');
const stepPrevious = document.querySelector('[data-step-previous]');

function changeStep (currentStep) {
  
  stepNumbs.forEach((numb) => {
    
    if(Number(numb.dataset.stepNumb) === currentStep) {
      numb.classList.add('active');
    } else {
      numb.classList.remove('active');
    }
  });

  stepForms.forEach((form) => {
    
    if(Number(form.dataset.stepId) === currentStep) {
      form.classList.add('active');
    } else {
      form.classList.remove('active');
    }
  });

  if(currentStep === 1) {
    stepPrevious.classList.add('hidden');
  } else {
    stepPrevious.classList.remove('hidden');
  };

  if(currentStep === 5) {
    stepNext.classList.add('hidden');
  } else {
    stepNext.classList.remove('hidden');
  };

}

stepNext.addEventListener('click', () => {

  if(Number(stepCurrent.dataset.currentStep) === 5) {
    return;
  }

  stepCurrent.dataset.currentStep = Number(stepCurrent.dataset.currentStep) + 1;
  changeStep( Number(stepCurrent.dataset.currentStep) );

});

stepPrevious.addEventListener('click', () => {

  if(Number(stepCurrent.dataset.currentStep) === 1) {
    return;
  }

  stepCurrent.dataset.currentStep = Number(stepCurrent.dataset.currentStep) - 1;
  changeStep( Number(stepCurrent.dataset.currentStep) );

});

$(function () {
  $("#jstree_demo")
    .jstree({
      core: {
        mulitple: false,
        animation: 100,
        check_callback: true,
        themes: {
          variant: "medium",
          dots: false,
        },
      },

      types: {
        default: {
          icon: "glyphicon glyphicon-flash",
        },
        demo: {
          icon: "glyphicon glyphicon-th-large",
        },
      },

      conditionalselect: function (node, event) {
        return false;
      },

      plugins: [
        // "contextmenu",
        "dnd",
        "massload",
        "search",
        // "sort",
        "state",
        "types",
        "unique",
        "wholerow",
        "conditionalselect",
        "changed",
      ],
      search: {
        case_insensitive: true,
        show_only_matches: true,
      },
      contextmenu: {
        show_at_node: false,
      },
    })
    .on("show_contextmenu.jstree", function (e, data) {})
    .on("search.jstree", function (nodes, str, res) {
      if (str.nodes.length === 0) {
        $("#jstree_demo").jstree(true).hide_all();
      }
    });
});

$("#search-field").keyup(function () {
  $("#jstree_demo").jstree(true).show_all();
  $("#jstree_demo").jstree("search", $(this).val());
});

// $(document).on("click", ".jstree-anchor", function (e) {
//   const videoBtnsOpen = document.querySelectorAll(".btn-video__open");
//   const modalWrap = document.querySelector(".modal-wrap");
//   const modalWrapCloseBtn = document.querySelector(".btn-video__close");

//   if (!modalWrap) {
//     modalWrap.querySelector("iframe").src = "";
//   }

//   videoBtnsOpen.forEach((btn) => {
//     modalWrap.classList.remove("hidden");
//     modalWrap.querySelector("iframe").src = btn.dataset.video;
//   });
//   if (modalWrapCloseBtn) {
//     modalWrapCloseBtn.addEventListener("click", () => {
//       modalWrap.classList.add("hidden");
//     });
//   }
// });

// $(document).on("click", ".delete_node", function (e) {
//   const id =
//     e.target.parentElement.parentElement.parentElement.parentElement
//       .parentElement.id;
//   $("#jstree_demo").on("delete_node.jstree");
//   // Trigger the delete_node event for the first node
//   $("#jstree_demo").jstree("delete_node", id);
// });

document.addEventListener("DOMContentLoaded", function () {
  deleteNode();
  editNode();
});
const deleteNode = () => {
  const deleteBtns = document.querySelectorAll(".delete_node");
  deleteBtns.forEach((item) => {
    item.addEventListener("click", () => {
      const closestLi = item.closest("li");
      $("#jstree_demo").jstree("delete_node", closestLi.id);
      deleteNode();
      // editNode();
    });
  });
};
deleteNode();

$("#jstree_demo").on("before_open.jstree", function (e, data) {
  deleteNode();
  editNode();
});

const editNode = () => {
  const editBtns = document.querySelectorAll(".edit_node");
  editBtns.forEach((item) => {
    item.addEventListener("click", () => {
      const treeText = item
        .closest(".nested-item__label")
        .querySelector(".tree-text");
      const input = item
        .closest(".nested-item__label")
        .querySelector(".rename_input");
      treeText.classList.add("hidden");
      input.classList.remove("hidden");
      input.value = treeText.innerText;
      input.on("focus", function (event) {
        event.stopPropagation(); // Prevent event propagation
      });
    });
  });
};
$("#jstree_demo").on("move_node.jstree", function (event, data) {
  deleteNode();
  editNode();
});

setInterval(() => {
  const cb = $("#jstree_demo").jstree(true).get_json("#", { flat: true });
}, 3000);

deleteNode();
editNode();

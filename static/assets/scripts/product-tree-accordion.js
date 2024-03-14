$(function () {
  $("#jstree_demo")
    .jstree({
      core: {
        multiple: false,
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
        "dnd",
        // "massload",
        "search",
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

$("#AddFirst").on("click", create_node);
const newNode = (text, id) => {
  let newNodeText = ` <div
  class="nested-item__label shadow-inner h-max flex items-start py-4 w-full gap-2 group/item  hover:bg-light-blue px-2 transition-all ease-linear duration-200 rounded">
  <div class="flex flex-col w-full">
    <div class="flex w-full justify-between items-center">
      <div class="flex items-center gap-1">
        <button class="w-3 h-3">
          <img src="/static/assets/images/drag.svg" class="w-full h-full object-contain object-center" alt="#">
        </button>
        <span class="flex flex-wrap items-center font-semibold">
          <a href="{{item['link']}}"
            class="tree-text mr-2 text-base text-dark group-hover/item:text-blue-400 transition-all ease-linear duration-200">${
              text || "New item"
            }</a>
          <input type="text" class="hidden mr-2 text-base text-dark rename_input" />
        </span>
      </div>
      <div class="flex gap-3 items-center">
        <button class="add_node w-5 h-5">
           <img src="/static/assets/images/add.svg" class="" alt="#">
        </button>
        <button class="edit_node w-5 h-5">
          <img src="/static/assets/images/edit_icon.svg" class="" alt="#">
        </button>
        <button class="delete_node w-5 h-5 ">
          <img src="/static/assets/images/delete.svg" class="" alt="#">
        </button>
      </div>
    </div>
    <span class="hidden">${id}</span>
  </div>
  </div>`;
  return newNodeText;
};

function create_node() {
  let ref = $("#jstree_demo").jstree(true),
    sel = ref.get_selected();
  if (!sel.length) {
    sel[0] = "#";
  }
  sel = sel[0];

  sel = ref.create_node(sel, { text: newNode(null, Math.random()) }, "last");
}

const setupDeleteNode = () => {
  $("#jstree_demo").on("click", ".delete_node", function () {
    const closestLi = $(this).closest("li")[0];
    $("#jstree_demo").jstree("delete_node", closestLi.id);
  });
};

const setupEditNode = () => {
  $("#jstree_demo").on("click", ".edit_node", function (event) {
    event.stopPropagation();
    const label = $(this).closest(".nested-item__label");
    const a = $(this).closest(".jstree-anchor");
    a.removeAttr("href");
    a.removeClass();
    a.addClass("flex ml-5 mt-[-30px] relative focus-visible:outline-0");
    const treeText = label.find(".tree-text");
    const input = label.find(".rename_input");
    treeText.addClass("hidden");
    input.removeClass("hidden");
    input.val(treeText.text());
    input.focus();

    input.off("keypress").on("keypress", function (e) {
      const li = e.target.closest("li");
      const parentElement = e.target.closest(".nested-item__label");
      if (e.key === "Enter") {
        treeText.removeClass("hidden");
        input.addClass("hidden");
        a.removeClass();
        a.addClass("jstree-anchor");
        treeText.text(input.val());
        $("#jstree_demo").jstree("rename_node", li.id, parentElement.outerHTML);
        setupEditNode();
      }
    });
    input.click(function (e) {
      e.stopPropagation();
    });
  });
};

const setupCreateNode = () => {
  $("#jstree_demo").on("click", ".add_node", function () {
    const parentNode = $(this).closest("li")[0];

    $("#jstree_demo").jstree(true).open_node(parentNode.id);
    const id = $("#jstree_demo").jstree("create_node", parentNode.id, {
      text: newNode(null, Math.random()),
    });
  });
};
const viewVideo = () => {
  const videoBtnsOpen = document.querySelectorAll(".btn-video__open");
  const modalWrap = document.querySelector(".modal-wrap");
  const modalWrapCloseBtn = document.querySelector(".btn-video__close");

  if (modalWrap) {
    modalWrap.querySelector("iframe").src = "";
  }
  videoBtnsOpen.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalWrap.classList.remove("hidden");
      modalWrap.querySelector("iframe").src = btn.dataset.video;
    });
  });

  if (modalWrapCloseBtn) {
    modalWrapCloseBtn.addEventListener("click", () => {
      modalWrap.classList.add("hidden");
    });
  }
};
$(document).ready(function () {
  setupDeleteNode();
  setupEditNode();
  setupCreateNode();
});

$("#jstree_demo").on("before_open.jstree", function (e, data) {
  viewVideo();
});

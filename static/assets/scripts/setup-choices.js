// setup for select

const selectControlRefSortedBy = document.querySelector('#control-ref_sortedBy');
const selectControlRefPriority = document.querySelector('#control-ref_priority');
const selectControlRefCategories = document.querySelector('#control-ref_categories');
const selectControlRefTags = document.querySelector('#control-ref_tags');
const selectControlRefStatuses = document.querySelector('#control-ref_statuses');
const selectPriority = document.querySelector('#priority');

if (selectControlRefSortedBy) {
  const choicesSortedBy = new Choices(selectControlRefSortedBy, {
  
  });
}

if (selectControlRefPriority) {
  const choicesPriority = new Choices(selectControlRefPriority, {
    placeholder: true,
    removeItems: true,
    removeItemButton: true,
  });
}

if (selectControlRefCategories) {
  const choicesCategories = new Choices(selectControlRefCategories, {
    placeholder: true,
    removeItems: true,
    removeItemButton: true,
  });
}

if (selectControlRefTags) {
  const choicesTags = new Choices(selectControlRefTags, {
    placeholder: true,
    removeItems: true,
    removeItemButton: true,
  });
}

if (selectControlRefStatuses) {
  const choicesStatuses = new Choices(selectControlRefStatuses, {
    placeholder: true,
    removeItems: true,
    removeItemButton: true,
  });
}

if (selectPriority) {
  const choicesSelectPriority = new Choices(selectPriority, {
    placeholder: true,
    removeItems: true,
    removeItemButton: true,
  });
}

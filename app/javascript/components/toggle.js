const edit = () => {
  const ingredients = document.querySelectorAll('.fa-minus-circle');
  ingredients.forEach((item) => {
    item.classList.toggle('edit-ingredients');
  });
}

const toggleElement = (id, style) => {
  const element = document.getElementById(id);
  element.classList.toggle(style);
}

const toggleElements = () => {
  edit();
  toggleElement("list", "list-style-none");
  toggleElement("remove", "display-none");
  toggleElement("add", "display-none");
  toggleElement("edit", "display-none");
  toggleElement("hide", "display-none");

}

const toggle = () => {
  const enableEdit = document.getElementById("edit");
  if (enableEdit) {
    enableEdit.addEventListener("click", toggleElements);
  }

  const disableEdit = document.getElementById("hide");
  if (disableEdit) {
    disableEdit.addEventListener("click", toggleElements);  
  }
}

export { toggle };


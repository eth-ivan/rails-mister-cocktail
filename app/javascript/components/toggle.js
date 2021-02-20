const edit = () => {
  const ingredients = document.querySelectorAll('.fa-minus-circle');
  ingredients.forEach((item) => {
    item.classList.toggle('edit-ingredients');
  });
}

const toggle = (id, style) => {
  const element = document.getElementById(id);
  element.classList.toggle(style);
}

const toggleAll = () => {
  edit();
  toggle("list", "list-style-none");
  toggle("remove", "display-none");
  toggle("add", "display-none");
  toggle("edit", "display-none");
  toggle("hide", "display-none");

}

const toggleEdit = () => {
  const enableEdit = document.getElementById("edit");
  if (enableEdit) {
    enableEdit.addEventListener("click", toggleAll);
  }

  const disableEdit = document.getElementById("hide");
  if (disableEdit) {
    disableEdit.addEventListener("click", toggleAll);  
  }
}

export { toggleEdit };


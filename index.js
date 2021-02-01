import { ContactBookDeclaration } from "./contactBook.js";
import { HelpersDeclaration } from "./helpers.js";
import { ControllersDeclaration } from "./controllers.js";
import { ApiDeclaration } from "./dummyApi.js";

const ContactBook = new ContactBookDeclaration([]);
const Helpers = new HelpersDeclaration();
const Controllers = new ControllersDeclaration();
const Api = new ApiDeclaration();

Controllers.onOpenTableDataWanted();

document
  .querySelector(".add-contact")
  .addEventListener("click", Controllers.onClickAddButtonWanted, false);

const setRemoverEventListner = () => {
  const items = document.querySelectorAll(".delete");
  items.forEach((item) =>
    item.addEventListener(
      "click",
      (event) => Controllers.onClickRemoveButtonWanted(event),
      false
    )
  );
};

const setEditorEventListner = () => {
  const items = document.querySelectorAll(".edit");
  items.forEach((item) =>
    item.addEventListener(
      "click",
      (event) => Controllers.onClickEditButtonWanted(event),
      false
    )
  );
};

const setSaveEventListner = () => {
  const items = document.querySelectorAll(".save");
  items.forEach((item) =>
    item.addEventListener(
      "click",
      (event) => Controllers.onClickSaveButtonWanted(event),
      false
    )
  );
};

export {
  Helpers,
  Controllers,
  ContactBook,
  Api,
  setRemoverEventListner,
  setEditorEventListner,
  setSaveEventListner
};

import { assetOfContacts } from "./asset.js";
import {
  Helpers,
  ContactBook,
  Api,
  setRemoverEventListner,
  setEditorEventListner,
  setSaveEventListner,
} from "./index.js";

export class ControllersDeclaration {
  constructor() {
    this.wrapper = document.querySelector(".wrapper");
    this.loader = document.createElement("img");
    this.loader.src = "./giphy.gif";
    this.loader.width = 100;
    this.error = document.querySelector(".error-message");
  }

  get getName() {
    return document.querySelector(".name").value;
  }
  get getPhone() {
    return document.querySelector(".phone").value;
  }

  onUpdateListeners() {
    setRemoverEventListner();
    setEditorEventListner();
    setSaveEventListner();
  }

  onClickRemoveButtonWanted = (event) => {
    const id = event.target.parentNode.parentNode.querySelector(".row-id")
      .textContent;

    const index = assetOfContacts.findIndex((contact) => contact.id === id);
    assetOfContacts.splice(index, 1);
    ContactBook.onUpdatesContactsListWanted(assetOfContacts);
    this.onUpdateListeners();
  };

  onClickEditButtonWanted = (event) => {
    const id = event.target.parentNode.parentNode.querySelector(".row-id")
      .textContent;

    const index = assetOfContacts.findIndex(
      (contact) => contact.id.toString() === id
    );
    assetOfContacts[index].type = "edit";
    ContactBook.onUpdatesContactsListWanted(assetOfContacts);
    this.onUpdateListeners();
  };

  onClickSaveButtonWanted = (event) => {
    const node = event.target.parentNode.parentNode; 
    const name = node.querySelector(".row-name")
      .children[0].value;
    const phone = node.querySelector(".row-phone")
      .children[0].value;
    const id = node.querySelector(".row-id")
      .textContent;

    if (
        Helpers.onCustomNameFieldCheckValid(name)
        && Helpers.onCustomPhoneFieldCheckValid(phone)
    ) {
        const index = assetOfContacts.findIndex(
          (contact) => contact.id.toString() === id
        );
        assetOfContacts[index].type = "table";
        assetOfContacts[index].name = name;
        assetOfContacts[index].phone = phone;
        ContactBook.onUpdatesContactsListWanted(assetOfContacts);
        this.onUpdateListeners();
        return;
    }

    this.onShowErrorModalWanted();
  };

  onClickAddButtonWanted = () => {
    if (Helpers.getIsNameValid && Helpers.getIsPhoneValid) {
      this.wrapper.appendChild(this.loader);
      setTimeout(() => {
        this.wrapper.removeChild(this.loader);

        Api.onUpdateContactsList(this.getName, this.getPhone);

        this.onResetInputFields();

        ContactBook.latest;

        this.onUpdateListeners();
      }, 3000);

      return;
    }

    this.onShowErrorModalWanted();
  };

  onOpenTableDataWanted = () => {
    this.wrapper.appendChild(this.loader);

    setTimeout(
      () => {
        this.wrapper.removeChild(this.loader);

        Api.onMountGetDataFromServer();
      },

      3000
    );
  };

  onShowErrorModalWanted = () => {
    this.error.classList.add("show");

    this.error.textContent = "Введите валидные данные для внесения в таблицу.";

    setTimeout(() => this.error.classList.remove("show"), 3000);
  };

  onResetInputFields = () => {
    document.querySelector(".name").value = "";
    document.querySelector(".phone").value = "";
  };
}

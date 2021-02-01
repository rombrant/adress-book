export class ContactBookDeclaration {
  constructor(contacts) {
    this.contacts = contacts;
    this.table = document.getElementsByTagName("tbody")[0];
    this.templateList = document.querySelector("#templateList");
    this.templateEditor = document.querySelector("#templateEditor");
  }

  get latest() {
    this.onResetTableRowsWanted();

    this.contacts
      .forEach((contact) => {
        this.getContactsListForView(contact.name, contact.phone, contact.type, contact.id);
      });
  }

  get existedTdTags() {
    return this.table.querySelectorAll(".row");
  }

  onUpdatesContactsListWanted = (contacts) => {
    this.contacts = contacts;

    this.latest;
  };

  getContactsListForView = (name, phone, type, id) => {
    if (type === "table") {
      const tdTag = this.templateList.content.querySelectorAll("td");

      tdTag[0].textContent = name;
      tdTag[1].textContent = phone;
      tdTag[2].textContent = id;

      const clone = document.importNode(this.templateList.content, true);
      this.table.appendChild(clone);
      return;
    }

    const inputTag = this.templateEditor.content.querySelectorAll("input");
    const tdTag = this.templateEditor.content.querySelectorAll("td");
    inputTag[0].value = name;
    inputTag[1].value = phone;
    tdTag[2].textContent = id;
    const clone = document.importNode(this.templateEditor.content, true);
    this.table.appendChild(clone);
  };

  onResetTableRowsWanted = () => {
    this.existedTdTags.forEach((tag) => this.table.removeChild(tag));
  };
}

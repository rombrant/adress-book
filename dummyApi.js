import { assetOfContacts } from './asset.js';
import { ContactBook, setRemoverEventListner, setEditorEventListner, Helpers } from './index.js';

export class ApiDeclaration {
    onMountGetDataFromServer = () => {  
        // Dummy api get data when table open      
        ContactBook.onUpdatesContactsListWanted(assetOfContacts)
        setRemoverEventListner();
        setEditorEventListner();
    }

    onUpdateContactsList = (name, phone) => {  
        // Dummy api get data when table update
        assetOfContacts.push({
            id: Helpers.getUniqId,
            name,
            phone,
            type: 'table'
        })

        ContactBook.onUpdatesContactsListWanted(assetOfContacts)
    }
}
document.addEventListener('deviceready', loadContacts, false);

function loadContacts(){
    let options = new ContactFindOptions();
    options.multiple = true:
    options.hasPhoneNumber = true;

    let fields = ['name'];

    navigator.contacts.find(fields,showContacts, handleContactError, options);
        return 
    
}
function showContacts(contacts) {
    let contactHTML = '';
    for (const contact of contacts) {
        contactHTML += `
            <li>
                <a href="#">
                    <img src="img/teacher2.ico" alt="" width="50" height="40">
                    <h1>${contact.name.formatted}</h1>
                    <p>${Object.values(contact.hasPhoneNumbers[0])}</p>
                </a>
            </li>
        `;
    }
    
    
}

function handleContactError(error) {
    console.log("Error while getting contact list");
    console.log(error);
}

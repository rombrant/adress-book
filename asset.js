const uniqId = () => Math.floor(Math.random() * 9999);

let assetOfContacts = [
    {
        id: uniqId(),
        name: 'Кирилл',
        phone: '+7999999999',
        type: 'table',
    },
    {
        id: uniqId(),
        name: 'Евгений',
        phone: '+7765342522',
        type: 'table',
    },
    {
        id: uniqId(),
        name: 'Виктория',
        phone: '+79983737633',
        type: 'table',
    },
    {
        id: uniqId(),
        name: 'Руслан',
        phone: '+792323131112',
        type: 'table',
    },
    {
        id: uniqId(),
        name: 'Наталья',
        phone: '+793213123123',
        type: 'table',
    },
]

export { assetOfContacts }
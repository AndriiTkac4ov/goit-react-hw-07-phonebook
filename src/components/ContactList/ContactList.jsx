import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { ContactsList } from "./ContactList.styled";
import * as contactsOperations from "redux/contacts/contactsOperations";
import ContactItem from '../ContactItem/ContactItem';

export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch])
    
    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
    
    const filteredContacts = getFilteredContacts();

    return (
        <ContactsList>
            {filteredContacts.map(({ id, name, phone }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={phone}
                />
            ))}
        </ContactsList>
    )
}

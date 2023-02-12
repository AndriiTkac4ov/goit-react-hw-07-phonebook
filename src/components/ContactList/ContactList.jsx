import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { ContactsList } from "./ContactList.styled";
import ContactItem from '../ContactItem/ContactItem';

export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    
    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
    
    const filteredContacts = getFilteredContacts();
    console.log(filteredContacts);

    return (
        <ContactsList>
            {filteredContacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </ContactsList>
    )
}

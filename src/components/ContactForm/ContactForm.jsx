import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { selectContacts } from "redux/selectors";
import * as contactsOperations from "redux/contacts/contactsOperations";
import { Form, LabelField, InputField, ButtonAdding } from "./ContactForm.styled";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            name,
            phone: number,
        };

        const isContactNameInList = contactName => {
            return contacts.find(contact => contact.name === contactName);
        }
        
        if (isContactNameInList(name)) {
            alert(`${name} is already in contacts.`);
            return;
        };

        dispatch(contactsOperations.addContact(newContact));

        setName('');
        setNumber('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <LabelField>
                Name
                <InputField
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </LabelField>

            <LabelField>
                Number
                <InputField
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    autoComplete="off"
                    value={number}
                    onChange={handleInputChange}
                />
            </LabelField>

            <ButtonAdding type="submit">Add contact</ButtonAdding>
        </Form>
    )
}

export default ContactForm;
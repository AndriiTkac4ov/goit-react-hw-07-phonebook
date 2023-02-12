import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { ContactsItem, ContactName, ButtonDeleting } from "./ContactItem.styled";

export default function ContactItem({ id, name, number }) {
    const dispatch = useDispatch();

    return (
        <ContactsItem>
            <ContactName>{name}: {number}</ContactName>
            <ButtonDeleting type="button" onClick={() => dispatch(deleteContact(id))}>Delete</ButtonDeleting>
        </ContactsItem>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
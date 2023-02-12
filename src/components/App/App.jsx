// import useLocalStorage from "../../hooks/useLocalStorage";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { Application, ApplicationTitle, ListTitle } from "./App.styled";

const App = () => {
  return (
    <Application>
      <ApplicationTitle>Phonebook</ApplicationTitle>
      <ContactForm />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      <ContactList />
    </Application>
  )
}

export default App;
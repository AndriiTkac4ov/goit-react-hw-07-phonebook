import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import { selectIsLoading} from "redux/selectors";
import { useSelector } from "react-redux";
import { Application, ApplicationTitle, ListTitle } from "./App.styled";

const App = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Application>
      <ApplicationTitle>Phonebook</ApplicationTitle>
      <ContactForm />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </Application>
  )
}

export default App;
import axios from "axios";

axios.defaults.baseURL = 'https://63e93e264f3c6aa6e7ca90a8.mockapi.io';

export async function fetchContacts() {
    const contacts = await axios.get(`/contacts/contacts`);
    return contacts;
}
import React, {Component} from "react";
import ContactsForm from "./Fhonebook/ContactsForm"
import ContactsList from "./Fhonebook/ContactsList";
import { Filter } from "./Fhonebook/Filter";
import css from './Fhonebook/fhonebook.module.css';
import { nanoid } from "nanoid";



class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
   
  };

  addContact = nameData => {
    const newContact = {
      id: nanoid(),
      ...nameData,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value});
  }

  
  render() {

const nopmalizedFilter = this.state.filter.toLocaleLowerCase();

const visibleContact = this.state.contacts.filter(contact => 
  contact.name.toLocaleLowerCase().includes(nopmalizedFilter));

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactsForm addContactProps={this.addContact} />
        <h2 className={css.title}>Contacts</h2>
        <h3 className={css.inputName}>Find contacts by name</h3>
        <Filter value={this.filter} onChange={this.changeFilter}/>
        <ContactsList contacts={visibleContact} />
        </div>
    );
  }
}

export default App;
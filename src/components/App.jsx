import React, {Component} from "react";
import css from './Fhonebook/fhonebook.module.css'



class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  render () {
return (
  <div className={css.container}>
    <div className="section">
    <h2 className={css.title}>Phonebook</h2>
    <form className={css.form}>
      <h3 className={css.inputName}>Name</h3> 
<input
  className={css.input}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<button type="submit" className={css.button}>Add contact</button>
</form> 
</div>
<div className="section">
<h2 className={css.title}>Contacts</h2>
<ul className="contact__item">
  <li className="contact__name"></li>
</ul>
</div>
</div>
)

  }
}

export default App;
import {Component} from "react";
import css from './ContactForm.module.css'



class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({ [name]: value });
    console.log(this.state)
  };

  hendleSubmit = event => {
    event.preventDefault();
    
    this.props.addContactProps({ ...this.state });
    console.log(this.state);

    this.setState({
      name: '',
      number: '',
  })
  };

  render() {
    return (
      <div className={css.section}>
        <form className={css.form} onSubmit={this.hendleSubmit}>
          <label className={css.inputName}>
            Name
            <input
              className={css.input}
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={css.inputName}>
            Number
            <input
              className={css.input}
              type="tel"
              value={this.state.number}
              onChange={this.handleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactsForm;
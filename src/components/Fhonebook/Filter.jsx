import React from "react"
import css from './fhonebook.module.css';



export const Filter = ({value, onChange}) => {
    return (
<input
              className={css.input}
              type="text"
              value={value}
              onChange={onChange}
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
    );
} 






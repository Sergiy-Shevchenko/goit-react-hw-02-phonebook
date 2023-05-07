import React from "react";
import { nanoid } from "nanoid";
import css from './fhonebook.module.css';



export const ContactsList = ({ contacts }) => {
  return (
    
    <div className={css.section}>
        <ul className={css.contacList}>
        {contacts.map(({ name, number, id }) => (
          <li className={css.contactItem} key={id}>
            <p className={css.contacName}>{name}:</p>
            <p className={css.contacNumder} >{number}</p>
            <button type="button">Delete</button>            
          </li>          
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;


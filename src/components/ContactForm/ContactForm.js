import React, { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: ' ',
    number: ' ',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //   handleChange = ({ target: { value, name } }) => {
  //     this.setState({ [name]: value });
  //   };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
    // this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmitForm}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.label}>
          Phone number
          <input
            className={styles.input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button
          className={styles.button}
          type="submit"
          disabled={name === '' ? true : false}
        >
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

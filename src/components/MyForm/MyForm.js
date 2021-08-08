import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MyForm.module.css';

export class MyForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  onChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmit} className={styles.form}>
        <label className={styles.lebels}>
          Name:
          <input
            type="text"
            onChange={this.onChange}
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.lebels}>
          Number:
          <input
            type="tel"
            value={number}
            onChange={this.onChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" onSubmit={this.onSubmit} className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default MyForm;

import { Component } from 'react';
import {
  HesderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled.js';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    input: '',
  };
  componentWillUnmount() {}

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitForm(this.state.input);
    this.setState({ input: '' });
  };

  saveInputState = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <HesderSearchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            onChange={this.saveInputState}
            name="name"
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            value={this.state.input}
          />
        </SearchForm>
      </HesderSearchbar>
    );
  }
}

Searchbar.propTypes = {
  submitForm: PropTypes.func,
};

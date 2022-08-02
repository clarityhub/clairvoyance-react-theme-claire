import React, {Component} from 'react';
import { func, node } from 'prop-types';
import debounce from 'debounce';
import checkAvailable from './actions';
import InputError from '../../atoms/InputError';

const debounceCheckAvailable = debounce(checkAvailable, 1000);

export default class CheckEmail extends Component {
  static propTypes = {
    children: node,
    onEmailTaken: func,
  }

  static defaultProps = {
    onEmailTaken: () => { },
  }

  state = {
    error: null,
  }

  handleInput = (event) => {
    const { children, onEmailTaken } = this.props;
    const { onInput } = children.props;

    onInput(event);

    debounceCheckAvailable(event.target.value, () => {
      onEmailTaken(false);
      this.setState({
        error: null,
      });
    }, () => {
      onEmailTaken(true);
      this.setState({
        error: 'That email is taken',
      });
    });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    return (
      <div>
        <InputError>{error}</InputError>
        {React.cloneElement(children, {
          onInput: this.handleInput,
        })}
      </div>
    );
  }
}

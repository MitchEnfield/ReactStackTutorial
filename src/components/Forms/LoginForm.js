import React from 'react';
import {PropTypes} from 'prop-types'
import { Form, Button, Input, Label } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../Messages/InlineError';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    loading: false,
    errors: {},
  };

  handleChange = (e, data) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
  };

  validate = (data) => {
    const errors = {};
    if(!Validator.isEmail(data.email))errors.email = "Invalid email";
    if(!data.password)errors.password = "Can't be blank";
    if(Object.keys(errors).length === 0){
      this.props.submit(this.state.data);
    }
    return errors;
  }

  render() {
    const { data, errors } = this.state;
    return(
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='example@example.com'
            value={data.email}
            onChange={this.handleChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id='password'
            name='password'
            placeholder='Make it secure'
            value={data.password}
            onChange={this.handleChange}
          />
          {errors.password && <InlineError text={errors.email} />}
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default LoginForm

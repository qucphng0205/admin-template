import React from 'react';
import styles from './comment_form.module.scss';
import { Form, FormGroup, FormInput, FormLabel, FormTextArea } from '../../components/forms/Form';
import { Button } from '../../components/button/Button';

class CommentForm extends React.Component {

  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      content: '',
      submit: false,
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value, });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.callback(this.state.name, this.state.email, this.state.content)
    this.setState({ submit: true });
  }

  render() {
    return (
      <React.Fragment>
        {
          !this.state.submit ?
            (<Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="icn">Name *</FormLabel>
                <FormInput id="icn" name="name" value={this.state.name} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="ice">Email *</FormLabel>
                <FormInput id="ice" name="email" value={this.state.email} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="icc">Comment *</FormLabel>
                <FormTextArea id="icc" name="content" maxLength='300' value={this.state.content} onChange={this.handleChange} />
              </FormGroup>

              <Button type="submit" variant="primary">Post Comment</Button>
            </Form>) :
            <p>Your comment is pending</p>
        }
      </React.Fragment>
    );
  }
}



export default CommentForm;
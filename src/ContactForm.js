import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      hasEmailError: false,
      content:'',
      hasContentError:false,
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  handleContentChange(event){
    const inputValue = event.target.value;
    const isEmpty = inputValue==="";
    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
      })
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let emailErrorText = ""
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          Please enter your e-mail address
        </p>
      );
    }

    let contentErrorText = "" 
    if(this.state.hasContentError){
      contentErrorText=(
        <p className='contact-message-error'>
          Please enter your support message
        </p>
       )
    }
    
    
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          Send completely！
          Thank you!
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => {this.handleSubmit()}} >
          <span>mail address</span>
          <input
            value={this.state.email}
            onChange={(event) => {this.handleEmailChange(event)}}
          />
          {emailErrorText}
          <span>Support message</span>
          
          <textarea 
            value = {this.state.content}
            onChange={(event)=>{this.handleContentChange(event)}}
            />

          {contentErrorText}
          <input
            type='submit'
            value='Please send'
          />
        </form>
      );
    }
    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;

import React from 'react';
import ContactForm from './ContactForm';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
          <div className='footer-form'>
          <ContactForm/>
          </div>
        <div className='footer-inner'>
          <ul className='footer-list'>

            <li>myapp</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;

import Heading from '../UI/Heading';
import P from '../UI/P';

import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact-section'>
      <Heading>Contact</Heading>
      <div className='contact-content'>
        <div className='contact-text'>
          <P>
            Looking to start a new project or just want to say hi? Send me an
            email and I'll do my best to reply within 24 hrs!
          </P>
          <br />
          <P>
            If contact forms aren't your thing... send me an email at
            hello@arnau.design
          </P>
        </div>
        <div className='contact-form'>
          <form className='form'>
            <div>
              <label htmlFor='name'>Name *</label>
              <input
                type='text'
                id='name'
                placeholder='Kevin De Bruyne
'
              />
            </div>
            <div>
              <label htmlFor='email'>Email *</label>
              <input type='text' id='email' placeholder='example.com' />
            </div>
            <div>
              <label htmlFor='message'>Message *</label>
              <textarea
                id='message'
                placeholder='How can I help you?'
              ></textarea>
            </div>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

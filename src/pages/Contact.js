import React from 'react';
import NavBar from '../components/NavBar';
import { Button } from 'reactstrap';
import '../components/Contact/Contact.css';

class ContactForm extends React.Component {
    state = {
        email: "",
        message: "" 
    }
    render() {
        return(
            <div class="container-fluid">
            <h2>We Need Your Feedback!</h2>
            <br></br>

            <p class="container graph">We want to hear your opinions. Tell us anything that you think will help improve our services or our website. Thank you in advance! </p>

            <form>
            <menu class="form-group">
              <label for="exampleFormControlInput1">Email Address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </menu>
            <menu class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </menu>
            <button type="button" class="btn btn-primary">Submit</button>
          </form>
          </div>

        );
    }
}

const Contact = () => (
    <div>
    
    <NavBar />
    <ContactForm />

    </div>
)

export default Contact;
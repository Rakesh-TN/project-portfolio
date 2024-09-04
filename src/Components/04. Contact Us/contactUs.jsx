import React, { useRef }  from 'react'
import { Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';


function ContactPage() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2s04uyc', 'template_q28xl7a', form.current, {
                publicKey: 'GiHmsqMsCjQruvL3c',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <main className='bg-primary-subtle'>
            <section className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
                <h1>Contact</h1>
                <form ref={form} onSubmit={sendEmail} className='card p-3 m-5'>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label ">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" name="user_name" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email Id" name="user_mail" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="user_message" rows="3" placeholder="Your Message" required ></textarea>
                    </div>
                    <div className='text-center'>
                        <input type="submit" className='btn btn-success' value="Submit It" />
                    </div>
                </form>
            </section>
        </main>
    )
}

export default ContactPage
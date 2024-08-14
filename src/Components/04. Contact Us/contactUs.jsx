import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

function ContactPage() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jdm3kkc', 'template_vyf69no', form.current, 'wPkRCg-AS-14oUwsD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <main className='bg-primary-subtle'>
            <section className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
                <h1>Contact</h1>
                <div className='card p-5'>
                    <form ref={form} onSubmit={sendEmail}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="yourname@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                    </div>
                    <div className='text-center'>
                                <input className='btn btn-success' type="submit" value="Send Me" />
                            </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default ContactPage
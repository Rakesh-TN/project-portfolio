import React from 'react'
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ContactPage() {

    return (
        <main className='bg-primary-subtle'>
            <section className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
                <h1>Contact</h1>
                <div className='card p-3 m-5'>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email Id" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className='text-center'>
                        <Button variant="success">Submit It</Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactPage
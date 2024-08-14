import React from 'react'
import Button from 'react-bootstrap/Button';
import profilePic from './assets/Rakesh Passport Size Photo.jpg'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <main className='bg-primary-subtle'>
                <section className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
                    <div className='container madMax'>
                    <div className='row'>
                        <div className='d-flex col-lg-6 align-items-center'>
                            <div>
                                <h1>Hi I'm <span className='text-primary'>Rakesh</span>👋</h1>
                                <h3>Web Developer</h3>
                                <p>Transforming ideas into elegant with a better User Interface </p>
                                <Button variant="primary" as={Link} to={'/contact'}>Contact Me</Button>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={profilePic} alt='' className='w-75 rounded-circle' />
                        </div>
                    </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
import React from 'react'
import profilePic from './assets/Rakesh Passport Size Photo.jpg'

function Home() {
    return (
        <>
            <main className='bg-primary-subtle'>
                <section className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
                    <div className='container madMax'>
                    <div className='row'>
                        <div className='d-flex col-lg-6 align-items-center'>
                            <div className=''>
                                <h1>Hi I'm <span className='text-primary'>Rakesh</span>👋</h1>
                                <h3>Web Developer</h3>
                                <p>Transforming ideas into elegant with a better User Interface </p>
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
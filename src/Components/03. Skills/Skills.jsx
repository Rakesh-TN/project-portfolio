import React from 'react'
import html5Icon from './Assets/html-5-svgrepo-com.svg'
import css3Icon from './Assets/css-3-svgrepo-com.svg'
import jsIcon from './Assets/js-official-svgrepo-com.svg'
import reactIcon from './Assets/reactjs-svgrepo-com.svg'
import phpIcon from './Assets/php-svgrepo-com.svg'
import mysqlIcon from './Assets/mysql-logo-svgrepo-com.svg'
import pythonIcon from './Assets/python-svgrepo-com.svg'
import wordpressIcon from './Assets/wordpress-color-svgrepo-com.svg'

function Skills() {
  return (
    <>
      <main className='bg-primary-subtle'>
        <section className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
          <h1>Skills</h1>
            <div className='row p-5'>
              <div className='col-6 col-lg-3 p-2 text-center'>
                <img src={html5Icon} className='skillIcon img-fluid' />
                <p>HTML</p>
              </div>
              <div className='col-6 col-lg-3 p-2 text-center'>
                <img src={css3Icon} className='skillIcon img-fluid' />
                <p>CSS</p>
              </div>
              <div className='col-6 col-lg-3 p-2 text-center'>
                <img src={jsIcon} className='skillIcon img-fluid' />
                <p>Javascript</p>
              </div>
              <div className='col-6 col-lg-3 p-2 text-center'>
                <img src={reactIcon} className='skillIcon img-fluid' />
                <p>React JS</p>
              </div>
              <div className='col-6 col-lg-3 p-2 text-center'>
                <img src={phpIcon} className='skillIcon img-fluid' />
                <p>PHP</p>
              </div>
              <div className='col-6 col-lg-3 p-2 text-center'>
                <img src={mysqlIcon} className='skillIcon img-fluid' />
                <p>MySQL</p>
              </div>
              <div className='col-6 col-lg-3 p-2 text-center'>
                <img src={pythonIcon} className='skillIcon img-fluid' />
                <p>Python</p>
              </div>
              <div className='col-6 col-lg-3 p-2 text-center'>
                <img src={wordpressIcon} className='skillIcon img-fluid' />
                <p>wordPress</p>
              </div>

            </div>
        </section>
      </main>
    </>
  )
}

export default Skills
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ecomSite from './Assets/Ecom-Site.svg'
import weatherSite from './Assets/Weather-Site.svg'
import BMISite from './Assets/BMI_calculator.svg'
import portfolioSite from './Assets/portfolio_website.svg'
import wilsonSite from './Assets/eating_together.svg'


function Project() {
  return (
    <>
      <main className='bg-primary-subtle'>
        <section className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
        <h1>Project</h1>
          <div className='row text-center' >
          <Card style={{ width: '18rem' }} className='col-lg-4 m-5 row justify-content-evenly' data-aos='fade-down'>
            <Card.Img variant="top" src={ecomSite} />
            <Card.Body>
              <Card.Title>E-Commerce Site</Card.Title>
              <Card.Text>
                This Site is build with HTML, CSS, Javascript and JSON
              </Card.Text>
              <Button variant="primary" href='https://subtle-toffee-c03964.netlify.app/' target='_blank'>Click Here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='col-lg-4 p-1 m-5 justify-content-evenly' data-aos='fade-down'>
            <Card.Img variant="top" src={weatherSite}/>
            <Card.Body>
              <Card.Title>Weather Site</Card.Title>
              <Card.Text>
                This Site is build with HTML, CSS, Javascript and Open Weather API
              </Card.Text>
              <Button variant="primary" href='https://weather-finder-369.netlify.app/' target='_blank'>Click Here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='col-lg-4 p-1 m-5 justify-content-evenly' data-aos='fade-down'>
            <Card.Img variant="top" src={BMISite}/>
            <Card.Body>
              <Card.Title>BMI Calculator</Card.Title>
              <Card.Text>
              This Site is build with HTML, CSS and ReactJS
              </Card.Text>
              <Button variant="primary" href='https://effervescent-squirrel-4ab9f2.netlify.app/' target='_blank'>Click Here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='col-lg-4 p-1 m-5 justify-content-evenly' data-aos='fade-down'>
            <Card.Img variant="top" src={portfolioSite}/>
            <Card.Body>
              <Card.Title>Old Portfolio</Card.Title>
              <Card.Text>
              This Site is build with HTML, CSS, ReactJS and EmailJS
              </Card.Text>
              <Button variant="primary" href='https://old-portfolio-six-jade.vercel.app/' target='_blank'>Click Here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='col-lg-4 p-1 m-5 justify-content-evenly' data-aos='fade-top'>
            <Card.Img variant="top" src={wilsonSite}/>
            <Card.Body>
              <Card.Title>Wilson Bread</Card.Title>
              <Card.Text>
              This Site is build with HTML, CSS
              </Card.Text>
              <Button variant="primary" href='https://gorgeous-cucurucho-e25b1b.netlify.app/' target='_blank'>Click Here</Button>
            </Card.Body>
          </Card>
          </div>
        </section>
      </main>
    </>
  )
}

export default Project
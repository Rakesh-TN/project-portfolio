import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ecomSite from './Assets/Ecom-Site.svg'
import weatherSite from './Assets/Weather-Site.svg'
import BMISite from './Assets/BMI_calculator.svg'


function Project() {
  return (
    <>
      <main className='bg-primary-subtle'>
        <section className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
          <div className='row'>
          <Card style={{ width: '16rem' }} className='col-lg-4 p-1 m-5 row justify-content-evenly'>
            <Card.Img variant="top" src={ecomSite} />
            <Card.Body>
              <Card.Title>E-Commerce Site</Card.Title>
              <Card.Text>
                This Site is build with HTML, CSS, Javascript and JSON
              </Card.Text>
              <Button variant="primary" href='https://subtle-toffee-c03964.netlify.app/' target='_blank'>Click Here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='col-lg-4 p-1 m-5'>
            <Card.Img variant="top" src={weatherSite}/>
            <Card.Body>
              <Card.Title>Weather Site</Card.Title>
              <Card.Text>
                This Site is build with HTML, CSS, Javascript and 
              </Card.Text>
              <Button variant="primary" href='https://subtle-toffee-c03964.netlify.app/' target='_blank'>Click Here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='col-lg-4 p-1 m-5'>
            <Card.Img variant="top" src={BMISite}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href='https://subtle-toffee-c03964.netlify.app/' target='_blank'>Click Here</Button>
            </Card.Body>
          </Card>
          </div>
        </section>
      </main>
    </>
  )
}

export default Project
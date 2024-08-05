import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './01. Home/Home';
import Project from './02. Project/Project';
import Skills from './03. Skills/Skills';

function Navibar() {
  return (
    <>
      <BrowserRouter>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand className='text-light'>Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to={'/'} className='text-light'>Home</Nav.Link>
              <Nav.Link as={Link} to={'/project'} className='text-light'>Project</Nav.Link>
              <Nav.Link as={Link} to={'/skills'} className='text-light'>Skills</Nav.Link>
              <Nav.Link href='https://drive.google.com/file/d/1MOXelHK6w55bnyjHgsxGOgKDWQ57UAt-/view?usp=sharing' target='_blank' className='text-light'>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<Project/>}/> 
          <Route path='/skills' element={<Skills/>}/>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navibar;
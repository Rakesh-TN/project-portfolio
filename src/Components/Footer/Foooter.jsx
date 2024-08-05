import React from 'react'
import gitIcons from './Assets/github-142-svgrepo-com.svg'
import inIcons from './Assets/linkedin-rounded-svgrepo-com.svg'
import resumeIcons from './Assets/trees-forest-svgrepo-com.svg'

function Foooter() {
  return (
    <>
      <footer class="d-flex flex-wrap justify-content-between align-items-center p-5 m-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <span class="mb-3 mb-md-0 text-light">&copy; 2024 Rakesh TN</span>
          </a>
        </div>

        <ul class="col-md-3 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a href='https://www.github.com/Rakesh-TN/' target='_blank'><img src={gitIcons} className='w-25' /></a></li>
          <li class="ms-3"><a href='https://www.linkedin.com/in/rakesh-tn-5682ba309/' target='_blank'><img src={inIcons} className='w-25' /></a></li>
          <li class="ms-3"><a href='https://rakeshprofilecard.netlify.app/' target='_blank'><img src={resumeIcons} className='w-25' /></a></li>
        </ul>
      </footer>
    </>
  )
}

export default Foooter
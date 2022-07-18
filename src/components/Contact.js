import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { github } from '@fortawesome/free-solid-svg-icons';
import { github } from '@fortawesome/free-brands-svg-icons';
import Form from './Form'

export default function Contact() {
  return (
    <div className="component">
      <div className="component-title">
        <h2>Contact Me</h2>
      </div>
      <nav className="component-info">
        <div>
          <ul>
            <li>
              <div>
                <a href="tel:+6281196907515">
                  {/* Phone number */}
                  <i class="fa-solid fa-phone fa-2x"></i>
                  </a>

              </div>
            </li>

            <li>
              <div>
                <a href="mailto:kylie_gilbert13@yahoo.com.au">
                  {/* Email */}
                  <i class="fa-solid fa-at fa-2x"></i>
                </a>
              
              </div>
            </li>

            <li>
              <div>
                
                <a target="_blank" href="https://github.com/kyliegilbert">
                  {/* GitHub */}
                  <i class="fa-brands fa-github fa-2x"></i>
                </a>
                
                
              </div>
            </li>

            <li>
              <div>
                <a target="_blank" href="https://www.linkedin.com/in/kylie-gilbert-2306b9230/">
                  {/* Linkedin */}
                  <i class="fa-brands fa-linkedin fa-2x"></i>
                </a>
            
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Form/> */}
    </div>
  )
}
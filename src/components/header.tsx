import {  useNavigate, Link } from "react-router-dom"

import image from "../assets/roundpicture.svg"
import HamburgerMenu from "./hamburger"
export default function Heading () {


  const navigate = useNavigate()
    return(

        <header>
        <div className="forRoundpic">
            <img src={image} alt="round icon" className="imageRound"/>
              <h3 className="test">Careermap</h3>
        </div>
        <div className="first">
            <ul className="list-styles" id="disappear" style={{listStyle: "none", padding: "0", }}>
                <li>Post Jobs</li>
                  <li>Salaries</li>
                    <li>Blog</li>
                      <li>Employees</li>
                      
            </ul>
            <HamburgerMenu/>
     </div>
        </header>
    )
}
import circleImage from "../assets/roundpicture.svg"

export default function footer (){

    return(
        <section className="footersection">
            <footer>
               <div className="foot">
                 <div className="footerimage">
                    <img src={circleImage} alt="tfooter image" />
                    <h1>Careermap</h1>
                </div>
                <p className="footerparagraph">Your Career companion. access the <br /> 
                latest job listings, create a standout <br /> 
                portfolio and land your dream job</p>
               </div>

               <div className="footerfirstflex">
                <h1 className="twentypixels">Help & support</h1>
                <span className="initialtext">Blog</span>
                <span>Resources</span>
                <span>Contact Us</span>
                <span>Support Center</span>
                <span>User Guide</span>
               </div>


               <div className="footerfirstflex">
                 <h1  className="twentypixels">Employerd</h1>
                <span  className="initialtext">Products</span>
                <span>Post a job</span>
                <span>Employer Login</span>
                <span>Pricing Plans</span>
                <span>Success stories</span>
                
                </div>


               <div className="footerfirstflex">
                 <h1  className="twentypixels">Job Seekers</h1>
                <span  className="initialtext">Search jobs</span>
                <span>Browse jobs</span>
                <span>Salary Tools</span>
                <span>Career Advice</span>
                <span>Company profile</span>
                
                </div >

              <div className="footerfirstflex">
                  
                 <h1  className="twentypixels">Helpful Resources</h1>
                <span  className="initialtext">Work with us</span>
                <span>Terms of use</span>
                <span>Privacy Center</span>
                <span>Security Center</span>
                <span>Accessibility Center</span>
              </div>


               <div>


               </div>

            </footer>
        </section>
    )
}
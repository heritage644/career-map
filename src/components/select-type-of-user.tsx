import couplesvg from "../assets/couple-working-home-with-laptops.png"
import roundpic from "../assets/roundpicture.svg"
import briefCase from "../assets/briefcase-portfolio-svgrepo-com.svg"
import contractor from "../assets/contractor-builder-3-svgrepo-com.svg"
import doublearrow from "../assets/chevron-right-double-svgrepo-com.svg"
import { useNavigate } from "react-router-dom"
export default function SelectTypeOfUser (){
const navigate = useNavigate()


    return(
        <section  className="generalBody">
             <section className="left-section">   
        
            <div className="head">
                <img src={roundpic} alt="iconlogo" />
            <h1>Careermap</h1>
            </div>
            <img src={couplesvg} alt="svg" className="svgicon" />

           <div className="bottom-section">
             <h2>Work from anywhere,thrive anywhere.</h2>

            <p>Discover online opportunities that fits your life-style.
          <br />  browse different job opportunities and coonect with employers
            </p>
            
           </div>
            </section>
            {/*rhs*/}
            <section className="rightSection" > 
             <div className="right-section">
                   <h1  className="headertext">How would you like to access the app?</h1>



             <div className="cards">

           <div className="briefcaseing">
              <img src={briefCase} alt="briefcase.svg"  style={{width:"30px"}} />
           </div>

              <div className="topcard"> 
                 <h2 style={{color:"#8A2BE2"}} className="headerstyles">Employee</h2>
                
                 <p className="paragraphstyles">Looking for job opportunities</p>
             </div>
             <div className="buttontomove">
                < button className="burton" onClick={() => {
             setTimeout(() =>  navigate("/sigunup"), 1500);
            }}>
                 <img src={doublearrow} alt=""  /> 
                 </button>
             </div>
             </div>





             <div className="cards">
    
                  <div className="contractor"> 
                    <img src={contractor} alt="contactor" style={{width:"30px"}} />
                  </div>
                
                    <div className="topcard">
                <h2 style={{color:"blueviolet"}}  className="headerstyles">Employer </h2>
   
                <p className="paragraphstyles">Hiring talented Profesionals</p>
             </div>
              <div className="buttontomove1">

                <button className="burton" onClick={() => {
             setTimeout(() =>  navigate("/sigunup"), 1500);
            }}> 
                    <img src={doublearrow} alt=""  /> 
                     </button>
                </div>
             </div>

             </div>
            </section>
        </section>
    )
}
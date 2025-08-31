import couplesvg from "../assets/couple-working-home-with-laptops.png"
import roundpic from "../assets/roundpicture.svg"
import {  Link } from "react-router-dom"
import React from "react";

type SignupProps = {
  onSubmit: (data: { username: string; password: string; email: string}) => void;
};

export default function Signup ({ onSubmit }: SignupProps)  {
    
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      username: (e.currentTarget.elements.namedItem("username") as HTMLInputElement).value,
      password: (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value,
        email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
    };
    onSubmit(formData);
  };



    return (
        <>
     <main className="generalBody">
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

            {/*right section*/}
            <section className="rightSection">
                <h1 className="headertext">Join & connect the fastest growing online community</h1>
                <form action="" className="labelpart" onSubmit={handleSubmit}>
                   <div className="inputs">

                    <div className="individual">
                        
                     <label htmlFor="">Username</label>
                    <input type="text" className="designs"  name="username"/>

                    </div>


                 <div className="individual">
                        <label htmlFor="">E-mail</label>
                    <input type="email" className="designs" name="email"/>
                 </div>



                    <div className="individual">
                         <label htmlFor="" >Password</label>
                    <input type="password" className="designs" name="password"/>
                    </div>
                   </div>



                    <div className="terms">
                <div className="forcheckbox">
                        <input type="checkbox" name="" id="" />
                       <label htmlFor="" className="forterms"> I accept the terms and condsirion
                    </label>
                   
                </div>

                    <button className="button-butts"> SIGN UP</button>
</div>
                    
                </form>
                
                <div className="admin-accessed">
                <p >Own an account? {""}
                    
                    <Link to="/" >jump right in</Link> </p>

                    <p > <Link to="/home" className="admin-access"> Admin access</Link>  </p>


                </div>
                

            </section>
     </main>
            
            
            </>
    )
}
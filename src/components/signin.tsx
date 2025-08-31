import couplesvg from "../assets/couple-working-home-with-laptops.png"
import roundpic from "../assets/roundpicture.svg"
import {  Link } from "react-router-dom"



type SignupProps = {
 signInSubmitt: (data: { password: string; email: string}) => void;
};

export default function signin ({signInSubmitt }: SignupProps){
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      password: (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value,
        email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
    };
    signInSubmitt(formData);
  };



    return (
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
                       <label htmlFor="" className="forterms"> I accept the terms and conditions
                    </label>
                   
                </div>

                    <button className="button-butts"> SIGN IN</button>
</div>
                    
                </form>
                   <div className="admin-accessed">
                <p>Not yet a user?  {""}
                    
                    <Link to="/select-type-of-user">Sign up</Link> </p>
                <div>

  <p >
     <Link to="/home" className="admin-access"> Admin access</Link> 
   </p>
                </div>
</div>
            </section>
     </main>
    )
}
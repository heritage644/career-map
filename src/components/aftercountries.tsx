import reading from "../assets/reading.png"
export default function afterCountries (){


    return(
        <section className="aftercountriesfirst">

             <div>
                <img src={reading} alt="reading image" className="reduce" />
             </div>

            <div className="aftercountriessecond">
                
          <div className="kerkez">  <button className="Btn-btn">Profile</button>
             <span className="candy">Stand out in the job market</span></div>
             <div>

            <div className="displayer">
                <h1 className="heda">
                Be the candidate employers <br /> are looking for
                </h1>
               <p className="paragraph">
                    Create a comprehensive profile and start receiving interviews, 
                <br />    invites and job offers that align with your
                <br /> unique 
                    skills <br />
                    <p style={{paddingTop: "20px"}}>don't miss out on your dream job-get started  today  <br />  and make your profile stand out.</p>


                </p>
                </div>
             <div className="button-buttons">
                <button className="button-buttos">
                    Create now
                </button>
                </div>


             </div>
            </div>
        </section>
    )
}
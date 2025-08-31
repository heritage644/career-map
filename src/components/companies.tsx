import logos from "../assets/logo.png"


export default function companies (){

    return (
        <section className="companiessection">
            <div className="companiesfirst">
               <div className="renewdspan"> 
                <span>Companies</span>
                <h1 className="hide-desktop">Get noticed by leading <br /> Companies</h1>
                </div>
               
                <p>We collaborate with top organizations to bring <br /> you the best 
                job opportunities, connecting you <br /> with 
                leading employers who value your skills <br />  and 
                 expertise</p>

             <div>
                    <ol className="orderedlists">
      <li>Over 150,000 new job postings added every month</li>
      <li>Access job listings from 1200+ leading companies</li>
         <li>Recieve personalized job alerts for 100+ job categories</li>
                 </ol>
             </div>
            </div>

            <div className="stopcompanies">
                <h1 className="topCompanies">Top Companies</h1>
                <div>
                    <img src={logos} alt="logo-pic" className="imagelogo" />

                </div>

            </div>

        </section>
    )
}
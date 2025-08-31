


export default function CountriesCard (props: any){

    return (
        <>
        
    
 
         
        <section className="section-head">
        

            <div className="section-tail" >
                  <img src={props.country} alt="countires" />

                <h1 className="texone">{props.name} <span style={{fontSize:"15px"}}><small> {props.initials}</small></span></h1>

               <p className="textwo">  {props.text}</p>

           <div>
              <img src=  {props.jobImg} alt="jobImg" />
              <span className="texthree">  {props.jobNumbers}</span>
           </div>

                <div><img src= {props.highLogo} alt="high logo" />
               <span className="texfour"> {props.highRate}</span>
 </div>
 </div>
          
        </section>

 
        
        </>
    )
}
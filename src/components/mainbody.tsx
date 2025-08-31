import imageSearch from "../assets/bx_search.svg"
import imagelineOne from "../assets/Line 1.svg"
import arrow from "../assets/arrow-drop-down-svgrepo-com.svg"
export default function mainBody(){
    return(
        <>
        <section className="first-section">
            <h1 className="subfirst-section"><strong className="slong" style={{color:"#4A78ED"}}>Explore new  </strong>job vacancies all
            <br /> over the world. </h1>
            <h3 className="subSecondsection">Our platform features more than 1.2 million job vacancies world wide, connecting you 
             <br />   with employers who value your skills.</h3>
                <div className="subThirdsection">
                    <form action="" >
      <div className="flexer">
           <div className="selector-body" >
                               <img src={imageSearch} alt="image" className="search"/>
                     <select className="ridden">
                       <option value="" disabled selected hidden>Company or Industry </option>
                         <option value="123x55">   software development</option>
                           <option value="100x50">Teacher</option>
                            <option value="80x40">Farmer</option>
                        </select>
                        <img src={imagelineOne} alt="name" className="lineones" />
                     <span className="spooned"> 20mi</span><img src={arrow} alt="arrow" style={{width:"50px", height:"500px" }} className="arrow" />

                 </div>
               <div className="spacer">
                 <button className="button-buttos" >Search</button>    
                </div>    
           </div> 
                        
                        </form>
                </div>
                <div className="btn-btn">
                    <button className="btnForBtn" > Remote</button>
                     <button className="btnForBtn"> Work from home</button>
                      <button className="btnForBtn"> Part time</button>
                       <button className="btnForBtn">Design</button>
                    
                </div>

            </section></>
    )
}

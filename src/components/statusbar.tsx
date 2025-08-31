import starImage from "../assets/starimg.svg"

export default function statusBar (){
    return (
        <section className="first-main">
            <div className="subfirst-main">
                <img src={starImage} alt="Icon" />
                   <img src={starImage} alt="Icon" />
                      <img src={starImage} alt="Icon" />
                         <img src={starImage} alt="Icon" />
                            <img src={starImage} alt="Icon" />
                <p id="hidden">Superb Job Matching Service</p>



            </div>
                   <div className="subfirst-main" id="hiddendisplay">
                <img src={starImage} alt="Icon" />
                   <img src={starImage} alt="Icon" />
                      <img src={starImage} alt="Icon" />
                         <img src={starImage} alt="Icon" />
                            <img src={starImage} alt="Icon" />
                <p>Helped me find work quickly</p>



            </div>
                   <div className="subfirst-main" id="hiddendisplay">
                <img src={starImage} alt="Icon" />
                   <img src={starImage} alt="Icon" />
                      <img src={starImage} alt="Icon" />
                         <img src={starImage} alt="Icon" />
                            <img src={starImage} alt="Icon" />
                <p>Found my perfect role</p>



            </div>
        </section>
    )
}
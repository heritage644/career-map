import StatusBar from "../components/statusbar";
import MainBody from "../components/mainbody";
import CountriesCard from "../components/countrycardsec.js";
import AfterCountries from "../components/aftercountries.tsx";
import Companies from "../components/companies.tsx";
import PopularJobs from "../components/popularjobs.tsx";
import Footer from "../components/footer.tsx";
import Heading from "../components/header";



type countriesArray = {
country : any
name: String
text:string
jobImg:any
jobNumbers: string
highLogo:any
highRate:string
id: number
initials:string
}
type props = {
    Country : countriesArray[]
}
export default function HomePage(props:props){
    return (
       <>    {/* Heading component always visible */}
      <Heading />
      <section>
        <StatusBar />
      </section>
      <MainBody/>
{/*this is the country section*/}
 <section className="division">
   <section className="main-bg">
     <h2 className="country-class">Countries for job seekers</h2>
  <section style={{
  display:"grid"
}}
className="hreed"
>
{ props.Country.map((newCountry, index) => (
<>
<CountriesCard 
key={index}
country = {newCountry.country}
  name={newCountry.name}
  initials={newCountry.initials}
text= {newCountry.text}
jobImg={newCountry.jobImg}
jobNumbers={newCountry.jobNumbers}
highLogo={newCountry.highLogo}
highRate={newCountry.highRate}
/>
</>
))}
</section>
</section>
 </section>
{/*end*/}

<AfterCountries/>

<Companies/>
<PopularJobs/>
<Footer/>
       
       
       </>
    )
}

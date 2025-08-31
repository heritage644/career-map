import usa from "./assets/unitedstate.png"
import job from "./assets/joblogo.svg"
import high from "./assets/high.svg"
import canada from "./assets/canada.png"
import unitedKingdom from "./assets/unitedkingdom.png"
import southKorea from "./assets/southkorea.png"
import Australia from "./assets/Australia (AU).png"

export type countriesArray = {
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



const  countriesCard : countriesArray[]= [
{
    id:1,
country : usa,
name : "United states ",
text: "A land of opportunity with a diverse job  market and a wide range of industries offering countless career paths",
jobImg:job,
jobNumbers:"450k+",
highLogo:high,
highRate: "High",
initials:"US"
},

{
     id:2,
country : canada,
name : "Canada ",
text: "Known in the world today for all its high quality of life and friendly immigration policies, offers job opportunities across various sectors.",
jobImg:job,
jobNumbers:"200k+",
highLogo:high,
highRate: "Moderate",
initials:"CA"
},

{
     id:3,
country : unitedKingdom,
name : "United Kingdom ",
text: "With its thriving financial sector and growing tech industry, presents many job for professionals and graduates alike",
jobImg:job,
jobNumbers:"270k+",
highLogo:high,
highRate: "Steady",
initials:"UK"


},

{
     id:4,
country : southKorea,
name : "South Korea",
text: "Innovative technology industry and strong manufacturing sector provides a wealth of jobs for skilled workers.",
jobImg:job,
jobNumbers:"180k+",
highLogo:high,
highRate: "Steady",
initials:"KR"

},
{
     id:5,
country : unitedKingdom,
name : "Germany",
text: "Germany boasts a robust economy with high job market demand in engineering, manufacturing and IT sectors",
jobImg:job,
jobNumbers:"320k+",
highLogo:high,
highRate: "Rapid",
initials:"DE"

},

{
     id:6,
country :Australia,
name : "Australia",
text: "Australia offers a vibrant job market, particularly in healthcare, and education, with excellent work-life balance.",
jobImg:job,
jobNumbers:"150k+",
highLogo:high,
highRate: "High",
initials:"AU"

},

]
export default countriesCard

import { useNavigate } from "react-router-dom";






export default function NewUserPage(){

  const navigate = useNavigate();

  return(
    <>
    <section   style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap:"30px",
        transition: "all 1s ease-in-out"
      }}>

        <h2 className="welcomeback">welcome, we're happy to have you again {":)"} </h2>
<button className="buttonforwelcomeback"  onClick={() => {
             setTimeout(() =>  navigate("/home"), 1500);
            }} >Continue to app</button>
    </section>
    </>

  )



}
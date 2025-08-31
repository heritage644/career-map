import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


type welcomeName = {
    userName:string
}



export default function WelcomePage({userName}: welcomeName) {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 3000); // after 3s switch step
    return () => clearTimeout(timer);
  }, []);

  const styles =
    step === 1
      ? { backgroundColor: "white", color: "black" }
      : { backgroundColor: "#06090D ", color: "white" };

  return (
    <div
      style={{
        ...styles,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap:"30px",
        transition: "all 1s ease-in-out"
      }}
    >
    {step ===1 ?  <h1 className="welcomeback">Welcome, {userName} </h1> : <h1 className="welcomeback">Ready to explore ?</h1> }
      {step === 2 && (
        <button className="buttonforwelcomeback" id="waterButton"

        onClick={() => {
             setTimeout(() =>  navigate("/home"), 1500);
            }}
        >
         <span className="button-text"> Continue to App </span>
        
        </button>
      )}
    </div>
  );
}
// App.tsx
import { Routes, Route,useNavigate} from "react-router-dom";
import Home from "./components/home";
import "./index.css";
import countriesCard, { type countriesArray } from "./countries.ts"
import Signup from "./components/sigunup"
import Signin from "./components/signin.tsx";
import React from "react";
import Welcome  from "./components/welcome.tsx"
import NewUserPage from "./components/newuser.tsx";
import SelectTypeOfUser from "./components/selecttypeofuser.tsx";
function App() {

const navigate = useNavigate()
  const [signedUp, setSignedUp] = React.useState(false);
  const [userName, setUsername] = React.useState("")
  // ✅ this is the handler you pass to Signup
  function handleSignUpSubmit(data: { username: string; password: string; email: string }) {
    console.log("Signup data:", data);
    setSignedUp(true);
setUsername(data.username)
      // delay navigation by 1.5s (1500ms)
  setTimeout(() => {
    navigate("/welcome");
  }, 1500);
// mark user as signed up
  }

  // this is for sign in 
  function handleSignInSubmit(data: {  password: string; email: string }) {
    console.log("Signup data:", data);
    setSignedUp(true);
     // delay navigation by 1.5s (1500ms)
  setTimeout(() => {
    navigate("/newuser");
  }, 1500);
// mark user as signed up
  }

// button animation
















  return (



    <div>

      {/* Routes */}
      <Routes>
        <Route  path="/sigunup"  element= {<Signup onSubmit={  handleSignUpSubmit }/> } />
        
        <Route path="/home" element={<Home Country ={countriesCard}  />} />

        <Route path="/" element= {<Signin signInSubmitt ={handleSignInSubmit} />}/>
         <Route path="/welcome" element= {<Welcome userName={userName} />}/>
           <Route path="/newuser" element= {<NewUserPage  />}/>
            <Route path="/selecttypeofuser" element= {<SelectTypeOfUser />}/>
      </Routes>
    </div>
    
  );
}

export default App;

function createBubbles() {
  throw new Error("Function not implemented.");
}

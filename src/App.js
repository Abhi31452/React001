import { createContext } from "react";
import IconComponent from "./component/IconComponent";
import ProfileCard from "./component/ProfileCard";
import StateObject from "./component/StateObject";
import Stylecard from "./component/StyleCard";
import ContextApi from "./component/contextApi";
import UserProfile from "./component/ContextAPI/UserProfile";
import UserUpdate from "./component/ContextAPI/UserUpdate";
import UserContext from "./component/ContextAPI/UserContext";
import Counter from "./component/useReducer/Counter";


// export const Data = createContext(); 

function App() {
  const name = "Abhi";
  return (

    <div  >
      {/* <IconComponent/>
      <ProfileCard/>
      <Stylecard/>
      <StateObject/> */}
      {/* <Data.Provider value={name}>
      <ContextApi/>
      </Data.Provider> */}

      {/* <UserContext>
        <UserProfile />
        <UserUpdate />
      </UserContext> */}

      <Counter/>


      {/* <div style={{ backgroundColor : "lightblue", height : "100px" }}> Static </div>
        <div style={{ position: "relative", height :"100px", backgroundColor : "lightgreen", top :10 ,marginBottom :"10px" }}> Relative  </div>
        <div style={{ position: "absolute", height :"100px", backgroundColor : "green", top :100 ,marginBottom :"10px" }}> Absolute  </div>
        <div style={{ position: "sticky", height :"100px", backgroundColor : "red", bottom:10  }}> Sticky  </div> */}
    </div>
  );
}

export default App;

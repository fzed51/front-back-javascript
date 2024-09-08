import { useEffect } from "react";
import { ping } from "./api";

function App() {
  useEffect(()=>{
    ( async () => {
      const rep = await ping()
      console.log(rep)
    } )()
  },[]);
  return <div>App</div>;
}

export default App;

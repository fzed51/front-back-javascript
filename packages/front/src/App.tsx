import { useEffect } from "react";
import ky from "ky";

function App() {
  useEffect(()=>{
    ( async () => {
      const rep = await ky.get("http://localhost:3000/ping")
      console.log(rep)
    } )()
  },[]);
  return <div>App</div>;
}

export default App;

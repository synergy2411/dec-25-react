import "bootstrap/dist/css/bootstrap.min.css";
import Expenses from "./Components/Expenses/Expenses";
import FormDemo from "./Components/Demo/FormDemo";
import UseEffectDemo from "./Components/Demo/UseEffectDemo";
import ContextParent from "./Components/Demo/ContextParent";
import AuthContext from "./context/auth-context";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <h1 className="text-center">App Works!!!</h1>
      {/* <Output title="Some Awesome Title" /> */}
      {/* <FormDemo /> */}
      {/* <UseEffectDemo /> */}

      <hr />
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <ContextParent />
      </AuthContext.Provider>

      {/* <Expenses /> */}
    </div>
  );
}

export default App;

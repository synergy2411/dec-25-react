import { useState } from "react";
import AuthContext from "../../context/auth-context";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedInContext: isLoggedIn,
        setIsLoggedInContext: setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

import { createContext } from "react";

const AuthContext = createContext({
  isLoggedInContext: false,
  setIsLoggedInContext: function () {},
});

export default AuthContext;

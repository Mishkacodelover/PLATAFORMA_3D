import { createContext, useContext, useState } from "react";
import { LOGIN } from "../utilities/settings";
import jwtDecode from "jwt-decode";

const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  authorization: {
    email: null,
    user_role: null,
  },
});
const MY_AUTH_APP = "MY_AUTH_APP";

export default AuthContext;

export function AuthContextProvider({ children }) {
  const [authorization, setAuthorization] = useState(
    JSON.parse(window.localStorage.getItem(MY_AUTH_APP)) ?? {
      email: null,
      user_role: null,
    }
  );

  async function login(values) {
    const response = await fetch(LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    try {
      const token = await response.json();
      setAuthorization(jwtDecode(token.jwt));
      window.localStorage.setItem(MY_AUTH_APP, JSON.stringify(token.jwt));
      alert("usuario logueado");
    } catch (error) {
      console.log("error");
    }
  }

  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuthorization({
      email: null,
      user_role: null,
    });
  }

  const value = {
    authorization,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}

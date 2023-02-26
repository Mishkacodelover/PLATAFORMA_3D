import { createContext, useContext, useState } from "react";
import { LOGIN } from "../utilities/settings";
import jwtDecode from "jwt-decode";

const AuthContext = createContext({
  login: () => {},
  loginInvited: () => {},
  logout: () => {},
  authorization: {
    email: null,
    role: null,
    id: null,
    name: null,
  },
});
const MY_AUTH_APP = "MY_AUTH_APP";

export default AuthContext;

export function AuthContextProvider({ children }) {
  const [authorization, setAuthorization] = useState(
    JSON.parse(window.localStorage.getItem(MY_AUTH_APP)) ?? {
      email: null,
      role: null,
      id: null,
      name: null,
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
      const data = jwtDecode(token.jwt);
      setAuthorization({ ...data, token: token.jwt });
      window.localStorage.setItem(
        MY_AUTH_APP,
        JSON.stringify({ ...data, token: token.jwt })
      );
    } catch (error) {
      alert("Por favor introduzca los datos correctos");
      console.log("error");
    }
  }

  async function loginInvited(values) {
    const response = await fetch("http://localhost:8000/user/invited/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    try {
      const token = await response.json();
      const data = jwtDecode(token.jwt);
      setAuthorization({ ...data, token: token.jwt });
      window.localStorage.setItem(
        MY_AUTH_APP,
        JSON.stringify({ ...data, token: token.jwt })
      );
    } catch (error) {
      alert("Por favor introduzca los datos correctos");
      console.log("error");
    }
  }

  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuthorization({
      email: null,
      role: null,
      id: null,
      name: null,
    });
  }

  const value = {
    authorization,
    login,
    loginInvited,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}

import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = useState("");
  const [userIdenty, setUserIdenty] = useState('t');

  const userLogin = (token) => localStorage.setItem("token", jwtToken)
  const userLogout = () => localStorage.removeItem("token")

  useEffect(() => {
    localStorage.setItem("token", jwtToken)
  }, [jwtToken])

  const values = {
    userIdenty, jwtToken, setJwtToken, userLogout
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}
export { AuthProvider, AuthContext }
import { useState } from "react";

export const useAuth = (initialState) => {
  const [isAuth, setIsAuth] = useState(initialState);

  function login() {
    setTimeout(() => {
      setIsAuth(true)
    }, 1000)
  }

  function logout() {
    setTimeout(() => {
      setIsAuth(false)
    }, 1000)
  }

  return [isAuth, login, logout]
}
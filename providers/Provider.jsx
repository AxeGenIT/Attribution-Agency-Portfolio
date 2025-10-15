// components/Provider.tsx
"use client";
import { useEffect, useState } from "react";
import { ProviderContext } from "../context/ProviderContext";
import { fetchCompany, fetchUser } from "../app/helpers/backend";

const Provider = ({ children }) => {
  const [user, setUser] = useState({});
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      const fn = async () => {
        try {
          setIsLoading(true)
          const Company = await fetchCompany();
          const userInfo = await fetchUser();
          setCompany(Company);
          setUser(userInfo);
        } catch (error) {
          //call the logout
          localStorage.removeItem('access_token')
          setUser({})
          setCompany({})
        }finally{
          setIsLoading(false)
        }
      };
      fn();
    }
  }, []);

  return (
    <ProviderContext.Provider value={{ user, setUser, company, setCompany, isLoading, setIsLoading }}>
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;

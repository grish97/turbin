import {useState} from "react";

export const useAuth = () => {
  const [user, setUser] = useState<string | null>(null);

  const setupUser = (userName: string) => setUser(`S_${userName}`);

  return {
    user,
    setupUser
  };
};
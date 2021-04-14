import { useEffect } from "react";
import Cookie from "js-cookie";
import { useStore } from "../lib/store";

const App = ({ Component, pageProps }) => {
  const setUser = useStore((state) => state.setUser);
  //Appel l'api pour verifier si l'utilisateur est connecté
  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      fetch("/api/me").then((res) =>
        res
          .json()
          .then((response) => (res.ok ? response : Promise.reject(response)))
          .then((user) => {
            setUser(user);
          })
          .catch((error) => {
            Cookie.remove("token");
            setUser(null);
          })
      );
    }
  }, []);

  return <Component {...pageProps} />;
};

export default App;

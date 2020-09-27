import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Style from "./style";
import Main from "./pages/Main";
import Login from "./pages/Login";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

const STORAGE_KEY = "edymimolam-anime-list-isAuth";

function App() {
  const [isAuth, setIsAuth] = useLocalStorage(STORAGE_KEY, false);

  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  return (
    <ApolloProvider client={client}>
      <Style>
        {!isAuth ? <Login login={login} /> : <Main logout={logout} />}
      </Style>
    </ApolloProvider>
  );
}

export default App;

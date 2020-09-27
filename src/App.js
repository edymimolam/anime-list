import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
      <Router>
        <Style>
          {!isAuth ? <Login login={login} /> : <Main logout={logout} />}
        </Style>
      </Router>
    </ApolloProvider>
  );
}

export default App;

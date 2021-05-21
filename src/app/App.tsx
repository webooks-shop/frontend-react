import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "@components/Header";
import BookList from "@features/books/components/BookList";

function App() {
  return (
    <AppContainer>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BookList} />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.section`
  margin: 0 auto;
  width: 700px;
  max-width: 100%;
`;

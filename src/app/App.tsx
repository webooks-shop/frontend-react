import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "@components/Header";

function App() {
  return (
    <WholeContainer>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route />
        </Switch>
      </BrowserRouter>
    </WholeContainer>
  );
}

export default App;

const WholeContainer = styled.section`
  margin: 0 auto;
  width: 700px;
  max-width: 100%;
`;

import { useRouteMatch, Route, Switch } from "react-router-dom";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

const App = () => {
  const match = useRouteMatch("/");

  return (
    <Switch>
      <Route>
        <>
          <MenuHeader />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/home' component={HomePage} />
            <Route path='/game' component={GamePage} />
            <Route path='/about' render={() => <h1>This is page About</h1>} />
          </Switch>
          <Footer />
        </>
      </Route>

      <Route render={() => <h1> 404 NotFound</h1>} />
    </Switch>
  );
};

export default App;

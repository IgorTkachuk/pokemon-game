import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

const App = () => {
  const match = useRouteMatch("/");

  return (
    <Switch>
      <Route path='/404' render={() => <h1> 404 NotFound</h1>} />
      <Route>
        <>
          <MenuHeader />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/home' component={HomePage} />
            <Route path='/game' component={GamePage} />
            <Route path='/about' render={() => <h1>This is page About</h1>} />
            <Route render={() => <Redirect to='/404' />} />
          </Switch>
          <Footer />
        </>
      </Route>
    </Switch>
  );
};

export default App;

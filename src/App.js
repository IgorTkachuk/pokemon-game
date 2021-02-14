import { Route, Switch, Redirect } from "react-router-dom";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import { FirebaseContext } from "./context/firebaseContext";
import Firebase from "./service/firebase";

const App = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path='/404' render={NotFoundPage} />
        <Route>
          <>
            <MenuHeader />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/home' component={HomePage} />
              <Route path='/game' component={GamePage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/contact' component={ContactPage} />
              <Route render={() => <Redirect to='/404' />} />
            </Switch>
            <Footer />
          </>
        </Route>
      </Switch>
    </FirebaseContext.Provider>
  );
};

export default App;

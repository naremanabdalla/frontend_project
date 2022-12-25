import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import * as ROUTES from './constants/routes';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BookCard from './components/bookpage/BookCard';
import CardsPage from './components/bookpage/CardsPage';
import Scientific from './components/bookpage/scientificPage';
import Historical from './components/bookpage/historicalPage';
import Languages from './components/bookpage/languagesPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={SignIn} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.BookCard} component={BookCard} />
        <Route path={ROUTES.CardsPage} component={CardsPage} />
        <Route path={ROUTES.Scientific} component={Scientific} />
        <Route path={ROUTES.Historical} component={Historical} />
        <Route path={ROUTES.Languages} component={Languages} />


      </Switch>
      
    </Router>
    
  );
}

export default App;

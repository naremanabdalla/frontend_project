import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import homepage_map from './components/home_page/homepage_map'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Contact_us from './components/About_Contact_pages/Contact_us/Contact_us'
import About_us from './components/About_Contact_pages/About_us/About_us';
import BookCard from './components/bookpage/BookCard';
import CardsPage from './components/bookpage/CardsPage';
import ScientificDetail from './components/bookpage/scientificDetail';
import Scientific from './components/bookpage/scientificPage';
import Historical from './components/bookpage/historicalPage';
import Languages from './components/bookpage/languagesPage';
import page2 from './components/About_Contact_pages/page2/page2'
import page3 from './components/About_Contact_pages/page3/page3';
import page6 from './components/About_Contact_pages/page6/page6';
import profile from './components/About_Contact_pages/profile/profile';
import p1 from './components/bookpage/pages/p1';
import p2 from './components/bookpage/pages/p2';
import p3 from './components/bookpage/pages/p3';
import p4 from './components/bookpage/pages/p4';
import p5 from './components/bookpage/pages/p5';
import p6 from './components/bookpage/pages/p6';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={homepage_map} />
        <Route path={ROUTES.homepage_map} component={homepage_map} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.Contact_us} component={Contact_us} />
        <Route path={ROUTES.About_us} component={About_us} />
        <Route path={ROUTES.BookCard} component={BookCard} />
        <Route path={ROUTES.CardsPage} component={CardsPage} />
        <Route path={ROUTES.Scientific} component={Scientific} />
        <Route path={ROUTES.Historical} component={Historical} />
        <Route path={ROUTES.Languages} component={Languages} />
        <Route path={ROUTES.page2} component={page2} />
        <Route path={ROUTES.page3} component={page3} />
        <Route path={ROUTES.page6} component={page6} />
        <Route path={ROUTES.profile} component={profile} />
        <Route path={ROUTES.ScientificDetail} component={ScientificDetail} />
        <Route path={ROUTES.p1} component={p1} />
        <Route path={ROUTES.p2} component={p2} />
        <Route path={ROUTES.p3} component={p3} />
        <Route path={ROUTES.p4} component={p4} />
        <Route path={ROUTES.p5} component={p5} />
        <Route path={ROUTES.p6} component={p6} />


      </Switch>

    </Router>

  );
}

export default App;

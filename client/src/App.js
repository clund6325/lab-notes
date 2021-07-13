import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import MainNavbar from './components/shared/MainNavbar';
import FetchUser from './components/auth/FetchUser';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ColShow from './components/cols/ColShow';
import ColForm from './components/cols/ColForm';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/days/:dayId/cols/:id" component={ColShow} />
          <ProtectedRoute exact path="/days/:dayId/cols" component={ColForm} />
          <Route component={Nomatch} />
        </Switch>
      </Container>   
    </FetchUser>
  </>
)
export default App;

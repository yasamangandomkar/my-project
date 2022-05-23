import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header.components';
import checkoutPage from './pages/checkout/checkout.components';
import HomePage from './pages/homepage/homepages.components';
import ShopPage from './pages/shop/shop.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-up.components';


function App() {
  return (
    <div className="App">
      <Header/>
     <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route exact path='/checkout' component={checkoutPage} />
      </Switch>
    </div>
  );
}

export default App;

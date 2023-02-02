
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Shop from './routes/shop/shop.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation  />}>
          <Route index element={<Home />} /> {/* when index true displays the element on same path in the parent's Outlet */}
          <Route path="/shop/*" element={<Shop />} /> {/* /shop/* makes nested routes available */}
          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;

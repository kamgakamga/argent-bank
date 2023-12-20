import React, {FunctionComponent} from 'react';
import Footer from './composants/footer/Footer';
import Header from './composants/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import PageNotFound from './pages/page-not-found/PageNotFound';

const App: FunctionComponent = () => {

        //const name: String = 'React';

       return ( 
         <div>
            <Router> 
              <Header/>
                <Routes>
                      <Route path="/"  Component={Welcome} />
                      <Route path="*"  Component={PageNotFound} />
                </Routes> 
                <Footer />   
            </Router>
          </div>
         );
}

export default App;
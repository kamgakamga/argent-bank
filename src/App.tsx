import React, {FunctionComponent} from 'react';
import Footer from './composants/footer/Footer';
import Header from './composants/header/Header';

const App: FunctionComponent = () => {

        //const name: String = 'React';

       return ( 
             <div>
                <Header/>
                    <h1> Bonjour le monde !!!</h1>
                 <Footer /> 
              </div>
         );
}

export default App;
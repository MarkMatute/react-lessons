import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { firebase } from './firebase';

const App = () =>{
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('login');
    } else {
        console.log('logout');
    }
});


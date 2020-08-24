import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { FirebaseAppProvider } from 'reactfire';

export const firebaseConfig = {
  apiKey: 'AIzaSyBOslgef1rYI9K83EPUkTiggOtnDUR6O5k',
  authDomain: 'stripe-fire-j.firebaseapp.com',
  databaseURL: 'https://stripe-fire-j.firebaseio.com',
  projectId: 'stripe-fire-j',
  storageBucket: 'stripe-fire-j.appspot.com',
  messagingSenderId: '418965587657',
  appId: '1:418965587657:web:ae5f017939a4a818c3af18',
  measurementId: 'G-43BJNM12GQ',
};

export const stripePromise = loadStripe('pk_test_85VnIvW9sDGQ3RxIPtOKkIW3');

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from "react-dom/client"
import App from './components/app/app.tsx'
import {Setting} from "./const.ts"
import { offers } from './mocks/offers.ts';
import { offersList } from './mocks/offers-list.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App
      rentalOffersCount = { Setting.rentalOffersCount }
      offersList = { offersList }
      offers = { offers }
    />
  </React.StrictMode>
)

  
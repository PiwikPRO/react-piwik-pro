import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import PiwikPro from '@piwikpro/react-piwik-pro';

PiwikPro.initialize('0c0a8661-8c10-4f59-b8fc-1c926cbac184', 'https://astralprojection.promilci.com');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

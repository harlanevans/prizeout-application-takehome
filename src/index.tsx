import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactModal from 'react-modal';

import { App } from './components/app';
import store from './store';

import 'normalize.css';
import './index.less';

Sentry.init({
    dsn: 'https://631e6984cd70426ebf4b99e4faf612c0@o925290.ingest.sentry.io/5874076',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 0.5,
});

// Need to add this for accessibility, to hide other content from screen readers if modal is opened
ReactModal.setAppElement('#root');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);

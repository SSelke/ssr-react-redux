import App from './app';
import Home from './components/homeComponent';
import Contact from './components/contactComponent';

const routes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/contact',
                component: Contact
            }
        ]
    }
];

export default routes;
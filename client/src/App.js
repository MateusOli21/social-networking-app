import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ApolloClientProvider from './ApolloClient';
import Routes from './routes';

import GlobalStyles from './assets/GlobalStyles';

function App() {
    return (
        <ApolloClientProvider>
            <BrowserRouter>
                <GlobalStyles />
                <Routes />
                <ToastContainer autoClose={3000} />
            </BrowserRouter>
        </ApolloClientProvider>
    );
}

export default App;

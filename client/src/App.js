import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ApolloClientProvider from './ApolloClient';
import { AuthProvider } from './Context/AuthContext';
import Routes from './routes';

import GlobalStyles from './assets/GlobalStyles';

function App() {
    return (
        <AuthProvider>
            <ApolloClientProvider>
                <BrowserRouter>
                    <Routes />
                    <GlobalStyles />
                    <ToastContainer autoClose={3000} />
                </BrowserRouter>
            </ApolloClientProvider>
        </AuthProvider>
    );
}

export default App;

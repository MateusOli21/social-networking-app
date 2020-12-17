import { BrowserRouter } from 'react-router-dom';

import ApolloClientProvider from './ApolloClient';
import Routes from './routes';

import GlobalStyles from './assets/GlobalStyles';

function App() {
    return (
        <ApolloClientProvider>
            <BrowserRouter>
                <GlobalStyles />
                <Routes />
            </BrowserRouter>
        </ApolloClientProvider>
    );
}

export default App;

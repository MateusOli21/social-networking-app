import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:5000',
    cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;

import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';  // integrating Apollo into the front end of the application
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
//---------------while we are here, lets import the page components
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

// Next, we need to establish the connection to the back-end server's /graphql endpoint.
// consider how. What's the address of the current React client's server? What about the back-end server?

const httpLink = createHttpLink({         //  (1) we first establish a new link to the GraphQL server at its /graphql endpoint with createHttpLink()
  uri: '/graphql',   
});

const client = new ApolloClient({        // (2a)  we use the ApolloClient() constructor to instantiate the Apollo Client instance and create the connection to the API endpoin
  link: httpLink,
  cache: new InMemoryCache(),           // (2b) instantiate a new cache object
});




function App() {                        // (3) Lastly, we need to enable our entire application to interact with our Apollo Client instance by wrapping the entire returning JSX code with <ApolloProvider>
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
              <Route path="/profile">
                  <Route path=":username" element={<Profile />} />
                  <Route path="" element={<Profile />} />
            </Route>
            <Route 
                path="/thought/:id" 
                element={<SingleThought />} 
              />
            <Route
              path="*"
              element={<NoMatch/>}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;

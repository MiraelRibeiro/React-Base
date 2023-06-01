import React from 'react';
import Login from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Login />
      <GlobalStyles />
    </React.Fragment>
  );
}

export default App;

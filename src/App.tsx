import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <SignIn />
    </>
  );
};

export default App;

import { useState, useContext } from 'react';
import styled from 'styled-components';
import './App.css';
import { AppContext, AppProvider } from './AppProvider';
import InputComponent from './components/InputComponent';
import AIOutput from './components/AIOutput';

const AppContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;

const AppHeading = styled.section`
  text-align: center;

  & h1 {
    font-size: 3.5rem;
    font-weight: 700;
  }

  & h5 {
    font-size: 2.5rem;
    font-weight: 400;
  }
`;

function InnerApp() {
  const { result } = useContext(AppContext);

  return (
    <AppContainer>
      <AppHeading>
        <h1>AI Startup Pitch Assistant</h1>
        <h5>Turn your idea into a compelling pitch in seconds.</h5>
      </AppHeading>
      <InputComponent />
      {result && (
        <AIOutput />
      )}
    </AppContainer>
  )
}

function App() {
  return (
    <AppProvider>
      <InnerApp />
    </AppProvider>
  )
}

export default App

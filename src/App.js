import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import { BrowserRouter as Router } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

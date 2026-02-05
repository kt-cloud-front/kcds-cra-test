'use client'
import React from 'react';
import '@kt-cloud-front/ui-style/css'
import '@kt-cloud-front/ui-style-react'

import { SButton } from '@kt-cloud-front/ui-react'
import TestPage from './TestPage';
import './App.css';

function App() {
  return (
      <div className="App" style={{ padding: '32px' }}>
        <SButton>기본 버튼</SButton>
        <TestPage />
      </div>
  );
}

export default App;
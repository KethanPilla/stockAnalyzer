import logo from './logo.svg';
import './App.css';
import FinancialForm from './FinancialForm';
import { useState } from 'react';
import Result from './Result';
function App() {
  const [result, setResult] = useState("")
  return (
    <div className="App">
      <header className="App-header">fit 
        <h1>Stock analysis</h1>
      </header>
      {
        result.length > 0 &&
        <>
          <Result result={result} />
          <button className='clearbtn'
            onClick={() => {
              setResult("")
            }}
          >Clear Result</button>
        </>
      }
      {
        result.length == 0 && <FinancialForm setResult={setResult} />
      }

    </div>
  );
}

export default App;

import React from 'react';
import './styles/App.scss';
import TitleComponent from './components/title';
import HistogramComponent from './components/histogram';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        REPOSITIVE FRONT-END TEST
      </header>
      <main className="b-grid-2">
        <div className="b-block-1">
          <TitleComponent text="Group by Primary Site" />
          <HistogramComponent />
        </div>
        

        <TitleComponent text="Group by Disease" />
      </main>
    </div>
  );
}

export default App;

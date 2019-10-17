import React, { Fragment } from 'react';
import './styles/App.scss';
import TitleComponent from './components/title';
import HistogramComponent from './components/histogram';
import data from './models/data.json';
import random_rgba from './higher-order/random-color';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        REPOSITIVE FRONT-END TEST
      </header>
      <main className="b-grid-2">
        <div className="b-block-1">
          {data.histogram.map((x, i) => 
            <Fragment key={i}>
            <TitleComponent text={x.title} />
            <HistogramComponent data={x.data} color={random_rgba()} />
            </Fragment>
          )}
          
        </div>
        

        <TitleComponent text="Group by Disease" />
      </main>
    </div>
  );
}

export default App;

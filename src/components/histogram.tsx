import React, {Fragment} from 'react';
import '../styles/App.scss';
import { IData } from '../models/histogram';

interface IBars {
  data: Array<string | number>
}

// function transformData (data: IData) {

// }

const calculateWidth = (current: number) => {
    const total: number = 93 + 3 + 3;
    const width = Math.floor((1 - (current / total)) * 100);
    const cssWidth = `calc(100% - ${width} %}`;
    return cssWidth;
}

const rgbaTransform = (color: string, index: number) => {
  let transparency;
  if (index < 4) {
    const value = 5 - index;
    transparency = value/5;
  } else {
    transparency = 0.2;
  }
  const cssColor = `rgba(${color}, ${transparency})`;
  return cssColor;
}

function HistogramComponent () {
  return (
    <Fragment>
      <div className="b-list">
        <div className="b-grid-3 b-bottom-space">
          <div className="b-list-item__name">lung</div>
          <div className="b-list-item__value">93</div>
          <div className="b-list-item__bar" style={{ backgroundColor: rgbaTransform('0,0,255', 0), width: calculateWidth(93)}}></div>
          {console.log(rgbaTransform('0,0,255', 0))}
        </div>
        <div className="b-grid-3 b-bottom-space">
          <div className="b-list-item__name">kidney</div>
          <div className="b-list-item__value">3</div>
          <div className="b-list-item__bar" style={{ backgroundColor: rgbaTransform('0,0,255', 1), width: calculateWidth(93)}}></div>
        </div>
        <div className="b-grid-3 b-bottom-space">
          <div className="b-list-item__name">liver</div>
          <div className="b-list-item__value">3</div>
          <div className="b-list-item__bar" style={{ backgroundColor: rgbaTransform('0,0,255', 2), width: calculateWidth(93)}}></div>
        </div>
      </div>
    </Fragment>
  )  
}

export default HistogramComponent;
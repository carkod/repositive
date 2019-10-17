import React, { Fragment } from 'react';
import '../styles/App.scss';
import { IHistogramData } from '../models/histogram';

interface IBars {
  data: Array<string | number>
}


export function transformData(data: any) {
console.log(data);
  // Transforming
  let newHistogramArray: Array<any> = [];
  for (let [key, value] of Object.entries(data)) {
    const histogramObject = {
      name: key,
      value: value
    }
    newHistogramArray.push(histogramObject);
  }

  // sorting
  const orderedData = newHistogramArray.sort((a: any, b: any) => {
    return b.value - a.value;
  });

  return orderedData;

}

const calculateWidth = (current: string) => {
  const total: number = 93 + 3 + 3;
  const width = Math.floor((1 - (+current / total)) * 100);
  const cssWidth = `calc(100% - ${width}%)`;
  return cssWidth;
}

export const rgbaTransform = (rgbcolor: string, index: number) => {
  let transparency;
  if (index < 4) {
    const value = 5 - index;
    transparency = value / 5;
  } else {
    transparency = 0.2;
  }
  const cssColor = `rgba(${rgbcolor}, ${transparency})`;
  return cssColor;
}


function HistogramComponent({ data, color }: any) {
  const transformedData = transformData(data); 
  return (
    <Fragment>
      <div className="b-list">
        {transformedData.map((x: IHistogramData, i: number) => 
          <div key={i} className="b-grid-3 b-bottom-space">
            <div className="b-list-item__name">{x.name}</div>
            <div className="b-list-item__value">{x.value}</div>
            <div className="b-list-item__bar" style={{ backgroundColor: rgbaTransform(color, i), width: calculateWidth(x.value) }}></div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default HistogramComponent;
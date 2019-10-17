import { shallow } from 'enzyme';
import React from 'react';
import HistogramComponent, {transformData, rgbaTransform} from './histogram';
 
 
describe('Histogram component tests', () => {

  const dataObject = {cat: 93, dogs: 3, elephants: 3}
  const histogramArray = transformData(dataObject);

  it('should not return undefined', () => {
    expect(transformData(dataObject)).toBeDefined();
  });

  it('should return an array with length > 3 (object size)', () => {
    expect(transformData(dataObject).length).toBe(3);
  });


  it('should render an rgba color as string', () => {
    const color = '0,0,225';
    const transparency = 1;
    expect(rgbaTransform(color, transparency)).toBe(`rgba(${color}, 0.8)`);
  });

})
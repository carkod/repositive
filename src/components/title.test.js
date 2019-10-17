import { shallow } from 'enzyme';
import React from 'react';
import TitleComponent from './title';
 
 
describe('Title component tests', () => {
  it('should display the text', () => {
    const text = 'title';
    const context = shallow(<TitleComponent text={text}/>);
    expect(context.find('.b-heading-1').text()).toBe(text);
  });
})
 
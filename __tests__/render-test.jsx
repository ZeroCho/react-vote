import React from 'react';
import expect from 'expect';
import { shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactVote from '../src/ReactVote';

configure({ adapter: new Adapter() });

describe('<ReactVote />', () => {
  it('should render creation-view', () => {
    const wrapper = render(<ReactVote />);
    expect(wrapper.find('#creation-view').length).toEqual(1);
  });

  it('should not render vote-view', () => {
    const wrapper = shallow(<ReactVote />);
    expect(wrapper.find('#vote-view').length).toEqual(0);
  });

  it('should render vote-view', () => {
    const wrapper = shallow(<ReactVote
      data={{
        title: 'Ongoing Vote with Custom Text',
        items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }],
        closed: false,
      }}
    />);
    expect(wrapper.find('#vote-view').length).toEqual(1);
  });

  it('should not render creation-view', () => {
    const wrapper = shallow(<ReactVote
      data={{
        title: 'Ongoing Vote with Custom Text',
        items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }],
        closed: false,
      }}
    />);
    expect(wrapper.find('#creation-view').length).toEqual(0);
  });
});

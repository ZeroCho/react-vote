import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CreationView from '../src/components/CreationView';
import { reactVoteDefaultProps } from '../src/ReactVote';

configure({ adapter: new Adapter() });

describe('<CreationView />', () => {
  it('should have default state', () => {
    const wrapper = shallow(<CreationView
      setData={() => {
      }}
      setting={false}
      styles={reactVoteDefaultProps.styles}
      text={reactVoteDefaultProps.text}
      errorMessage={reactVoteDefaultProps.errorMessage}
    />);
    expect(wrapper.state()).toEqual({
      addInput: '',
      autoCloseNumber: '',
      closeCheck: false,
      downvoteCheck: false,
      errorMessage: false,
      expansionCheck: false,
      items: [],
      multipleCheck: false,
      reasonCheck: false,
      showMessage: null,
      showTotalCheck: true,
      voteTitle: '',
    });
  });

  it('should render addInput and addButton', () => {
    const wrapper = shallow(<CreationView
      setData={() => {
      }}
      setting={false}
      styles={reactVoteDefaultProps.styles}
      text={reactVoteDefaultProps.text}
      errorMessage={reactVoteDefaultProps.errorMessage}
    />);
    expect([wrapper.find('#rvote-addinput').length, wrapper.find('#rvote-addbutton').length]).toEqual([1, 1]);
  });

  it('should change state when title is put', () => {
    const wrapper = shallow(<CreationView
      setData={() => {
      }}
      setting={false}
      styles={reactVoteDefaultProps.styles}
      text={reactVoteDefaultProps.text}
      errorMessage={reactVoteDefaultProps.errorMessage}
    />);
    const voteTitle = 'VoteTitle';
    wrapper.find('#rvote-titleinput').simulate('change', { target: { value: voteTitle } });
    expect(wrapper.state().voteTitle).toEqual(voteTitle);
  });

  it('should add an item when addButton is clicked', () => {
    const wrapper = shallow(<CreationView
      setData={() => {
      }}
      setting={false}
      styles={reactVoteDefaultProps.styles}
      text={reactVoteDefaultProps.text}
      errorMessage={reactVoteDefaultProps.errorMessage}
    />);

    const itemTitle = 'ItemTitle';
    wrapper.find('#rvote-addinput').simulate('change', { target: { value: itemTitle } });
    wrapper.find('#rvote-addbutton').simulate('click', 1);
    expect(wrapper.state().items[0].title).toEqual(itemTitle);
  });

  it('should add multiple items', () => {
    const wrapper = shallow(<CreationView
      setData={() => {
      }}
      setting={false}
      styles={reactVoteDefaultProps.styles}
      text={reactVoteDefaultProps.text}
      errorMessage={reactVoteDefaultProps.errorMessage}
    />);

    const itemTitle = 'ItemTitle';
    wrapper.find('#rvote-addinput').simulate('change', { target: { value: itemTitle + 1 } });
    wrapper.find('#rvote-addbutton').simulate('click', 1);
    wrapper.find('#rvote-addinput').simulate('change', { target: { value: itemTitle + 2 } });
    wrapper.find('#rvote-addbutton').simulate('click', 1);
    wrapper.find('#rvote-addinput').simulate('change', { target: { value: itemTitle + 3 } });
    wrapper.find('#rvote-addbutton').simulate('click', 1);
    expect(wrapper.state().items.length).toEqual(3);
  });
});

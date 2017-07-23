/* global expect jest test */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RoleCard from '../../../components/role/RoleCard';

jest.dontMock('../../../components/role/RoleCard');

describe('RoleCard Component', () => {
  test('should match the role card snapshot', () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const deleteRole = jest.fn();
    const component = shallow(
      <RoleCard
        title={'Book'}
        id={3}
        description={'Awesome'}
        onChange={onChange}
        onSubmit={onSubmit}
        deleteRole={deleteRole}
        createdAt={'today'} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});

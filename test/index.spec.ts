import { expect } from 'chai';

import greet from '../src';

describe('greet', function() {
  it('should display the correct greeting', function() {
    expect(greet('World')).to.equal('Hello World!');
  });
});

import React from 'react';
import { HomeView } from 'routes/Home/components/HomeView';
import { render } from 'enzyme';

describe('(View) Home', () => {
  let _component;

  beforeEach(() => {
    _component = render(<HomeView />);
  });

  it('Renders a welcome message', () => {
    const welcome = _component.find('h4');
    welcome.should.exist;
    welcome.text().should.match(/Welcome/);
  });

  it('Renders an awesome duck image', () => {
    const duck = _component.find('img');
    duck.should.exist;
    duck.attr('alt').should.match(/This is a duck, because Redux!/);
  });
});

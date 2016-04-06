import { should } from 'chai';
should();

export default function named () {
  this.When('I search Google for "$search"', async function (search) {
    await this.browser.url('http://www.google.co.uk/webhp?complete=0');
    await this.browser.element('[name=q]')
      .keys(`${search}U+E007`);
  });

  this.Then('I should see some results', async function () {
    await this.browser.waitForExist('div.g')
      .elements('div.g')
      .then((elements) => {
        return elements.length.should.have.length.above(0);
      });
  });
}

module.exports = named;

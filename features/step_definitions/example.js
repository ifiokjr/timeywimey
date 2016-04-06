import { should } from 'chai';
import 'colors';
should();

export default function named () {
  this.When('I search Google for "$search"', async function (search) {
    await this.browser
        .url('http://www.google.co.uk/webhp?complete=0')
        .element('[name=q]')
        .keys(search)
        .keys('Enter');
  });

  this.Then('I should see some results', async function () {
    await this.browser.waitForExist('div.g', 5000)
      .elements('div.g')
      .then((elements) => {
        return elements.value.should.have.length.above(0);
      });
  });
}

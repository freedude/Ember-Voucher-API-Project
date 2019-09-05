import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | home page', function(hooks) {
  setupApplicationTest(hooks);

  test('should show home as the home page', async function(assert) {
    await visit('/home');

    assert.equal(currentURL(), '/home', 'should automatically redirect');
  });

  test('Search bar tests', async function(assert) {
    await visit('/');

    await fillIn('#emailSearch', 'seanfreemantya@gmail.com');
    await click('#searchButton');

    assert.equal(this.element.querySelector('#clientSearchError').textContent.trim(), 'No clients found');

    await fillIn('#emailSearch', '0.111085034143845@example.com');
    await click('#searchButton');

    assert.equal(this.element.querySelector('#clientSearchError'),null);

    await fillIn('#phoneSearch', '1234567');
    await click('#searchButton');

    assert.equal(this.element.querySelector('#clientSearchError').textContent.trim(), 'No clients found');

    await fillIn('#phoneSearch', '11085034143845');
    await click('#searchButton');

    assert.equal(this.element.querySelector('#testClientCardCreated').textContent.trim(), 'Create Voucher');

  });


});

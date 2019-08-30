import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | home page', function(hooks) {
  setupApplicationTest(hooks);

  test('should show home as the home page', async function(assert) {
    await visit('/home');

    assert.equal(currentURL(), '/home', 'should automatically redirect');
  });

  test ('should list available vouchers.', async function(assert){
    await visit('/home');
    assert.equal(this.element.querySelectorAll('.listing').length,3, 'should display 3 listings');
  });
});

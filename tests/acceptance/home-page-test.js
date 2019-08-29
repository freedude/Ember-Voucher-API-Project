import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | home page', function(hooks) {
  setupApplicationTest(hooks);

  test('should show home as the home page', async function(assert) {
    await visit('/home');

    assert.equal(currentURL(), '/home', 'should automatically redirect');
  });
});

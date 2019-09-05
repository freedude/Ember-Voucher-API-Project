import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | client', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('Home Controller exists', function(assert) {
    let controller = this.owner.lookup('controller:home');
    assert.ok(controller);
  });
});
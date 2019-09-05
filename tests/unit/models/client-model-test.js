import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | client model', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('Client Model exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.query('client', {});
    assert.ok(model);
  });
});

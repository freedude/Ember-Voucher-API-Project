import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | voucher model', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('Voucher Model exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('voucher', {});
    assert.ok(model);
  });
});

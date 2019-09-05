import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | client', function(hooks) {
  setupTest(hooks);

  test('Voucher serializer exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('voucher');

    assert.ok(serializer);
  });

  test('voucher serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('voucher', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});

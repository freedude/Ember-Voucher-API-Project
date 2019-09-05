import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | client', function(hooks) {
  setupTest(hooks);

  test('Client serializer exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('client');

    assert.ok(serializer);
  });

  test('Client serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('client', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import ENV from 'phorest-techtest-sean-freeman/config/environment';

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  test('Application adapter exists', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    let authHeader = {
      "Authorization": "Basic Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw="
    };

    assert.equal(adapter.host, ENV.API.endpoint, 'host is set correctly');
    assert.equal(adapter.namespace, `api/business/${ENV.API.businessId}`, 'namespace is set correctly');
    assert.deepEqual(adapter.headers, authHeader, 'auth header is set correctly');
  });

  test('@method pathForType', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    let modelNameMock = 'mock model';
    let expectedResult = 'mock model';

    assert.equal(adapter.pathForType(modelNameMock), expectedResult, 'returns expected value');
  });

});

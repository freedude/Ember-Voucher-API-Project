import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | voucher-input', function(hooks) {
  setupRenderingTest(hooks);

  test('Voucher Input renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{voucher-input}}`);

    // Template block usage:
    await render(hbs`
    {{voucher-input}}
    `);

    assert.equal(this.element.querySelector('#testVoucherInputRendered').textContent.trim(), 'E-mail to Client');
  });
});

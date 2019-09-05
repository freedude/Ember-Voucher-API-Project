import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | client-info', function(hooks) {
  setupRenderingTest(hooks);

  test('Client Info renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{client-info}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
    {{client-info
      class="client-card"
      card=this.model.clients
      cardComponent="client-card"
  }}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });

  
});

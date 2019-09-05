import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | client-search', function(hooks) {
  setupRenderingTest(hooks);

  test('Client Search renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{client-search}}`);

    // Template block usage:
    await render(hbs`
      {{client-search}}
    `);

    assert.equal(this.element.querySelector('#testSearchButtonRender').textContent.trim(), 'Search');
  });
});


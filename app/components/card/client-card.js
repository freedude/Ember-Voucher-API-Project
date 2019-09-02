import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    editEvents: service(),

    click() {
        this.editEvents.openEditor(this.item);
        this.set('showVoucherCard', true);
    }

});

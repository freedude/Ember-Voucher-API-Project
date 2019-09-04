import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
    store: service(),
    showAlert: false,
    showRewardCard: false,
    showErrorMessage: false,
    showVoucherButton: true,

    click() {
        this.set('currentClient', this.item);
        this.set('showVoucherCard', true);
        this.set('showVoucherButton', false);
    },
    actions: {

        createVoucherRecord(data) {
            data.clientId = this.currentClient.id;

            let voucher = this.store.createRecord('voucher', data);
            set(this, 'voucher', voucher);

            this.set('showRewardCard', true)

            voucher.save().then(() => {
                this.set('showRewardCard', true)
            })
                .catch(() => {
                    this.set('showErrorMessage', true)
                });

        }


    }

});

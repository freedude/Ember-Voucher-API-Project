import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Component.extend({
    store: service(),
    
    showRewardCard: false,
    showErrorMessage: false,
    showVoucherButton: true,
    loadingVoucher: false,

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
            this.set('loadingVoucher', true)

            voucher.save().then(() => {
                this.set('showRewardCard', true)
                this.set('showErrorMessage', false)
                this.set('loadingVoucher', false)
            })
                .catch(() => {
                    this.set('showErrorMessage', true)
                    this.set('showRewardCard', false)
                    this.set('loadingVoucher', false)
                });

        }

    }

});

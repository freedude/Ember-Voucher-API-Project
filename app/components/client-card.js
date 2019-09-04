import Component from '@ember/component';
import { inject as service } from '@ember/service';
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
        
            voucher.save().then(() => {
                this.set('showRewardCard', true)

                let createdVoucher = this.store.query('voucher', data.clientId, $('#voucher-amount').val());
    

            createdVoucher.then(() => {
                console.log("HAPPENED");
                // this.set('voucherRewarded', true);
                // this.set('voucherId', createdVoucher.voucherId )
                
            })

                setTimeout(() => {
                    this.set('showAlert', false);
                }, 3000);
            })
                .catch(() => {
                    this.set('showErrorMessage', true)

                   
                });

            
        }


    }

});

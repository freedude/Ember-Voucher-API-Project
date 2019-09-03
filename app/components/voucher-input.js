import Component from '@ember/component';
import moment from 'moment';


export default Component.extend({
    classNames: ['card'],

    actions: {
    
        createVoucher() {
            let voucherData = {
                issueDate: moment(this.$('#voucher-issue-date').val()).toISOString(), // Entered issue date
                expiryDate: moment(this.$('#voucher-expiry-date').val()).toISOString(), // Entrered expiry date
                originalBalance: parseFloat(this.$('#voucher-amount').val()) // Entered Balance
            }

            this.createVoucherRecord(voucherData);
            

        }
    }
});

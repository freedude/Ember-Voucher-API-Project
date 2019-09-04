import Component from '@ember/component';
import moment from 'moment';
import $ from 'jquery';

export default Component.extend({

    didRender() {
        let today = moment().format('YYYY-MM-DD');
        let expired = moment().add(7, 'days').format('YYYY-MM-DD');

        $('#voucher-issue-date').val(today);
        $('#voucher-expiry-date').val(expired);
        $('#voucher-amount').val(0);
      },
    
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

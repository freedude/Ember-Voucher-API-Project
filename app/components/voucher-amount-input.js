import Component from '@ember/component';
import { inject as service } from '@ember/service';
import moment from 'moment';


export default Component.extend({
    createVoucherService: service(),

    actions: {
        
        createVoucher() {
            let voucherData = {
                issueDate: moment(this.$('#voucher-issue-date').val()).toISOString(),
                expiryDate: moment(this.$('#voucher-expiry-date').val()).toISOString(),
                originalBalance: parseFloat(this.$('#voucher-amount').val())
            }

            this.createVoucherService.createVoucherRecord(voucherData);
        }
        
    }
});

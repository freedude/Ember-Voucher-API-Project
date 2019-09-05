import Component from '@ember/component';
import moment from 'moment';
import $ from 'jquery';

export default Component.extend({

    didRender() { // Set date inputs to today + 1 week later on render
        let today = moment().format('YYYY-MM-DD');
        let expired = moment().add(7, 'days').format('YYYY-MM-DD');

        $('#voucher-issue-date').val(today);
        $('#voucher-expiry-date').val(expired);
        $('#voucherAmount').val(0);
      },
    
    actions: {

        createVoucher() {
            let voucherData = {
                issueDate: moment(this.$('#voucher-issue-date').val()).toISOString(), // Entered issue date
                expiryDate: moment(this.$('#voucher-expiry-date').val()).toISOString(), // Entrered expiry date
                originalBalance: parseFloat(this.$('#voucherAmount').val()) // Entered Balance
            }

            if($('#voucherAmount').val() == 0){
                $('#createVoucherButton2').text("Please enter a value");
                setTimeout(() => {
                    $('#createVoucherButton2').text("E-mail to Client");
                }, 2500);
            } else {
                this.createVoucherRecord(voucherData);
              
            }

           
            
        }
    }
});

import Component from '@ember/component';

export default Component.extend({

    showVoucherForm: false,
  
    actions: {
        createVoucher() {
            this.set('showVoucherForm', true);
        },


    }
});

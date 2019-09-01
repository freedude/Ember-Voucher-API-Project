import Service, { inject as service } from '@ember/service';

export default Service.extend({
    store: service(),
    showAlert: false,

    createVoucherRecord(data) {
        data.clientId = this.currentClient.id;
        
        let voucher = this.store.createRecord('voucher', data);

        voucher.save().then((/*record*/) => {
            this.set('alertMessage', 'Your voucher has been succesfully created...');
            this.set('alertType', 'success');
            this.set('showAlert', true);

            setTimeout(() => {
                this.set('showAlert', false);
            }, 3000);
        })
            .catch((/*reason*/) => {
                this.set('alertMessage', 'An error occurred while creating the voucher... Please try again');
                this.set('alertType', 'danger');
                this.set('showAlert', true);

                setTimeout(() => {
                    this.set('showAlert', false);
                }, 3000);
            });
       
    }
});

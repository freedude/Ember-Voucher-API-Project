import Controller from '@ember/controller';

export default Controller.extend({
    isLoadingClients: false,
    searchComplete: false,

    init() {
        this._super(...arguments);
    },

    actions: {
        
        searchClient(query) {

            this.set('searchComplete', true);

            Object.entries(query).forEach(([key, value]) => {
                if (value.length === 0) {
                    delete query[key];
                }
            });

            if (Object.keys(query).length === 0) {
                
                this.set('model.clients', this.store.findAll('client'));
                return false;
            }

            this.set('isLoadingClients', true);
            let filteredClients = this.store.query('client', query);

            this.set('model.clients', filteredClients);
            filteredClients.then(() => {
                this.set('isLoadingClients', false);

            })
        },

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
            this.resetVoucherForm();
            this.closeEditor();
        }




    }
});

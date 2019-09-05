import Controller from '@ember/controller';

export default Controller.extend({
    searchComplete: false,
    loading: false,
    noClients: false,

    actions: {
        searchClient(query) {

            Object.entries(query).forEach(([key, value]) => { // Remove the unused email or phone number input value
                if (value.length === 0) {
                    delete query[key];
                }
            });

            let singleClient = this.store.query('client', query);
            this.set('model.clients', singleClient);
            this.set('loading',true);
            
            singleClient.then(() => {
                this.set('searchComplete', true);
                this.set('loading',false);               
            })
            .catch(() => {
                this.set('loading',false);   
                this.set('noClients', true);
            });

        },


    }
});

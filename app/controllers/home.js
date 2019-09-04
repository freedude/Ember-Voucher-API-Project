import Controller from '@ember/controller';

export default Controller.extend({
    searchComplete: false,
    checkEmpty: false,

    actions: {

        searchClient(query) {
            
            Object.entries(query).forEach(([key, value]) => { // Remove the unused email or phone number input value
                if (value.length === 0) {
                    delete query[key];
                }
            });

            let singleClient = this.store.query('client', query);
            this.set('model.clients', singleClient);
            
            singleClient.then(() => {
                this.set('searchComplete', true);               

            })
            .catch(() => {
                // this.set('searchComplete', true)

               
            });

        },

        


    }
});

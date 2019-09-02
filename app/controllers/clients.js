import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    editEvents: service(),
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

            let filteredClients = this.store.query('client', query);
            this.set('model.clients', filteredClients);

            // filteredClients.then(() => {


            // })
        },


    }
});

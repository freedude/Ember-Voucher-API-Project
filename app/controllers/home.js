import Controller from '@ember/controller';

export default Controller.extend({
    searchComplete: false,

    init() {
        this._super(...arguments);
    },

    actions: {

        searchClient(query) {

            Object.entries(query).forEach(([key, value]) => { // dont use the unused search box
                if (value.length === 0) {
                    delete query[key];
                }
            });

            let singleClient = this.store.query('client', query);
            this.set('model.clients', singleClient);
            this.set('searchComplete', true);

        },

        


    }
});

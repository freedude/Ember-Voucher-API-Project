import DS from 'ember-data';
import ENV from 'phorest-techtest-sean-freeman/config/environment';

export default DS.JSONAPIAdapter.extend({
    host: `${ENV.API.baseURL}`,
    namespace: `api/business/${ENV.APP.businessId}`,


    init() {
        this._super(...arguments);

        this.set('headers', {
            'Authorization': `Basic ${btoa(ENV.API.username + ':' + ENV.API.password)}`
        })
    },

    pathForType: function (modelName) {

        return modelName;
    }
});

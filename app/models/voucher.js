import DS from 'ember-data';

export default DS.Model.extend({
    expiryDate: DS.attr('date'),
    issueDate: DS.attr('date'),
    originalBalance: DS.attr('number'),
    serialNumber: DS.attr('string')
});

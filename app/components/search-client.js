import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
    classNames: ['search-client-wrapper'],

    didRender() {
        
        let input =  $('#phone-search').val();
        
        if(input == ""){
            $('#searchButton').addClass("disabled");
        }
       
      },

    actions: {
        // phoneInput() {

        // },

        search() {
            
            let query = {
                email: this.$('#email-search').val(),
                phone: this.$('#phone-search').val()
            };

            this.searchClient(query);
        },

       
    }
});

import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
    classNames: ['search-client-wrapper'],

    actions: {
       
        search() {

            let input =  $('#email-search').val() + $('#phone-search').val();

            let query = {
                email: this.$('#email-search').val(),
                phone: this.$('#phone-search').val()
            };

            if(input == ""){
                $('#searchButton').text("Please enter a value");
                setTimeout(() => {
                    $('#searchButton').text("Search");
                }, 2500);
            } else {
                this.searchClient(query);
            }

        },

       
    }
});

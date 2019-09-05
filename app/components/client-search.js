import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
   
    actions: {
       
        search() {

            let input =  $('#emailSearch').val() + $('#phoneSearch').val();

            let query = {
                email: this.$('#emailSearch').val(),
                phone: this.$('#phoneSearch').val()
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

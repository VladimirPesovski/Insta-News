
$(function() {
   

        $("select").on("change", function() {
            $('.display').empty();
            
            let $selection = $(this).val()
            $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=jGnr0G8J3IgQZ3kmspywu5bYkvAD26Cr`)
            
            .done(function(data) {
               
            let counter = 0
            $.each(data.results, function(key, value) {
            
            if (value.multimedia.length !== 0 && counter < 12) {
            counter ++;
            
            $(".display").append(`<figure><a href ="${value.url}target="_blank"><img src="${value.multimedia[4].url} "/><p>${value.abstract}</p></a></figure>`)
            console.log(value);
            return counter !== 12
            }
    
            });
        });
    });           
})


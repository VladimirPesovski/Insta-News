$(function() {


   

        $("button").on("click", function() {
            $.getJSON('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=jGnr0G8J3IgQZ3kmspywu5bYkvAD26Cr')
            .done(function(data) {
                $.each(data, function(key, value) {
                    console.log(data)








                    
                // $(".results").append(`<p>${value.description}</p>`)
                // $(".results").append(`<img src="https://openweathermap.org/img/wn/${value.icon}@2x.png"/>`)
                // $(".results").append(`<p>${value.id}</p>`)
                // $(".results").append(`<p>${value.main}</p>`)
                
                
                


            });
        });

    });
   








            
})





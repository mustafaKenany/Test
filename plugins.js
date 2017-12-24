$(document).ready(function(){
    // $("#flip").click(function(){
    //     $("#panel").slideToggle("slow");
    // });

    for (i = 0; i < 10; i++)
    { 
         $('#P_bloodtype').append($('<option>',
         {
            value: i,
            text : "Option "+i 
        }));
    };

    alert("hello");
});
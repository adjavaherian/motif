//main.js
'use strict';

//check click
function checkClick(e){

    e.stopPropagation();
    var index = $(this).parent().index();

    $(this).closest('tr').find('td').each(function(k,v){

        if($(v).has('input[type="checkbox"]').length){
//            console.log('kv', k, v);
            if(k <= index){
                $(v).find('input[type="checkbox"]').prop('checked', true);
            }else{
                $(v).find('input[type="checkbox"]').prop('checked', false);
            }
        }
    });

}

function reportLevel(e){

    e.stopPropagation();
//    console.log($(this).parent().find('table tr'));

    $(this).parent().find('table tr').each(function(i, iv){
        var counter = 0;
        var tds = $(iv).find('td');
        tds.each(function(j,jv){
            if($(jv).has('input[type="checkbox"]').length){

                var checkbox = $(jv).find('input[type="checkbox"]');
//                console.log('found cbox ', checkbox, checkbox.attr('checked'));

                if(checkbox.is(':checked')){
                    counter ++;
                }
            }
        });
        console.log($(tds[0]).html() + 'Level : '+counter);
    });

}

$(document).ready(function(){

    $( "<div></div>" )
        .appendTo( "#stage" )
        .motif_checks({
            class: 'table_3',
            rows: ['Value', 'Basis'],
            cols: ['Public', 'Protected', 'Private']
        });

    $( "<div></div>" )
        .appendTo( "#stage" )
        .motif_checks({
            class: 'table_10',
            rows: ['Numbers', 'Letters'],
            cols: ['','','','','','','','','','',]
        });


    //checkbox controls
    $(".motif_checks input[type='checkbox']").change(function(e){

//        console.log('check');

    });


});




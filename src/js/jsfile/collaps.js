$(document).ready(function(){
     /*===== collaps dlock=====*/
                   
                    $('#city_inpt').on('click', function (){
                        $('#city_block').offset({top: 0, left: 0});
                        let top =$(this).offset().top;
                        let left=$(this).offset().left;
                        $('#city_block').offset({top: top+30, left: left});
                        $('#city_block').css('display','block');
                        top=0;
                        left=0;
                    }); 
                    $('#city_inpt').focus(function() {
                        $('#city_block').css('display','block');
                    });
                    // $('#city_inpt').focusout(function() {
                    //     $('#city_block').css('display','none');
                    // });

})
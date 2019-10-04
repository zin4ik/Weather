$(document).ready(function(){
     /*===== collaps dlock=====*/
                    // при клике на элемент с id="mydiv"
                    $('#city_inpt').on('click', function (){
                        $('#city_block').offset({top: 0, left: 0});
                        let top =$(this).offset().top;
                        let left=$(this).offset().left;

                        console.log(top);
                        console.log(left);
                        // изменяем координаты элемента, а имеено увеличиваем их на 50px
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
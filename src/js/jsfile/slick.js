
    console.log('slick');
   function Slick(){ $.each(sliders,function(i,value){
    let line;
    let arrDate=$('.slider');
    let sliders =$('.slider');
    let sliderWidth =$(' #carusel_block').width();
    console.log(sliderWidth +'px');
    console.log(sliders.length);

        if(i<=sliders.length){
            
            line+=+($(value).width());
            
        }
        else
        {false};
        $('#carusel_block').css('width',line+'px')
    })
    
   }

  // 
  // 
  // let sliderWidth =$('#carusel').width();
  // let btnNext=$('#btn_next');
  // let lineWidth =0;
  // let arrWidth=[0];
  // let offset=0;
  // let step=0;
  // let ostatok=0;
  // console.log(sliderWidth +'px');
  // console.log(sliders.length);
  // for (var i = 0; i < sliders.length; i++) {
  //   arrWidth.push(sliders[i].offsetWidth);
  //   lineWidth+=sliders[i].offsetWidth;
    
  // };
  //  console.log(lineWidth);
  // line.style.width=lineWidth+1+'px'; /*задали ширину слайдера*/
  
  // btnNext.onclick = function nextCl() {
    
  //   ostatok=lineWidth-sliderWidth-(offset+arrWidth[step]);

  //   if(ostatok>=0){
  //     offset=offset+arrWidth[step];
  //     line.style.left=-offset+'px';
  //   }
  //   else{
  //     line.style.left=-(lineWidth-sliderWidth)+'px';
  //     offset=0;
  //     step=-1;
  //   }
    
  //   if(step+1==sliders.length){
  //     offset=0;
  //     step=0;
  //   }
  //   else{
  //     step++;
  //   }
  // }

// var line =document.querySelector('#carusel_item');
// var sliders = document.querySelectorAll('.slider');
// var sliderWidth =document.querySelector('#carusel').offsetWidth;
// var btnNext=document.querySelector('#btn_next');
// var lineWidth =0;
// var arrWidth=[0];
// var offset=0;
// var step=0;
// var ostatok=0;

// for (var i = 0; i < sliders.length; i++) {
// 	arrWidth.push(sliders[i].offsetWidth);
// 	lineWidth+=sliders[i].offsetWidth;
// };

// line.style.width=lineWidth+1+'px'; /*задали ширину слайдера*/

// btnNext.onclick = function nextCl() {
	
// 	ostatok=lineWidth-sliderWidth-(offset+arrWidth[step]);
// 	if(ostatok>=0){
// 		offset=offset+arrWidth[step];
// 		line.style.left=-offset+'px';
// 	}
// 	else{
// 		line.style.left=-(lineWidth-sliderWidth)+'px';
// 		offset=0;
// 		step=-1;
// 	}
	
// 	if(step+1==sliders.length){
// 		offset=0;
// 		step=0;
// 	}
// 	else{
// 		step++;
// 	}
// }
// console.log(sliderWidth);
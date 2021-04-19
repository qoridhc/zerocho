var left = 0;

//  setInterval(function 함수(){
//      if(left === 0){
//          left = '-133px'; 
//      }else if(left === '-133px'){
//          left = '-290px';
//        }else{
//         left = 0;
//        }
//      document.querySelector('#computer').style.background = 'url("gbb.GIF")' + left + 0;
//     }, 100);

// setInterval(() => {
//     if (left === 0) {
//         left = '-133px';
//     } else if (left === '-133px') {
//         left = '-290px';
//     } else {
//         left = 0;
//     }
//     console.log(left);
//     document.getElementById('computer').style.backgroundPosition = left + '0';


// }, 100);

setInterval(() => {
         if (left === 0) {
             left = '-133px';
         } else if (left === '-133px') {
             left = '-288px';
         } else {
             left = 0;
         }
    
    document.getElementById('computer').style.backgroundPosition = left;
    console.log(left);
     }, 200);
    
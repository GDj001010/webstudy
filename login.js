var idPass = false;

// keyup 
 $('#id').on('keyup', function(){
     // 아이디 입력란에 입력된 값 : $(this).val() == this.value
     let idValue = $(this).val();
     if(idValue.length == 0){
         $('#msg_id').text('');
         idPass = false;
     } else if(idValue.length < 4){
         $('#msg_id').text('아이디는 4자 이상입니다.').css('color', '#FF0000').css('font-size', '14px');
         idPass = false;
     } else {
         $('#msg_id').text('정상적인 아이디입니다.').css('color', '#0000FF').css('font-size', '14px');
         idPass = true;
     }
     // idPass = idValue.length >= 4;
 });

 $('#frm_login').on('submit', function(ev){
     if(idPass == false){
         alert('아이디를 확인하세요');
         ev.preventDefault();    // 이벤트 포기
         return;
     }
     if($('#pw').val() == ''){
         alert('비밀번호를 입력하세요.');
         ev.preventDefault();
         return;
     }
   
     
 });
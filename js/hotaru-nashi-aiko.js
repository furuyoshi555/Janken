$(document).ready(function(){
    $(".right-gu").hide();
    $(".right-choki").hide();
    $(".right-pa").hide();
    $(".left-gu").hide();
    $(".left-choki").hide();
    $(".left-pa").hide();
    $('.fire-fly').hide();
    $('.hantei').hide();
    $('#hansoku').hide();
    $('#fukidashi-2').hide();
    $('.komento-2').hide();
// トップの吹き出し

setTimeout(function(){
    $(".top-word").html("こ〜で!!");
},1000);



// じゃんけんランダム（蛍あり）

// ぐー

$('#gu_btn').on('click',function(){
    const num = Math.floor(Math.random() * 100);
    if(num < 100 && num >= 70){
        $(".right-gu").show();
        $('.left-pa').show();     
        $('.hantei').show();
        $('.hantei').html('負け');
        $('#fukidashi').hide();
        $('.komento-2').show();
        $('.komento-2').html("ジャンケンにも負けて、蛍も失ったね・・・");
        $("#janken-panel").hide();
        $("#janken-panel").hide();
    } 
    
    if(num < 70 && num >= 40){
        $(".right-gu").show();
        $('.left-gu').show();        
        $('#fukidashi').show();
        $('.top-word').html("！？");
        $("#janken-panel").hide();
        setTimeout(function(){
        window.location.href = 'hotaru-nashi-aiko.html';
    }, 2000);
    }  


    if(num < 40 ){
        $(".right-gu").show();
        $('.left-choki').show();
        $('.hantei').show();            
        $('#fukidashi').hide();
        $('.komento-2').show();
        $("#janken-panel").hide();
    } 
});

// チョキ

$('#cho_btn').on('click',function(){
    const num = Math.floor(Math.random() * 100);

//相手パー

    if(num < 100 && num >= 70){
        $(".right-choki").show();
        $('.left-pa').show();
        $('.hantei').show();
        $('#fukidashi').hide();
        $('.komento-2').show();
        $("#janken-panel").hide();　　　　　　　
        }

//チョキのアイコ


    if(num < 70 && num >= 40){
        $(".right-choki").show();
        $('.left-choki').show();
        $('.top-word').html("！？");
        $("#janken-panel").hide();
        setTimeout(function(){
        window.location.href = 'hotaru-nashi-aiko.html';
    }, 2000);
        }

    


// 自分がチョキ　相手がぐー


    if(num < 40 ){
        $(".right-choki").show();
        $('.left-gu').show();
        $('.hantei').show();
        $('.hantei').html('負け');
        $('#fukidashi').hide();
        $("#janken-panel").hide();
        $('.komento-2').show(); 
        $('.komento-2').html("ジャンケンにも負けて、蛍も失ったね・・・"); 
        }
});






// パー

$('#par_btn').on('click',function(){
    const num = Math.floor(Math.random() * 100);


//相手がぐー　自分がパー

    if(num < 100 && num >= 70){
        $(".right-pa").show();
        $('.left-gu').show();
        $('.hantei').show();
        $('#fukidashi').hide();
        $('.komento-2').show();
        $("#janken-panel").hide(); 
    } 




//パーのアイコ
    if(num < 70 && num >= 40){
        $(".right-pa").show();
        $('.left-pa').show();
        $('.top-word').html('！？');         
        $('#fukidashi').hide();
        $("#janken-panel").hide();
        setTimeout(function(){
        window.location.href = 'hotaru-nashi-aiko.html';
    }, 2000);
    } 




//相手チョキ　自分パー
    if(num < 40 ){
        $(".right-pa").show();
        $('.left-choki').show();
        $('.hantei').show();
        $('.hantei').html('負け');
        $('#fukidashi').hide();
        $('.komento-2').show();
        $('.komento-2').html("ジャンケンにも負けて、蛍も失ったたね・・・");
        $("#janken-panel").hide();
    } 
});
});
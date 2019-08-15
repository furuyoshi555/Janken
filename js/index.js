$(document).ready(function(){
    $(".a").hide();
    $(".b").hide();
    $(".c").hide();
    $(".d").hide();
    $(".e").hide();

    setTimeout(function(){
    $(".a").show();
},2000);

    setTimeout(function(){
    $(".a").hide();
},4000);

    setTimeout(function(){
    $(".a").show();
    $(".a").html("やったー！<br>捕まえたぞ！");
    $(".a").css({"top":"42%","left":"42%"});
},6000);

    setTimeout(function(){
    $(".a").hide();
},8000);

    setTimeout(function(){
    $(".b").show();
},10000);

    setTimeout(function(){
    $(".b").hide();
},12000);

    setTimeout(function(){
    $(".a").show();
    $(".a").html("ジャ、ジャイアン！？");
},11000);

  setTimeout(function(){
    $(".b").show();
    $(".b").html("・・・・・");
},14000);

  setTimeout(function(){
    $(".a").html("、、、、何？");
},16000);

    setTimeout(function(){
    $(".b").html("ジャンケンしようぜっ!!");
},17000);


    setTimeout(function(){
    $(".a").hide();
    $(".c").show();
},17500);


    setTimeout(function(){
    $(".b").hide();
    $(".c").hide();
    $(".d").show();
},21000);

 setTimeout(function(){
    $(".e").show();
},22000);

 setTimeout(function(){
    window.location.href = 'janken.html';
},25000);









});
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
    $(".top-word").html("け〜ん!!");
},1000);




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
        $('.komento-2').html("でも、蛍は守れたね。");
        $("#janken-panel").hide();
        $("#janken-panel").hide();
    } 
    
    if(num < 70 && num >= 40){
        $(".right-gu").show();
        $('.left-gu').show();        //蛍ありアイコ
        $('#fukidashi').show();
        $('.top-word').html("！？");
        $("#janken-panel").hide();
        setTimeout(function(){
        window.location.href = 'hotaru-aiko.html';
    }, 2000);
    }  


    if(num < 40 ){
        $(".right-gu").show();
        $('.left-choki').show();
        $('.hantei').show();            
        $('#fukidashi').hide();
        $('.komento-2').show();
        $('.komento-2').html("ジャンケンにも勝って、蛍も守れたね!!!");
        $(".nobita").attr("src","images/nobita-2.png");
        $(".jaian").attr("src","images/jaian-1.jpg");
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
        $('#fukidashi-2').show();
        $("#janken-panel").hide();　　　　　　　//OK

        // 蛍出現
        $('.fire-fly').show(function(){
            function move(){
                //0～90の乱数
                $(".fire-fly").animate({
                    'top': Math.round( Math.random()*90 ) + "%",
                    'left': Math.round( Math.random()*90 ) + "%"
                },1000);
            }
            setInterval(function(){move()}, 500);

        });
        $(function(){
            $(".fire-fly").click(function(){
                $(this).data("click", true);
            });
        });
          setTimeout(function(){
            if(!$(".fire-fly").data("click")){  //５秒以内にクリックできなかった
                $(".hantei").show();
                $(".komento-2").show();
                $(".komento-2").html("でも、蛍を失ったね・・");
                $("#fukidashi-2").hide();
            }else{
                $(".right-choki").hide();　　　　//５秒以内にクリックできた
                $(".right-gu").show();
                $("#fukidashi").show();
                $(".top-word").html("！？");
                setTimeout(function(){
                    $(".komento-2").show();
                    $(".hantei").show();
                    $(".hantei").html("負け");
                    $("#fukidashi-2").hide();
                    $(".fire-fly").hide();
                },1000);
            }
        }, 5000);   
        }






//チョキのアイコ


    if(num < 70 && num >= 40){
        $(".right-choki").show();
        $('.left-choki').show();
        $('#fukidashi').hide();
        $('#fukidashi-2').show();
        $("#janken-panel").hide();
        $('.fire-fly').show(function(){
            function move(){
                //0～90の乱数
                $(".fire-fly").animate({
                    'top': Math.round( Math.random()*90 ) + "%",
                    'left': Math.round( Math.random()*90 ) + "%"
                },1000);
            }
            setInterval(function(){move()}, 500);

        });
        $(function(){
            $(".fire-fly").click(function(){
                $(this).data("click", true);
            });
        });
        setTimeout(function(){
            if(!$(".fire-fly").data("click")){  //５秒以内にクリックできなかった
                $('#fukidashi-2').hide();  
                $('#fukidashi').show(); 
                $('.top-word').html("蛍が〜・・");         //蛍なしアイコ
                setTimeout(function(){
                    window.location.href = 'hotaru-nashi-aiko.html';
                }, 2000);
     

            }else{　　　　　　　　　　　　　　　　　　//５秒以内にクリックできた、
                $(".right-choki").hide();　　　　　　//殴られる
                $(".right-gu").show();　
                $("#fukidashi-2").hide();
                $("#fukidashi").show();
                $(".top-word").html("やった！捕まえ・・");
                $(".top-word").css({"font-size":"60px"});
                $(".fire-fly").hide();
                setTimeout(function(){
                    $("#hansoku").show();
                    $("#fukidashi-2").show();
                    $(".top-word-2").html("ズルしてんじゃね〜っ!!");
                    $("#fukidashi-2").css({"top":"11%","left":"19%"});
                    $("#fukidashi").hide(); 
                    $(".komento-2").show();
                    $('.left-choki').hide();
                    $('.nobita').hide();
                    $('.hantei').hide();
                },1500);
            }
        }, 5000);   
        }

    


// 自分がチョキ　相手がぐー


    if(num < 40 ){
        $(".right-choki").show();
        $("#fukidashi-2").show();
        $('.left-gu').show();
        $('.hantei').show();
        $('.hantei').html('負け');
        $('#fukidashi').hide();
        $("#janken-panel").hide();
        $('.fire-fly').show(function(){
            function move(){
                //0～90の乱数
                $(".fire-fly").animate({
                    'top': Math.round( Math.random()*90 ) + "%",
                    'left': Math.round( Math.random()*90 ) + "%"
                },1000);
            }
            setInterval(function(){move()}, 500);

        });
        $(function(){
            $(".fire-fly").click(function(){
                $(this).data("click", true);
            });
        });
        setTimeout(function(){
            if(!$(".fire-fly").data("click")){  //５秒以内にクリックできなかった
                $(".hantei").show();
                $(".hantei").html("負け!!");
                $(".komento-2").show();         
                $(".komento-2").html("ジャンケンにも負けて、蛍も失ったね・・・");
                $("#fukidashi-2").hide();
           }else{　　　　　　　　　　　　　　　　　　//５秒以内にクリックできた、
                $(".right-choki").hide();　　　　　　//殴られる
                $(".right-gu").show();　
                $("#fukidashi-2").hide();
                $("#fukidashi").show();
                $(".top-word").html("やった！捕まえ・・");
                $(".top-word").css({"font-size":"60px"});
                $(".fire-fly").hide();
                setTimeout(function(){
                    $("#hansoku").show();
                    $("#fukidashi-2").show();
                    $(".top-word-2").html("ズルしてんじゃね〜っ!!");
                    $("#fukidashi-2").css({"top":"11%","left":"19%"});
                    $("#fukidashi").hide(); 
                    $(".komento-2").show();
                    $('.left-choki').hide();
                    $('.nobita').hide();
                    $('.hantei').hide();
                },1500);
            }
        }, 5000);   
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
        $('#fukidashi-2').show();
        $("#janken-panel").hide();
        $('.fire-fly').show(function(){
            function move(){
                //0～90の乱数
                $(".fire-fly").animate({
                    'top': Math.round( Math.random()*90 ) + "%",
                    'left': Math.round( Math.random()*90 ) + "%"
                },1000);
            }
            setInterval(function(){move()}, 500);

        });
        $(function(){
            $(".fire-fly").click(function(){
                $(this).data("click", true);
            });
        });
        setTimeout(function(){
            if(!$(".fire-fly").data("click")){  //５秒以内にクリックできなかった
                $(".hantei").show();
                $(".komento-2").show();         //
                $(".komento-2").html("でも、蛍を失ったね・・");
                $("#fukidashi-2").hide();
            }else{　　　　　　　　　　　　　　　　　　//５秒以内にクリックできた、
                $(".right-pa").hide();　
                $(".right-gu").show();　　　//蛍ありアイコ
                $('#fukidashi').show();
                $(".top-word").html("！？")
                $('#fukidashi-2').hide();
                $('.hantei').hide();     //
                setTimeout(function(){
                window.location.href = 'hotaru-aiko.html';
            }, 2000);
            }
        }, 5000);   
    } 




//パーのアイコ
    if(num < 70 && num >= 40){
        $(".right-pa").show();
        $('.left-pa').show();
        $('.top-word').html('！？');
        $('#fukidashi-2').show();          //OK
        $('#fukidashi').hide();
        $("#janken-panel").hide();
        $('.fire-fly').show(function(){
            function move(){
                //0～90の乱数
                $(".fire-fly").animate({
                    'top': Math.round( Math.random()*90 ) + "%",
                    'left': Math.round( Math.random()*90 ) + "%"
                },1000);
            }
            setInterval(function(){move()}, 500);

        });
        $(function(){
            $(".fire-fly").click(function(){
                $(this).data("click", true);
            });
        });
        setTimeout(function(){
            if(!$(".fire-fly").data("click")){  //５秒以内にクリックできなかった
                $('#fukidashi-2').hide();  
                $('#fukidashi').show(); 
                $('.top-word').html("蛍が〜・・");          //蛍なしアイコ
                setTimeout(function(){
                    window.location.href = 'hotaru-nashi-aiko.html';
                }, 2000);
            }else{　　　　　　　　　　　　　　　　　　//５秒以内にクリックできた、
                $(".right-pa").hide();
                $(".right-gu").show();　　　//負け
                $("#fukidashi").show();
                $(".top-word").html("！？");
                setTimeout(function(){
                    $(".komento-2").show();
                    $(".hantei").show();
                    $(".hantei").html("負け");
                    $("#fukidashi-2").hide();
                    $(".fire-fly").hide();
                },1000);
            }
        }, 5000);   
    } 




//相手チョキ　自分パー
    if(num < 40 ){
        $(".right-pa").show();
        $('.left-choki').show();
        $('.hantei').show();
        $('.hantei').html('負け');
        $('#fukidashi').hide();
        $('#fukidashi-2').show();
        $("#janken-panel").hide();
        $('.fire-fly').show(function(){
            function move(){
                //0～90の乱数
                $(".fire-fly").animate({
                    'top': Math.round( Math.random()*90 ) + "%",
                    'left': Math.round( Math.random()*90 ) + "%"
                },1000);
            }
            setInterval(function(){move()}, 500);

        });
        $(function(){
            $(".fire-fly").click(function(){
                $(this).data("click", true);
            });
        });
        setTimeout(function(){
            if(!$(".fire-fly").data("click")){  //５秒以内にクリックできなかった
                $(".hantei").show();
                $(".hantei").html("負け");
                $(".komento-2").show();        //
                $(".komento-2").html("ジャンケンにも負けて、蛍も失ったね・・・");
                $("#fukidashi-2").hide();
            }else{　　　　　　　　　　　　　　　　　　//５秒以内にクリックできた、
                $(".right-pa").hide();　　　　　　//殴られる
                $(".right-gu").show();　
                $("#fukidashi-2").hide();
                $("#fukidashi").show();
                $(".top-word").html("やった！捕まえ・・");
                 $(".top-word").css({"font-size":"60px"});
                $(".fire-fly").hide();
                setTimeout(function(){
                    $("#hansoku").show();
                    $("#fukidashi-2").show();
                    $(".top-word-2").html("ズルしてんじゃね〜っ!!");
                    $("#fukidashi-2").css({"top":"11%","left":"19%"});
                    $("#fukidashi").hide(); 
                    $(".komento-2").show();
                    $('.left-choki').hide();
                    $('.nobita').hide();
                    $('.hantei').hide();
                },1500);
            }
        }, 5000);  
    } 
});

});


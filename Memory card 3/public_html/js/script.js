$(document).ready(function () {

    var $listCard = $('.clr');

    var arr = [1, 2, 3, 4, 5, 6];
    var total = arr.length;

    var arr1 = convertPositionArray(total, arr);

    var arr3 = arr1;

    for (var i = 0; i < arr1.length; i++) {
        var str = '';

        str += '<div class="card">';
        str += '<div class="backside">';
        str += '<img src="images/0000.jpg" />';
        str += '</div>';
        str += '<div class="front">';
        str += '<img src="images/' + arr1[i] + '.jpg" />';
        str += '</div>';
        str += '</div>';

        $listCard.append(str);

    }

    var arr2 = convertPositionArray(total, arr3);

    for (var i = 0; i < arr2.length; i++) {
        var str = '';

        str += '<div class="card">';
        str += '<div class="backside">';
        str += '<img src="images/0000.jpg" />';
        str += '</div>';
        str += '<div class="front">';
        str += '<img src="images/' + arr2[i] + '.jpg" />';
        str += '</div>';
        str += '</div>';

        $listCard.append(str);

    }

    function convertPositionArray(count, convert_array) {
        var arr_change = [];
        arr_change = convert_array;

        var arr_temp_push = [];

        for (var i = 0; i < count; i++) {
            var key = Math.floor(Math.random() * arr_change.length);
            arr_temp_push.push(arr_change[key]);
            arr_change.splice(key, 1);
        }

        return arr_temp_push;
    }
    var solanbam = 0;
    var click1;
    var click2;
    var clicked = 20;
    var thoigian = 30;
    var point = $('.card.active').length / 2;
    var msg = 'Điểm của bạn là : ' + point + ' Vui lòng bấm <a href="#" onclick="window.location.reload();">vào đây</a> để chơi lại.';
                
    
    var run = setInterval(function(){
        thoigian--;
        var timer = thoigian + ' giây';
        $('span#mycounter').html(timer);
        if (thoigian==0){
            clearInterval(run);
            $('.title > span').html(msg);
            alert('hết giờ');
        }
    },1000);


    $('audio')[0].play();
    $('audio')[0].volume = 0.4;


    $('.card').click(function () {

        if (clicked == 1) {
            $(document).ready(function () {
                $('audio')[2].play();
                $('audio')[0].pause();
            });

        } else if (clicked >= 0) {

            if (!$(this).hasClass('show')) {
                $(this).addClass('show');
                clicked--;
                $('.message').html('' + clicked);
                if (solanbam <= 2) {
                    solanbam++;
                    if (solanbam == 1) {
                        click1 = $(this).find('.front img').attr('src');
                        $(document).ready(function () {
                            $('audio')[1].play();
                            $('audio')[1].volume = 0.8;
                        });
                    }
                    if (solanbam == 2) {
                        click2 = $(this).find('.front img').attr('src');
                        $(document).ready(function () {
                            $('audio')[1].play();
                        });
                        console.log(click1 + ' - ' + click2);
                        if (click1 == click2) {
                            if ($('.card').hasClass('show')) {
                                $('.card.show').addClass('active');
                            }
                            $('.show').css('opacity', '0');
                            $('.background').each(function () {
                                $('.image-dung').css('display', 'block');
                            });
                            solanbam = 0;
                            $('audio')[3].play();
                            setTimeout(function () {

                                $('.background').each(function () {
                                    $('.image-dung').css('display', 'none');
                                });

                            }, 2000);

                        } else if (click1 != click2) {
                            $('audio')[4].play();
                            $('.background').each(function () {
                                $('.image-sai').css('display', 'block');
                            });

                            setTimeout(function () {
                                $('.card').removeClass('show');

                                $('.card').each(function () {
                                    if ($(this).hasClass('active')) {
                                        $(this).addClass('show');
                                    }
                                });

                                solanbam = 0;

                                if (solanbam == 0) {
                                    $('.background').each(function () {
                                        $('.image-sai').css('display', 'none');
                                    });
                                }
                            }, 2000);

                        }

                    }

                }
            }
        }
    });

});


    
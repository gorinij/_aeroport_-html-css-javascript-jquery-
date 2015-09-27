/** Обработчики
 *
 */
$(document).ready(function (){
    /** Обработчики группы кнопок "Поиск рейса"
    *
    **/
    $('#search_reis_button').on('click', function() {
        $('.s_options').show();
        $('.check_aero, .cities, #calendar_content, .calendar_content>.content_2, .calendar_arrow').hide();
        $('.content.calendar_content').css('background', '0');
        $('.content_wrapper_2').css({'margin-top': '-606px'});
        $('.calendar_top').css('margin-top', '0');
    });
    $('.choose_reis').on('click', function() {
        $('#flyParent').show();
    });
    $('.done').on('click', function() {
        $('#pay').show();
    });
    $('#calendar_change').click(function() {
        $('.check_aero, .cities, #calendar_content, .calendar_content>.content_2, .calendar_arrow').show();
        $('.content.calendar_content').css('background', 'white');
        $('.content_wrapper_2').css({'margin-top': '0'});
        $('.s_options, #flyParent, #pay').hide();
        $('.calendar_top').css('margin-top', '-20px');
    });
    /** Обработчики перемотки календаря
     *
     */
    //$()
});


$(document).ready(function () {
//	$("#srch").click(function () {
//		$(".s_options").fadeIn();
//	});


// var dt = new Date('2010-06-15');

// undefined
// dt.getDate()
// 15
// dt.getMonth()
// 5
// dt.getFullYear()
// 2010

    var person = [
        [],
        [false, ["Светлана", "Макунян", "Вальеревна"], "1960-5-10", ["pass-rf", "820614672"], ['Макуян Светлана Вальеревна', '89880088998', 'makuyansven@yandex.ru']],
        [true, ["Иван", "Иванов", "Иванович"], "1970-1-10", ["pass-rf", "8208914672"], ['Иванов Иван Иванович', '84756655544', 'ivaninvainvan@mail.ru']],
        [false, ["Елена", "Василевская", "Александровна"], "1963-8-16", ["pass-rf", "8670614672"], ['Василевская Елена Александровна', '8455221154', 'vasilena@yahoo.com']],
        [false, ["Екатерина", "Ефимовых", "Павловна"], "1950-5-13", ["pass-rf", "660614672"], ['Ефимовых Дмитрий Павлович', '89882956597', 'sluttishfey@mail.ru']]
    ];

    function personDescription(ID)
    {
        if (person[ID][0])
        {
            $('select[name="obrash"]>option:eq(1)').attr('selected', 'selected');
        }
        else
        {
            $('select[name="obrash"]>option:eq(2)').attr('selected', 'selected');
        }
        $('input[name="lastName"]').val(person[ID][1][0]);
        $('input[name="firstName"]').val(person[ID][1][1]);
        $('input[name="parentName"]').val(person[ID][1][2]);
        var date = new Date(person[ID][2]);
        $('select[name="birthDay"]>option:eq('+date.getDate()+')').attr('selected', 'selected');
        $('select[name="birthMonth"]>option:eq('+parseInt(date.getMonth()+1)+')').attr('selected', 'selected');
        $('select[name="birthYear"]>option:contains('+date.getYear()+')').attr('selected', 'selected');
        $('input[name="docNum"]').val(person[ID][3][1]);
        $('input[name="contactFace"]').val(person[ID][4][0]);
        $('input[name="contactPhone"]').val(person[ID][4][1]);
        $('input[name="contactEmail"]').val(person[ID][4][2]);
    }


    //$(".choose_reis").click(function() {
    //$("#flyParent").fadeIn();
    //});

    //$(".done").click(function () {
    //$("#pay").fadeIn();
    //});

    //$('').hide();

    //$('.search_reis').click(function()	{
    //    $('.s_options').show();
    //});
    //
    //$('.choose_reis').click(function()	{
    //    $('#flyParent').show();
    //});
    //
    //$('.done').click(function()	{
    //    $('#pay').show();
    //});


    /*09.04.15:Wednesday.April*/
    $("input[type='radio']").click(function()
    {
        var selected_passanger = $(this).attr('value');
        //console.log(selected_passanger);
        if (selected_passanger)
        {
            switch (selected_passanger)
            {
                case 't_1':
                    personDescription(1);
                    break;
                case 't_2':
                    personDescription(2);
                    break;
                case 't_3':
                    personDescription(3);
                    break;
                case 't_4':
                    personDescription(4);
                    break;
                case 't_5':
                    personDescription(5);
                    break;
                case 't_6':
                    personDescription(6);
                    break;
            }
        }
    });



});

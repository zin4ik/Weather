
const moment = require("moment");

moment.locale('ua');

$(document).ready(function () {

    $.get(
        "http://api.openweathermap.org/data/2.5/forecast?",
        // "http://api.openweathermap.org/data/2.5/weather?",
        {
            // id:"707860",
            lat: "49,0850",
            lon: "34,1157",

            appid: "32e8821013bcd7e0a7418bdd28589135"
        },
        function (data) {

            /*========добавляємо блок з датой і таблицю з даними======*/
            function AddDates(date, strDate, index) {
                let dates__item = `<button type="button" class="date dates__item${date}" value="${index}">${strDate}</button>`

                $('.weather__list').append(dates__item);
            }
            function AddTable(date) {


                $('.tables__weather').append(`<tbody class="tdody${date} slider">
                <tr class="time">
                  <th></th>  
                </tr>
                <tr class="sky">
                  <td></td>              
                </tr>
                <tr class="temp">
                    <td></td>
                </tr>
                <tr class="pressure">
                    <td></td>
                </tr>
                <tr class="humidity">
                    <td></td>
                </tr>
                <tr class="wind">
                    <td></td>
                </tr>
              </tbody>`);

            }

            function TableIns(date, dateOn, i) {

                $(`.tdody${date} .time`).append('<th>' + dateOn.slice(10, -3) + '</th>');

                $(`.tdody${date} .sky`).append('<td><img src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png"></td>');
                $(`.tdody${date} .temp`).append('<td>' + Math.round(data.list[i].main.temp - 273) + '&#176;C</td>')

                $(`.tdody${date} .wind`).append('<td>' + data.list[i].wind.speed + ' м/с</td>');
                $(`.tdody${date} .humidity`).append('<td>' + data.list[i].main.humidity + '%.</td>');

                $(`.tdody${date} .pressure`).append('<td>' + Math.round(data.list[i].main.pressure / 1.33).toFixed(0) + ' мм рт.ст.</td>');
            }
            /*===/AddDates(date)===*/

            let outList = '';
            // outList += 'Погода в ' + data.city.name +'<br>на: '+dataOn.slice(10,-3)+ '<br>';
            let toDay = moment();
            let day1 = moment().add(1, 'days').format('DD');
            let day2 = moment().add(2, 'days').format('DD');
            let day3 = moment().add(3, 'days').format('DD');
            let day4 = moment().add(4, 'days').format('DD');

            var indx = 0;
            for (let i = 0; i <= data.list.length - 1; i++) {
                let dateOn = data.list[i].dt_txt;
                let gDate = (data.list[i].dt_txt).slice(8, 10)
                if (toDay.format('DD') == gDate) {

                    if ($(`.dates__item${toDay.format('DD')}`).length === 0) {
                        AddDates(toDay.format('DD'), dateOn.slice(0, -8), indx);
                        indx++;
                        AddTable(gDate);
                        TableIns(gDate, dateOn, i);

                    }
                    else {
                        TableIns(gDate, dateOn, i);
                    }

                }

                if (day1 == gDate) {
                    if ($(`.dates__item${day1}`).length === 0) {
                        AddDates(day1, dateOn.slice(0, -8), indx);
                        AddTable(gDate);
                        TableIns(gDate, dateOn, i);
                        indx++;
                    }
                    else {
                        TableIns(gDate, dateOn, i);
                    }

                }
                if (day2 == gDate) {
                    if ($(`.dates__item${day2}`).length === 0) {
                        AddDates(day2, dateOn.slice(0, -8), indx);
                        AddTable(gDate);
                        TableIns(gDate, dateOn, i);
                        indx++;
                    }
                    else {

                        TableIns(gDate, dateOn, i);
                    }

                }
                if (day3 == gDate) {
                    if ($(`.dates__item${day3}`).length === 0) {
                        AddDates(day3, dateOn.slice(0, -8), indx);
                        AddTable(gDate);
                        TableIns(gDate, dateOn, i);
                        indx++;
                    }
                    else {

                        TableIns(gDate, dateOn, i);
                    }

                }
                if (day4 == gDate) {
                    if ($(`.dates__item${day4}`).length === 0) {
                        AddDates(day4, dateOn.slice(0, -8), indx);
                        AddTable(gDate);
                        TableIns(gDate, dateOn, i);

                    }
                    else {
                        TableIns(gDate, dateOn, i);
                    }
                }


            }
            console.log(data);
            $('#weather').html(outList);
            $('#carusel_block').css('width', '4000px')

            WidthCarusel();

            $('.date').on('click', function () {
                let arrDate = $('.slider');
                let inx = $(this).val();
                let step = 0;
                console.log(inx);
                $.each(arrDate, function (i, value) {
                    if (i < inx) {
                        step += +($(value).width());
                        console.log($(value).width());
                        console.log(i + '-' + step);
                    }
                    else { false; }

                })
                $('#carusel_block').css('left','-'+step+'px');
            });
        })


    /*====carusel Width======*/
    function WidthCarusel() {
        let arrDate = $('.slider');
        let inx = $('.slider').length;
        let widthStep=5;
        $.each(arrDate, function (i, value) {
            if (i <= inx) {
                widthStep += +($(value).width());
                console.log($(value).width());
                console.log(i + '-' + widthStep);
            }
            else {
                false;
            }
        })
        $('#carusel_block').css('width', widthStep + 'px')
        console.log(widthStep + 'px');
    };
    /*https://samples.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22*/

    /*api.openweathermap.org/data/2.5/weather?q=London,uk    ---погода на сейчас*/


    // let idUserWeater1 ='32e8821013bcd7e0a7418bdd28589135';
    // let httpWeater1  = 'https://home.openweathermap.org/';

    // let idUserWeater2 ='';
    // let httpWeater2  = '';
})


const moment = require("moment");
moment.locale('uk');

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
   window.DataDay=function (data) {

            /*========добавляємо блок з датой і таблицю з даними======*/
            window.AddDates=function (date, strDate, index) {
                let dates__item = `<button type="button" class="date dates__item${date}" value="${index}">${strDate}</button>`

                $('.weather__list').append(dates__item);
            }
            window.AddTable=function (date,dayDate) {
                $('.tables__weather').append(`<tbody class="tdody${date} slider">
                <tr style="text-align:center">
                <th colspan="8" class=headTable">${dayDate}</th>
               </tr>
                <tr class="time">  
                </tr>
                <tr class="sky">              
                </tr>
                <tr class="temp">
                </tr>
                <tr class="pressure">
                </tr>
                <tr class="humidity">
                </tr>
                <tr class="wind">
                </tr>
              </tbody>`);

            }

           window.TableIns=function (date, dateOn, i,getData) {
                $(`.tdody${date} .time`).append('<th>' + dateOn.slice(10, -3) + '</th>');

                $(`.tdody${date} .sky`).append('<td><img src="http://openweathermap.org/img/w/' + getData.list[i].weather[0].icon + '.png"></td>');
                $(`.tdody${date} .temp`).append('<td>' + Math.round(getData.list[i].main.temp - 273) + '&#176;C</td>')

                $(`.tdody${date} .wind`).append('<td>' + getData.list[i].wind.speed + ' </td>');
                $(`.tdody${date} .humidity`).append('<td>' + getData.list[i].main.humidity + '%.</td>');

                $(`.tdody${date} .pressure`).append('<td>' + Math.round(getData.list[i].main.pressure / 1.33).toFixed(0) + '</td>');
            }
            /*===/AddDates(date)===*/

            let outList = '';
            $('.cityName').text('Погода в ' + data.city.name);
            let toDay = moment().locale('uk');
            let day1 = moment().add(1, 'days');
            let day2 = moment().add(2, 'days');
            let day3 = moment().add(3, 'days');
            let day4 = moment().add(4, 'days');

            var indx = 0;
            for (let i = 0; i <= data.list.length - 1; i++) {
                let dateOn = data.list[i].dt_txt;
                let gDate = (data.list[i].dt_txt).slice(8, 10)
                if (toDay.format('DD') == gDate) {

                    if ($(`.dates__item${toDay.format('DD')}`).length === 0) {
                        AddDates(toDay.format('DD'), dateOn.slice(0, -8), indx);
                        indx++;
                        AddTable(gDate,toDay.format('DD/M'));
                        TableIns(gDate, dateOn, i,data);

                    }
                    else {
                        TableIns(gDate, dateOn, i,data);
                    }

                }

                if (day1.format('DD') == gDate) {
                    if ($(`.dates__item${day1.format('DD')}`).length === 0) {
                        AddDates(day1.format('DD'), dateOn.slice(0, -8), indx);
                        AddTable(gDate,day1.format('DD/M'));
                        TableIns(gDate, dateOn, i,data);
                        indx++;
                    }
                    else {
                        TableIns(gDate, dateOn, i,data);
                    }

                }
                if (day2.format('DD') == gDate) {
                    if ($(`.dates__item${day2.format('DD')}`).length === 0) {
                        AddDates(day2.format('DD'), dateOn.slice(0, -8), indx);
                        AddTable(gDate,day2.format('DD/M'));
                        TableIns(gDate, dateOn, i,data);
                        indx++;
                    }
                    else {

                        TableIns(gDate, dateOn, i,data);
                    }

                }
                if (day3.format('DD') == gDate) {
                    if ($(`.dates__item${day3.format('DD')}`).length === 0) {
                        AddDates(day3.format('DD'), dateOn.slice(0, -8), indx);
                        AddTable(gDate,day3.format('DD/M'));
                        TableIns(gDate, dateOn, i,data);
                        indx++;
                    }
                    else {

                        TableIns(gDate, dateOn, i,data);
                    }

                }
                if (day4.format('DD') == gDate) {
                    if ($(`.dates__item${day4.format('DD')}`).length === 0) {
                        AddDates(day4.format('DD'), dateOn.slice(0, -8), indx);
                        AddTable(gDate,day4.format('DD/M'));
                        TableIns(gDate, dateOn, i,data);

                    }
                    else {
                        TableIns(gDate, dateOn, i,data);
                    }
                }


            }
            console.log(data);
            $('#weather').html(outList);
            $('#carusel_block').css('width', '4500px')

            
/*=====func.slider on click=====*/
            $('.date').on('click', function () {
                console.log('click')
                let arrDate = $('.slider');
                let inx = $(this).val();
                let step = 0;
                $.each(arrDate, function (i, value) {
                    if (i < inx) {
                        step += +($(value).width());
                    }
                    else { false; }
                WidthCarusel();
                })
                $('#carusel_block').css('left','-'+step+'px');
            });
             
        })

           
/*====carusel Width======*/
    function WidthCarusel() {
        let arrDate = $('.slider');
        let inx = $('.slider').length;
        let widthStep=30;
        $.each(arrDate, function (i, value) {
            if (i <= inx) {
                widthStep += +($(value).width());
                // console.log($(value).width());
                // console.log(i + '-' + widthStep);
            }
            else {
                false;
            }
        })
        $('#carusel_block').css('width', widthStep + 'px')
        console.log(widthStep + 'px');
    };

})


const moment = require("moment");
moment.locale('uk');

jQuery(document).ready(function ($) {
    $('#city_inpt').val('');

    console.log("start");
    console.log("go");
    $.getJSON('./../json/city.json', function (data) {

        $('.country_select').on('change', function (el) {

            var el = $('.country_select option:selected').val();

            var outList = '';

            for (var key in data) {

                if (data[key].country == el) {
                    outList += `<p value="${data[key].id}">${data[key].name}</p>`;
                    $('#city').css('display', 'block');
                }
            }
            $('#city').html(outList)
            /*================= сортировка =======================*/
            function sort() {
                var $elements = $('#city p');
                var $target = $('#city');

                $elements.sort(function (a, b) {
                    var an = $(a).text();
                    var bn = $(b).text();

                    if (an && bn) {
                        return an.toUpperCase().localeCompare(bn.toUpperCase());
                    }

                    return 0;
                });

                $elements.detach().appendTo($target);
            };
            sort();

            /*================= вивід даних =======================*/
            $('#city p').on('click', function () {
                let el=$(this).text();
                console.log(el)
                $('#city_inpt').val(el);
                $('#city_block').css('display','none');
                $.get(
                    "http://api.openweathermap.org/data/2.5/forecast?",
                    {
                        id: $(this).attr('value'),
                        appid: "32e8821013bcd7e0a7418bdd28589135"
                    },

                    function (data) {
                        console.log(data)
                        function RemoveTeg() {
                            $('.weather__list button').remove();
                            $('.tables__weather .slider').remove();
                            console.log('remove -"OK"')
                        }
                        RemoveTeg();

                        let outList = '';
                        console.log(data.city.name)
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
                                    AddTable(gDate, toDay.format('DD/M'));
                                    TableIns(gDate, dateOn, i,data);

                                }
                                else {
                                    TableIns(gDate, dateOn, i,data);
                                }

                            }

                            if (day1.format('DD') == gDate) {
                                if ($(`.dates__item${day1.format('DD')}`).length === 0) {
                                    AddDates(day1.format('DD'), dateOn.slice(0, -8), indx);
                                    AddTable(gDate, day1.format('DD/M'));
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
                                    AddTable(gDate, day2.format('DD/M'));
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
                                    AddTable(gDate, day3.format('DD/M'));
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
                                    AddTable(gDate, day4.format('DD/M'));
                                    TableIns(gDate, dateOn, i,data);

                                }
                                else {
                                    TableIns(gDate, dateOn, i,data);
                                }
                            }


                        }
                    
                        $('#weather').html(outList);

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
        })
    })

})

/*========== search=========*/

document.querySelector('#city_inpt').oninput = function () {

    let val = this.value.trim();

    function ucFirst(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    let valUp = ucFirst(val);

    let elastictems = document.querySelectorAll('#city p');
    if (valUp != '') {
        elastictems.forEach(function (elem) {
            if (elem.innerText.search(valUp) == -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else {
                elem.classList.remove('hide');
                let strEl = elem.innerText;
                elem.innerHTML = insertMark(strEl, elem.innerText.search(valUp), valUp.length)
            }
        })
    }
    else {
        elastictems.forEach(function (elem) {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;

        });
    }
}

function insertMark(str, pos, len) {
    return str.slice(0, pos) + '<mark>' + str.slice(pos, pos + len) + '</mark>' + str.slice(pos + len);
}





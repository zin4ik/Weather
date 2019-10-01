jQuery(document).ready(function ($) {
    console.log("start");
    console.log("go");
    $.getJSON('./../json/city.json', function (data) {

        $('.country_select').on('change', function (el) {

            var el = $('.country_select option:selected').val();
            console.log(el);

            var out = '';

            for (var key in data) {

                if (data[key].country == el) {
                    out += `<p value="${data[key].id}">${data[key].name}</p>`;
                    $('#city').css('display','block');
                }
            }
            $('#city').html(out)
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
                console.log($(this).attr('value'));
                $.get(
                    "http://api.openweathermap.org/data/2.5/weather?",
                    {
                        id: $(this).attr('value'),
                        appid: "32e8821013bcd7e0a7418bdd28589135"
                    },

                    function (data) {
                        let out = '';
                        out += 'Погода <b>' + data.weather[0].main + '<b/><br>';
                        out += '<p style="text-align:center"><img src="http://openweathermap.org/img/w/' + data.weather[0].icon +
                            '.png"></p>';
                        out += 'Температура: <b>' + Math.round(data.main.temp - 273) + '&#176; C<b/><br>';
                        out += 'Влажность: <b>' + data.main.humidity + '%</b><br>';
                        out += 'Видимость: <b>' + (data.visibility / 1000) + 'км.</b><br>';
                        // console.log(data.main);
                        $('#weather').html(out);
                    }
                )

            })

        })

    })
});

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





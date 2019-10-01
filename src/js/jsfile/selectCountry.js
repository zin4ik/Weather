jQuery(document).ready(function ($) {

    var DONE = 4;
    var OK = 200;
    function sendAjax() {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', '/city.list.json', true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === DONE && xhr.status === OK) {
                console.log(JSON.parse(xhr.responseText))
            }
        }
        xhr.send()
    }
});
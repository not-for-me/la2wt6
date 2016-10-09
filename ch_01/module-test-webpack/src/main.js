import {areaOfCircle, areaOfRectangle} from './area-util';
import $ from 'jquery';

$(document).ready(function () {
    $("#circle-button").on('click', function () {
        var radius = $("[name=circle-radius]").val();
        $("[name=circle-area]").val(areaOfCircle(radius));
    });

    $("#rectangle-button").on('click', function () {
        var w = $("[name=rectangle-width]").val();
        var h = $("[name=rectangle-height]").val();
        $("[name=rectangle-area]").val(areaOfRectangle(w, h));
    });
});
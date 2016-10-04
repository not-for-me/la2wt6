import {areaOfCircle, areaOfRectangle} from './area-util';
import $ from 'jquery';

$(document).ready(function () {
    $("#circle-button").on('click', function () {
        var radius = $("#circle-radius").val();
        $("#circle-area").val(areaOfCircle(radius));
    });

    $("#rectangle-button").on('click', function () {
        var w = $("#rectangle-width").val();
        var h = $("#rectangle-height").val();
        $("#rectangle-area").val(areaOfRectangle(w, h));
    });
});
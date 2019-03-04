import $ from 'jquery';

import {pancakeObj} from './inputEventSetter.js';
import {pancakesListRender} from './pancakesListRender.js';
import {changeState} from './inputEventSetter.js';
import {resolve} from './resolveScore.js';

export function addPancake(pancObj, side){
    console.log('addPnac');
    
    let weight = $(pancObj).text();
    
    let out = "";
    
    out += '<div class="pancake-on-rod" id="' + $(pancObj).attr('id') + '-on-rod">';
    out += '<div class="on-rod" style="top: calc(' + weight * 10 + 'px - 10px );"></div>';
    out += '<div class="pancake-part" style="height: ' + weight * 10 + 'px;"></div>';
    out += '<div class="pancake-part" style="height: ' + weight * 10 + 'px;"></div>';
    out += '</div>'; 
    
    let selector = '#' + side + '-side-rod';
    $('#' + side + '-side-rod').append(out);
    toRemoveFromRod();
    resolve();
}

function toRemoveFromRod(){
    $('.pancake-on-rod').mousedown(function(){
        changeState(pancakeObj, $(this).attr('id'), 'in list');
        $(this).remove();
        pancakesListRender();
        resolve();
    });
}
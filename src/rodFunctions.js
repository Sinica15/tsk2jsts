import $ from 'jquery';

import {pancakesListRender} from './pancakesListRender.js';
import {pancakeObj} from './inputEventSetter.js';
import {changeState} from './inputEventSetter.js';

export function addPancake(pancObj, side){
    console.log('addPnac');
    
    let weight = $(pancObj).text();
    
    let out = "";
    
    out += '<div class="pancake-on-rod" id="' + $(pancObj).attr('id') + '-on-rod">';
    out += '<div style="height: ' + weight*10 + 'px;"></div>';
    out += '<div style="height: ' + weight*10 + 'px;"></div>';
    out += '</div>'; 
    
    let selector = '#' + side + '-side-rod';
    $('#' + side + '-side-rod').append(out);
    toRemoveFromRod();
}

function toRemoveFromRod(){
    $('.pancake-on-rod').mousedown(function(){
        changeState(pancakeObj, $(this).attr('id'), 'in list');
        $(this).remove();
        pancakesListRender();
        
    });
}
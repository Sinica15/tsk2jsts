import $ from 'jquery';

import {pancakeObj} from './inputEventSetter.js';
import {addPancakeListEvent} from './inputEventSetter.js';

export function pancakesListRender(){
    let out = '';
    
    out += '<div id="list-container">';
    
    for(let i = 0; i < pancakeObj.length; i++){
        if(pancakeObj[i]['state'] != 'in list') continue;
        out += '<div class="pancake-in-list" id="'+ pancakeObj[i]['id'] +'-in-list">' + pancakeObj[i]['weight'] + '</div>';
    }
    out += '</div>';
    
    $('#pancakes-list').html(out);
    addPancakeListEvent();
}
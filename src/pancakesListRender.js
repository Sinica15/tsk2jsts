import $ from 'jquery';

import {pancakeObj} from './inputEventSetter.js';

export function pancakesListRender(){
    let out = '';
    for(let i = 0; i < pancakeObj.length; i++){
        if(pancakeObj[i]['state'] != 'in list') continue;
        out += '<div class="pancake-in-list">' + pancakeObj[i]['weight'] + '</div>';
    }
    $('#pancakes-list').html(out);
}
import $ from 'jquery';

import {pancakesListRender} from './pancakesListRender.js';
import {addPancake} from './rodFunctions.js';


export let pancakeObj = [];

export function getObjProp(obj, id, key){
    for(let i = 0; i < obj.length; i++){
        if (parseInt(obj[i]['id'], 10) == parseInt(id, 10)){
            return obj[i][key];
        }
    }
}

export function changeState(obj, id, toChange){
//    console.log('changeStateBegin');
    for(let i = 0; i < obj.length; i++){
//        console.log(obj);
//        console.log(parseInt(obj[i]['id'], 10) + " " + parseInt(id, 10));
        if (parseInt(obj[i]['id'], 10) == parseInt(id, 10)){
            obj[i]['state'] = toChange;
            return;
        }
    }
//    console.log('changeStateFin');
}

export function addPancakeListEvent(){
    $('#pancakes-list').on('contextmenu', '.pancake-in-list', function(e){ return false; });
    $('#pancakes-list').on('contextmenu', '#list-container', function(e){ return false; });
    $('.pancake-in-list').mousedown(function(e){ 
//        console.log('mouseDown');
        if( e.button == 2 ) { 
            addPancake($(this), 'right');
        }
        if( e.button == 0 ) { 
            addPancake($(this), 'left');            
        }
        changeState(pancakeObj, $(this).attr('id'), 'on rod');
        pancakesListRender();
    });
}

export function inputEventSetter(){
    $('input#pancake-weight-rande').on('input', function () {
        $('#pancake-weight-number').val($(this).val());
    });
    $('input#pancake-weight-number').on('input', function () {
        $('#pancake-weight-rande').val($(this).val());
    });
    
    $("#add-pancake-list").click(function(){
        if(pancakeObj.length >= 10000){
            alert('Too many pancakes');
            return;
        }
        pancakeObj.push({
            id: pancakeObj.length + '-pancake',
            weight: $('#pancake-weight-number').val(),
            state: 'in list'
        });
        console.log(pancakeObj);
        pancakesListRender();
    });

}
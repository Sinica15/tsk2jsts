import $ from 'jquery';

import {pancakesListRender} from './pancakesListRender.js';
import {addPancake} from './rodFunctions.js';


export let pancakeObj = [];

function addPancakeListEvent(){
    $('#pancakes-list').on('contextmenu', '.pancake-in-list', function(e){ return false; });
    
    
    $('.pancake-in-list').mousedown(function(e){ 
        if( e.button == 2 ) { 
//            alert('Right mouse button! ' + $(this).text());
            addPancake($(this).text(), 'right');
        }
        if( e.button == 0 ) { 
//            alert('Left mouse button! ' + $(this).text()); 
            addPancake($(this).text(), 'left');
        }
        
    });
        
        
//    $('.pancake-in-list').on('click', function(){
//            alert($(this).text());
//    });
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
            id: pancakeObj.length,
            weight: $('#pancake-weight-number').val(),
            state: 'in list'
        });
        console.log(pancakeObj);
        pancakesListRender();
        addPancakeListEvent();
        
    });

}
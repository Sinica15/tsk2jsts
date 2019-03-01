import $ from 'jquery';

import {pancakeObj} from './inputEventSetter.js';
import {getObjProp} from './inputEventSetter.js';

export function resolve(){
    if(getAddSum()){
        $('#barbell-resolve').html('<div>Штанга готова!</div>');
    }else{
        $('#barbell-resolve').html('<div>Штанга еще не готова!</div>');
    }
}

function getAddSum(){
    let leftSum = getSideSum('left');
    let rightSum = getSideSum('right');
    let out = '<div>'; 
    out +='<div>Сумма левой стороны: ' + leftSum + '</div>';
    out +='<div>Сумма правой стороны: ' + rightSum + '</div>';
    out +='<div>Сумма двух сторон: ' + (leftSum + rightSum) + '</div>';
    out +='</div>';
    $('#barbell-score').html(out);
    return leftSum == rightSum;
}

function getSideSum(side){
    let sum = 0;
    $('#' + side + '-side-rod').children().each(function(i, panc){
        sum += parseInt(getObjProp(pancakeObj, $(panc).attr('id'), 'weight'), 10);
    });
//    console.log(side + ' ' + sum);
    return sum;
}


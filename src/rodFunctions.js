import $ from 'jquery';

export function addPancake(weight, side){
    let out = "";
    
    out += '<div class="pancake-on-rod" style="height: ' + weight*10 + 'px;"</div>'; 
    
    let selector = '#' + side + '-side-rod';
    
    console.log(selector);
    $(selector).append(out);
}
const button_more = document.getElementById("button_more");
button_more.addEventListener('click',moreAlbum);

const button_less = document.getElementById("button_less");
button_less.addEventListener('click',lessAlbum);

const accessibilite = document.getElementById("accessiblite");
accessibilite.addEventListener('click',moreAcces);

const mention = document.getElementById("mentions_legales");
mention.addEventListener('click',moreMentiob);

const charte = document.getElementById("Charte_utilisation");
charte.addEventListener('click',moreCharte);

function moreAlbum(){
    button_more.style.display='none';
    button_less.style.display='block';
    document.getElementById("disk_more").style.display='block';
    document.getElementById("disk_more_two").style.display='block';

}
function lessAlbum(){
    button_more.style.display='block';
    button_less.style.display='none';
    document.getElementById("disk_more").style.display='none';
    document.getElementById("disk_more_two").style.display='none';
}
        
function moreAcces(){
    accessibilite_text.style.display='block';
    text_mention.style.display='none';
    text_charte.style.display='none';
}
function moreCharte(){
    accessibilite_text.style.display='none';
    text_mention.style.display='none';
    text_charte.style.display='block';
}
function moreMentiob(){
    accessibilite_text.style.display='none';
    text_mention.style.display='block';
    text_charte.style.display='none';
}
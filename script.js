
function myfun(){
   const lang= document.getElementById("lang").value;
switch (lang) {
  case 'English':
    alert('Accepted our language in English');
    break;
  case 'Tamil':
    alert('Accepted our language in Tamil');
    break;
  default:
    alert('Sorry did not matched');
    user.focus();
         user.style.border="2px solid #ff0000";
         return false;
} 


}

/*function myfunn(){
    const name = 'van';
switch (name) {
  case 'lary':
    alert('Hi lary!');
    break;
  case 'bus':
    alert('HiBus');
    break;
  default:
    alert('the vechle did not metioned');
}
}*/
var lista_de_invitados_1 = []


function sumbit_send() {
    var guestname = document.getElementById('lista_de_invitados_ingresar').Value;
    lista_de_invitados_1.push(guestname);
    var length_of_name = lista_de_invitados_1.length;
document.getElementById('lista_de_invitados_ingresar_1').innerHTML = lista_de_invitados_1.toString();
    document.getElementById('lista_de_invitados_ingresar').style.display = 'inline-block'
}
function Show() {
var i = lista_de_invitados_1.join('<br>');
document.getElementById('p1').innerHTML = i.toString();
document.getElementById('Sort_button').style.display = 'block';
}

function Sort() {
lista_de_invitados_1.sort();
var i = lista_de_invitados_1.join('<br>');
document.getElementById('Sort_list').innerHTML = i.toString();
}

function searching() {
var a = document.getElementById('searched').Value;
var found = 0;
var b;

for (b = 0; b<lista_de_invitados_1.length; b++)
{
    if(a==lista_de_invitados_1[b]){
found=found+1;
    }
}
document.getElementById('searched').innerHTML = 'name found'+ found +'time/b';
console.log('found name'+ found +' time/b');
}




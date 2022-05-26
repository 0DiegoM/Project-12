var lista_de_invitados_1 = []

function submit() {
    var guestname = document.getElementById('lista_de_invitados_ingresar').Value;
    lista_de_invitados_1.push(guestname);

    document.getElementById('lista_de_invitados_ingresar').style.display = 'inline-block'
}

function searching() {
var a = document.getElementById('').Value;
let found = 0;
var b;

for (b = 0; b<lista_de_invitados_1.length; b++)
{
    if(a==lista_de_invitados_1[b]){
found=found+1;
    }
}
document.getElementById('').innerHTML = 'name found'+ found +'time/b';
console.log('found name'+ found +' time/b');
}

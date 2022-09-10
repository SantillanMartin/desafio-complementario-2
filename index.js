class pais{
    constructor(nombre,continente,idioma,visitado){
        this.nombre= nombre;
        this.continente= continente;
        this.idioma= idioma;
        this.visitado=visitado;
    }
}
// funcion que registra nuevos objetos.
function registrarAgenda(){
    let comienzo= "ESC"
    alert("Bienvenido a la base de datos para registrar sus destinos ideales y visitados.\nDebe ingresar nombre del pais,continente donde esta ubicado,idioma hablante y si fue visitado o no.\nSi desea salir solo oprima ESC");    
    comienzo=prompt("¿Desea continuar?(PARA CANCELAR DIGITE 'ESC')");
    if(comienzo=="ESC"){
        alert("Usted eligio no anotar nada.")
        
    }else{
        let paises =[];
        decision="si"
        while(decision=="si"){
        let nombrePais=prompt("Ingrese el nombre del pais para agendar");
        let continente=prompt("Ingrese el continente al que pertenece");
        let idioma=prompt("Ingrese el idioma hablante");
        let visitado=prompt("Ingrese si par declarlo como visitado o no para declarlo como no visitado");

        let paisParaAgendar= new pais(nombrePais,continente,idioma,visitado);
        paises.push(paisParaAgendar);
        decision=prompt("¿Quiere agregar otro pais?\n"+"DIGITE SI PARA CONTINUAR O ESC PARA TERMINAR")
        }
        
        return paises;
    }
    
    
    
}


//Esta funcion filtra todos los paises(objeto) que el usuario selecciono como visitados y los guarda en un array.
function averiguarSiSeVisitoPais(paises){
    let paisesVisitados=paises.filter((elemento)=>elemento.visitado=="si");
    
    
    return paisesVisitados;
}




function main(){
    let paises= registrarAgenda();
    
    let acumuladorPaisesNombre=[];
    paises.forEach(pais =>{
        acumuladorPaisesNombre.push(pais.nombre);
    });
    let paisesVisitados=averiguarSiSeVisitoPais(paises);
    let acumuladorPaisesVisitados=[];
    // Aqui el objeto de los paises que el usuario visito se guarda solamente su nombre en un array,que luego se muestra por alert.
    paisesVisitados.forEach(pais => {
        
        acumuladorPaisesVisitados.push(pais.nombre);
    });
    alert("Su base de paises es: "+acumuladorPaisesNombre+"\nY los paises que visito son "+acumuladorPaisesVisitados.length+": "+acumuladorPaisesVisitados);
}





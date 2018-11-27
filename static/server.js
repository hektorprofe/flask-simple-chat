/**
 * Created by Hektor Profe on 27/11/2018.
 */

function special(str){ 
    str=str.replace(/</gi,'&lt;');
    str=str.replace(/>/gi,'&gt;'); 
    return str
}

// definimos el socket
var socket = io.connect('http://' + document.domain + ':' + location.port);

socket.on( 'connect', function() {  //  conectamos el socket
    socket.emit( 'my event', {  // emitimos señal de nueva conexión
        data: 'Usuario conectado...'
    } )
    // definimos el evento para enviar mensajes con el formulario
    var form = $( 'form' ).on( 'submit', function( e ) {
        e.preventDefault()  // esto desactiva el form para enviar con js
        $( 'input.username' ).attr('disabled','disabled');   
        let user_name = $( 'input.username' ).val().trim();
        let user_input = $( 'input.message' ).val().trim();
        // si hay un usuario y un mensaje emitimos un evento de chat
        if (user_name.length > 0 && user_input.length > 0) {
            socket.emit( 'my event', {
                user_name : user_name,
                message : user_input
            } )
        }
        $( 'input.message' ).val( '' ).focus()
    } )
} )

// definimos otro evento para capturar los mensajes en broadcast del server
socket.on( 'my response', function( msg ) {
    if( typeof msg.user_name !== 'undefined' ) {
        // si está correcto añadimos la div que contiene el mensaje
        $( 'div.message_holder' ).append( 
            '<div><b style="color: #000">'+special(msg.user_name)+'</b> '
            + special(msg.message)+'</div>' )
        // hacemos un scroll abajo de la capa para seguir chateando
        $( 'div.message_holder' ).scrollTop(
            $( 'div.message_holder' ).height())
    }
})
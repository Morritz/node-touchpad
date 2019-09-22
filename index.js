// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

robot.setMouseDelay(1);
const io = require('socket.io')();
io.on('connection', function (socket)
{
    console.log('');	
    console.log('New Connection: ', socket.id);
    console.log( 'IP: ', socket.request.connection.remoteAddress );

    socket.on('move', function(msg){
        //console.log(msg);
        var pos = robot.getMousePos();
        robot.moveMouse( (pos.x + msg.X * 2) ,(pos.y + msg.Y * 2));
        });
    socket.on('click', function(){
        robot.mouseClick();

        });
        socket.on('keyboard', function(msg){
            robot.typeString(msg);
    
            });

            socket.on('enter', function(msg){
                robot.keyTap('enter');
        
                });

                socket.on('backspace', function(msg){
                    robot.keyTap('backspace');
            
                    });
});

io.listen(3000);
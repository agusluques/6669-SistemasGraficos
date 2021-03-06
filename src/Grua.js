function Grua(){
    var actualCameraAux = 1;
	var ruedas = [];
	ruedas.push(new Rueda([-2,0,-1]));
	ruedas.push(new Rueda([-4,0,-1]));
	ruedas.push(new Rueda([-2,0,0]));
	ruedas.push(new Rueda([-4,0,0]));

    var fierros = [];
    // columnas
    fierros.push(new Fierro([-2,0.3,-1], 0, [0.05,1.4,0.05]));
    fierros.push(new Fierro([-4,0.3,-1], 0, [0.05,1.4,0.05]));
    fierros.push(new Fierro([-2,0.3,0], 0, [0.05,1.4,0.05]));
    fierros.push(new Fierro([-4,0.3,0], 0, [0.05,1.4,0.05]));

    // horizontales
    fierros.push(new Fierro([-4,-2.5,-0.5], 0, [0.05,0.05,0.5]));
    fierros.push(new Fierro([-2,-2.5,-0.5], 0, [0.05,0.05,0.5]));
    fierros.push(new Fierro([-4,-3.5,-0.5], 0, [0.05,0.05,0.5]));
    fierros.push(new Fierro([-2,-3.5,-0.5], 0, [0.05,0.05,0.5]));

    // diagonales
    fierros.push(new Fierro([-4,-3,-0.5], 1, [0.05,0.05,0.7]));
    fierros.push(new Fierro([-2,-3,-0.5], 1, [0.05,0.05,0.7]));

    // en x
    fierros.push(new Fierro([-3,-3.5,-1], 0, [1,0.05,0.05]));
    fierros.push(new Fierro([-3,-3.5,0], 0, [1,0.05,0.05]));

    // riel superior
    fierros.push(new Fierro([-3.5,-3.5,-2], 0, [0.05,0.1,3]));
    fierros.push(new Fierro([-2.5,-3.5,-2], 0, [0.05,0.1,3]));
    fierros.push(new Fierro([-3,-3.5,-4.2], 0, [0.5,0.1,0.05]));

    // sosten rectangulo grande
    fierros.push(new Fierro([-3,-3.25,1], 0, [1,0.25,0.3]));

    var objetosCabina = [];    

    //--------------------------------------CABINA-----------------------------------------
    //Tapa delantera
    objetosCabina.push(new Fierro([-3,-3.5,-3], 0, [0.5,0.1,0.01]));     //Palo arriba
    objetosCabina.push(new Fierro([-3,-3,-3], 0, [0.5,0.1,0.01]));       //Palo abajo
    objetosCabina.push(new Fierro([-3.5,-3.0,-3], 0, [0.05,0.25,0.01]));  //Palo izquierda
    objetosCabina.push(new Fierro([-2.5,-3.0,-3], 0, [0.05,0.25,0.01]));  //Palo derecha

    //Tapa trasera
    objetosCabina.push(new Fierro([-3,-2.8,-2.44], 0, [0.5,0.3,0.01]));

    //Tapa arriba
    objetosCabina.push(new Fierro([-3,-3.74,-2.725], 0, [0.5,0.01,0.4]));

    //Tapa lateral 1
    objetosCabina.push(new Fierro([-3.5,-3.5,-2.72], 0, [0.01,0.1,0.39]));     //Palo arriba
    objetosCabina.push(new Fierro([-3.5,-3.0,-2.72], 0, [0.01,0.1,0.3]));     //Palo abajo

    //Tapa lateral 1
    objetosCabina.push(new Fierro([-2.5,-3.5,-2.72], 0, [0.01,0.1,0.39]));     //Palo arriba
    objetosCabina.push(new Fierro([-2.5,-3.0,-2.72], 0, [0.01,0.1,0.3]));     //Palo abajo

    //Tapa abajo
    objetosCabina.push(new Fierro([-3,-3.2,-2.57], 0, [0.5,0.01,0.10]));

    //--------------------------------------------------------------------------------------

    // cables
    objetosCabina.push(new Cable([-7.9,-3.2,0.5]));
    objetosCabina.push(new Cable([-8.1,-3.2,0.5]));
    objetosCabina.push(new Cable([-7.9,-3.2,0.4]));
    objetosCabina.push(new Cable([-8.1,-3.2,0.4]));

    // imanes
    objetosCabina.push(new Fierro([-2.9,-2,-2.6], 0, [0.005,0.05,0.1]));
    objetosCabina.push(new Fierro([-3.1,-2,-2.6], 0, [0.005,0.05,0.1]));

    var containerTomado = null;

    this.initialize = function(){
        for (var i = 0; i < ruedas.length; i++) {
        	ruedas[i].initialize();
        }
        for (var i = 0; i < fierros.length; i++) {
            fierros[i].initialize();
        }
        for (var i = 0; i < objetosCabina.length; i++) {
            objetosCabina[i].initialize();
        }
        
    }

    this.draw = function(viewMatrix){
        for (var i = 0; i < ruedas.length; i++) {
        	ruedas[i].draw(viewMatrix);
        }
        for (var i = 0; i < fierros.length; i++) {
            fierros[i].draw(viewMatrix);
        }
        for (var i = 0; i < objetosCabina.length; i++) {
            objetosCabina[i].draw(viewMatrix);
        }
    }

    var desplazarGrua = function(sentido){
        for (var i = 0; i < ruedas.length; i++) {
            ruedas[i].rotate();
            if (sentido == 1) ruedas[i].translate(-0.1,0,0);
            if (sentido == 0) ruedas[i].translate(0.1,0,0);
            
        }
        for (var i = 0; i < fierros.length; i++) {
            if (sentido == 1) fierros[i].translate(-0.1,0,0);
            if (sentido == 0) fierros[i].translate(0.1,0,0);
            
        }
        for (var i = 0; i < objetosCabina.length; i++) {
            if (sentido == 1) objetosCabina[i].translate(-0.1,0,0);
            if (sentido == 0) objetosCabina[i].translate(0.1,0,0);
            
        }
        if (containerTomado){
            if (sentido == 1){
                containerTomado.translate(-0.1,0,0);
                containerTomado.reset();
            }
            if (sentido == 0){
                containerTomado.translate(0.1,0,0);
                containerTomado.reset();
            }
        }
    }

    var desplazarCabina = function(sentido){
        for (var i = 0; i < objetosCabina.length; i++) {
            if (sentido == 1) objetosCabina[i].translate(0,0,-0.1);
            if (sentido == 0) objetosCabina[i].translate(0,0,0.1);
            
        }
        if (containerTomado){
            if (sentido == 1){
                containerTomado.translate(0,0,-0.1);
                containerTomado.reset();
            }
            if (sentido == 0){
                containerTomado.translate(0,0,0.1);
                containerTomado.reset();
            }
        }
    }

    var desplazarCables = function(sentido){
        for (var i = 11; i < 15; i++) {
            // cables
            if (sentido == 1) {
                objetosCabina[i].escalarCable(1);
            }
            if (sentido == 0) {
                objetosCabina[i].escalarCable(0);
            }
            
        }
        for (var i = 15; i < 17; i++) {
            // imanes
            if (sentido == 1) {
                objetosCabina[i].translate(0,-0.1,0);
            }
            if (sentido == 0) {
                objetosCabina[i].translate(0,0.1,0);
            }
            
        }

        if (containerTomado){
            if (sentido == 1){
                containerTomado.translate(0,-0.1,0);
                containerTomado.reset();
            }
            if (sentido == 0){
                containerTomado.translate(0,0.1,0);
                containerTomado.reset();
            }
        }
    }


    var validarLimiteCabina = function(arg){
        if(arg == 0){
            if(objetosCabina[0].getPosicion()[2]<-4){
                console.log("Limite");
            }else{
                desplazarCabina(1);    // arriba
            }
        } else {
            if(objetosCabina[0].getPosicion()[2]<-0.59){
                desplazarCabina(0);    // abajo
            }else{
                console.log("Limite");
                
            }
        }        
    }

    var validarLimiteGrua = function(arg){
             
        if(arg == 0){
            if(ruedas[0].getPosicion()[0]>-0.39){
                console.log("Limite");
            }else{
                desplazarGrua(0);    // izquierda
            }
        } else {
            if(ruedas[0].getPosicion()[0]<-3.7){
                console.log("Limite");
            }else{
                desplazarGrua(1);    // derecha
            }
        }   
    }     

    this.getPosicionCabina = function(){
        return objetosCabina[10].getPosicionRelativa();
    }

    this.getPosicionImanes = function(){
        return objetosCabina[15].getPosicionRelativa();
    }

    this.tomarContainer = function(container){
        if(container != null){
            containerTomado = container;
            var posicionImanes = this.getPosicionImanes();
            var posicionContainer = containerTomado.getPosicion();
            var posicion = [];
            posicion[0] = posicionImanes[0] - posicionContainer[0];
            posicion[1] = posicionImanes[1] - posicionContainer[1];
            posicion[2] = posicionImanes[2] - posicionContainer[2];
            containerTomado.translate(posicion[0] - 0.1, posicion[1] + 0.1, posicion[2]);
            containerTomado.reset();
        }

    }

    this.soltarContainer = function(){
        containerTomado = null;
    }

    this.hasContainer = function(){
        if(containerTomado) return true;
        else return false;
    }

    $('body').on("keydown",function(event){
        if(actualCameraAux != 3){
            //alert(event.keyCode)
            if (event.keyCode == 37){
                validarLimiteGrua(0);
            } 
            if (event.keyCode == 39){
                validarLimiteGrua(1);
            }
            if (event.keyCode == 38){
                validarLimiteCabina(0); //Adelante
            } 
            if (event.keyCode == 40){
                validarLimiteCabina(1); //Atras
            } 
            if (event.keyCode == 81) desplazarCables(1);    // q
            if (event.keyCode == 65) desplazarCables(0);    // a
        }
        if (event.keyCode == 67) {                      // c
            actualCameraAux++;
            if (actualCameraAux > 3) actualCameraAux = 1; 
        }     
    });
}
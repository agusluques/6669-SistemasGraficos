var waterTexture;
var containerTexture;
var fierroTexture;
var muelleTexture;
var islaTexture;
var puenteMandoTexture;
var skyTexture;
var containerAzulTexture, containerAmarilloTexture, containerCelesteTexture, containerNaranjaTexture, containerRojoTexture, containerVerdeTexture;
function initTexture() {

	tapaBarcoTexture = gl.createTexture();
	tapaBarcoTexture.image = new Image();
	tapaBarcoTexture.image.onload = function() {		
		handleLoadedTexture(tapaBarcoTexture);
	}
	tapaBarcoTexture.image.src = "src/textures/concretoPlataforma.jpg";	
	
	barcoTexture = gl.createTexture();
	barcoTexture.image = new Image();
	barcoTexture.image.onload = function() {		
		handleLoadedTexture(barcoTexture);
	}
	barcoTexture.image.src = "src/textures/cascoBarco3.jpg";

	barcoTexture.Normal = gl.createTexture();
	barcoTexture.Normal.image = new Image();
	barcoTexture.Normal.image.onload = function() {		
		handleLoadedTexture(barcoTexture.Normal);
	}
	barcoTexture.Normal.image.src = "src/textures/cascoBarco3N.jpg";

	waterTexture = gl.createTexture();
	waterTexture.image = new Image();
	waterTexture.image.onload = function() {		
		handleLoadedTexture(waterTexture);
	}
	waterTexture.image.src = "src/textures/sea-map.jpg";

	skyTexture = gl.createTexture();
	skyTexture.image = new Image();
	skyTexture.image.onload = function() {		
		handleLoadedTexture(skyTexture);
	}
	skyTexture.image.src = "src/textures/reflexionMap.jpg";

	skyTexture.Dos = gl.createTexture();
	skyTexture.Dos.image = new Image();
	skyTexture.Dos.image.onload = function() {		
		handleLoadedTexture(skyTexture.Dos);
	}
	skyTexture.Dos.image.src = "src/textures/skyBox.jpg";

	containerTexture = gl.createTexture();
	containerTexture.image = new Image();
	containerTexture.image.onload = function() {		
		handleLoadedTexture(containerTexture);
	}
	containerTexture.image.src = "src/textures/container_difusemapceleste.jpg";

	containerTexture.Normal = gl.createTexture();
	containerTexture.Normal.image = new Image();
	containerTexture.Normal.image.onload = function() {		
		handleLoadedTexture(containerTexture.Normal);
	}
	containerTexture.Normal.image.src = "src/textures/container_difusemapN.jpg";

	fierroTexture = gl.createTexture();
	fierroTexture.image = new Image();
	fierroTexture.image.onload = function() {		
		handleLoadedTexture(fierroTexture);
	}
	fierroTexture.image.src = "src/textures/texturaGrua.jpg";

	fierroTexture.Normal = gl.createTexture();
	fierroTexture.Normal.image = new Image();
	fierroTexture.Normal.image.onload = function() {		
		handleLoadedTexture(fierroTexture.Normal);
	}
	fierroTexture.Normal.image.src = "src/textures/texturaGruaNormalMap.jpg";
	
	muelleTexture = gl.createTexture();
	muelleTexture.image = new Image();
	muelleTexture.image.onload = function() {		
		handleLoadedTexture(muelleTexture);
	}
	muelleTexture.image.src = "src/textures/concretoPlataforma.jpg";

	muelleTexture.Normal = gl.createTexture();
	muelleTexture.Normal.image = new Image();
	muelleTexture.Normal.image.onload = function() {		
		handleLoadedTexture(muelleTexture.Normal);
	}
	muelleTexture.Normal.image.src = "src/textures/concretoPlataformaNomalMap.jpg";

	islaTexture = gl.createTexture();
	islaTexture.image = new Image();
	islaTexture.image.onload = function() {		
		handleLoadedTexture(islaTexture);
	}
	islaTexture.image.src = "src/textures/isla.jpg";

	islaTexture.Normal = gl.createTexture();
	islaTexture.Normal.image = new Image();
	islaTexture.Normal.image.onload = function() {		
		handleLoadedTexture(islaTexture.Normal);
	}
	islaTexture.Normal.image.src = "src/textures/islaNormalMap.jpg";

	puenteMandoTexture = gl.createTexture();
	puenteMandoTexture.image = new Image();
	puenteMandoTexture.image.onload = function() {		
		handleLoadedTexture(puenteMandoTexture);
	}
	puenteMandoTexture.image.src = "src/textures/cabinaBarco.jpg";

	containerAzulTexture = gl.createTexture();
	containerAzulTexture.image = new Image();
	containerAzulTexture.image.onload = function() {		
		handleLoadedTexture(containerAzulTexture);
	}
	containerAzulTexture.image.src = "src/textures/container_difusemap.jpg";

	containerAmarilloTexture = gl.createTexture();
	containerAmarilloTexture.image = new Image();
	containerAmarilloTexture.image.onload = function() {		
		handleLoadedTexture(containerAmarilloTexture);
	}
	containerAmarilloTexture.image.src = "src/textures/container_difusemapamarillo.jpg";

	containerCelesteTexture = gl.createTexture();
	containerCelesteTexture.image = new Image();
	containerCelesteTexture.image.onload = function() {		
		handleLoadedTexture(containerCelesteTexture);
	}
	containerCelesteTexture.image.src = "src/textures/container_difusemapceleste.jpg";

	containerNaranjaTexture = gl.createTexture();
	containerNaranjaTexture.image = new Image();
	containerNaranjaTexture.image.onload = function() {		
		handleLoadedTexture(containerNaranjaTexture);
	}
	containerNaranjaTexture.image.src = "src/textures/container_difusemapnaranja.jpg";

	containerRojoTexture = gl.createTexture();
	containerRojoTexture.image = new Image();
	containerRojoTexture.image.onload = function() {		
		handleLoadedTexture(containerRojoTexture);
	}
	containerRojoTexture.image.src = "src/textures/container_difusemaprojo.jpg";

	containerVerdeTexture = gl.createTexture();
	containerVerdeTexture.image = new Image();
	containerVerdeTexture.image.onload = function() {		
		handleLoadedTexture(containerVerdeTexture);
	}
	containerVerdeTexture.image.src = "src/textures/container_difusemapverde.jpg";
	
}
  
function handleLoadedTexture(texture) {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
	//esta forma para evitar utilizar texturas que tengan dimensiones de dos a la algo
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); //gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);	
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); //Prevents s-coordinate wrapping (repeating).
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); //Prevents t-coordinate wrapping (repeating).
	gl.bindTexture(gl.TEXTURE_2D, null);
	texture.finished = true;
}

function handleLoadedTextureMosaic(texture) {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
 	//esta forma para evitar utilizar texturas que tengan dimensiones de dos a la algo
 	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST); //gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
 	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
 	gl.generateMipmap(gl.TEXTURE_2D);
 	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT); //Prevents s-coordinate wrapping (repeating).
 	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT); //Prevents t-coordinate wrapping (repeating).
 	gl.bindTexture(gl.TEXTURE_2D, null);
 	texture.finished = true;
}
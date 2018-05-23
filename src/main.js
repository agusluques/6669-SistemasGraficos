var canvas, gl, glProgram; 
var t = 0.0;
 

function GLInstance(){
    canvas = document.getElementById("my-canvas");
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if(!gl){ console.error("WebGL context is not available."); return null; }

    //...................................................
    //Setup GL, Set all the default configurations we need.
    gl.clearColor(0.1, 0.1, 0.2, 1.0);      //Set clear color
    gl.enable(gl.DEPTH_TEST);                              
    gl.depthFunc(gl.LEQUAL);     


    //...................................................
    //Methods   
    gl.fClear = function(){ this.clear(this.COLOR_BUFFER_BIT | this.DEPTH_BUFFER_BIT); return this; }


    //...................................................
    //Setters - Getters

    //Set the size of the canvas html element and the rendering view port
    gl.fSetSize = function(){
        //set the size of the canvas, on chrome we need to set it 3 ways to make it work perfectly.
        w = this.canvas.width;
        h = this.canvas.height;

        //when updating the canvas size, must reset the viewport of the canvas 
        //else the resolution webgl renders at will not change
        this.viewport(0,0,w,h);
        return this;
    }

    return gl;
}

function drawScene(shaderProg){
    
    t = t + 0.01;

    requestAnimationFrame(drawScene);

    var viewMatrix = my_camera.getViewMatrix();
    
    my_scene.draw(viewMatrix);
}

function start(){
    gl = GLInstance().fSetSize().fClear();

    glProgram = ShaderUtil.domShaderProgram(gl, "shader-vs", "shader-fs", true);
    gl.useProgram(glProgram);

    my_scene = new Scene();
    my_scene.initialize();


    my_camera = new Camera();
    my_camera.setPerspective(55, 640.0/480.0, 0.1, 1000.0)


    drawScene();
                
}
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car_image1="car1.png";
car1_x=10;
car1_y=10;


car2_width=120;
car2_height=70;
car_image2="car image.jfif";
car2_x=10;
car2_y=100;


background_image="race car.jpg";

function add(){

    background_imgTag=new Image();//to add a new image
    background_imgTag.onload= uploadBackground;//uploadBackground is a function
    background_imgTag.src=background_image;//adding the background_image

   car1_imgTag=new Image();
    car1_imgTag.onload= uploadCar1;
    car1_imgTag.src=car_image1;

    car2_imgTag=new Image();
    car2_imgTag.onload= uploadCar2;
    car2_imgTag.src=car_image2;
}
 function uploadBackground(){

    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
 }

 function uploadCar1(){

    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
 }

 function uploadCar2(){

    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car1_height);
 }
 window.addEventListener("keydown", my_keydown);

 function my_keydown(e)
 {

    var keyPressed=e.keyCode;
    console.log(keyPressed);

    if (keyPressed=="38")
    {
        up();
        console.log("up");
    }

    if (keyPressed=="40")
    {
        down();
        console.log("down");
    }

    if (keyPressed=="37")
    {
        left();
        console.log("left");
    }

    if (keyPressed=="39")
    {
        right();
        console.log("right");
    }
 }


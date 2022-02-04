var yellow = document.getElementById('yellow-skin');
var green = document.getElementById('green-skin');
var red = document.getElementById('red-skin');

var normal = document.getElementById('eye-normal');
var closedEye = document.getElementById('eye-closed');
var long = document.getElementById('eye-long');
var laughing = document.getElementById('eye-laughing');
var rolling = document.getElementById('eye-rolling');
var winking = document.getElementById('eye-winking');


var openMouth = document.getElementById('mouth-open');
var smiling = document.getElementById('mouth-smiling');
var straight = document.getElementById('mouth-straight');
var sad = document.getElementById('mouth-sad');
var teeth = document.getElementById('mouth-teeth');

var firstright = document.querySelector('i');
var secondright = document.getElementById('show-mouth-card');
var left = document.getElementById('show-skin-card');
var lastLeft = document.getElementById('lastLeft');
var mouth = document.getElementById('select-mouth-card');
var skin = document.getElementById('select-skin-card');
var eyes = document.getElementById('select-eyes-card');

var displaySkin = document.getElementById('skin');
var displayMouth = document.getElementById('mouth');
var displayEyes = document.getElementById('eyes');

var yellowColor = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/skin/yellow.png';
var greenColor = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/skin/green.png';
var redColor = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/skin/red.png';

 firstright.addEventListener('click',function(){
    // alert('right Clicked');
   
     skin.style.display = 'none';
     eyes.style.display = 'block';
 });

   secondright.addEventListener('click',function(){
      //  alert('right Clicked');
   
      eyes.style.display = 'none';
      mouth.style.display = 'block';
  });



left.addEventListener('click',function(){
    //  alert('right Clicked');
    
    eyes.style.display = 'none';
    skin.style.display = 'block';
    
});

lastLeft.addEventListener('click',function(){
    //  alert('right Clicked');
    
    mouth.style.display = 'none';
    eyes.style.display = 'block';
    
});

//skin
yellow.addEventListener('click',function(){
     displaySkin.src = yellowColor ;
});

green.addEventListener('click',function(){
    displaySkin.src = greenColor ;
});

red.addEventListener('click',function(){
    displaySkin.src = redColor ;
});

//eyes
var normalEyes = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/eyes/normal.png';
var closedEyes = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/eyes/closed.png';
var longEyes = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/eyes/long.png';
var laughingEyes = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/eyes/laughing.png';
var rollingEyes = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/eyes/rolling.png';
var winkingEyes = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/eyes/winking.png';

 normal.addEventListener('click',function(){
     displayEyes.src = normalEyes;
 });

closedEye.addEventListener('click',function(){
    displayEyes.src = closedEyes;
})

long.addEventListener('click',function(){
    displayEyes.src = longEyes;
})

laughing.addEventListener('click',function(){
    displayEyes.src = laughingEyes;
})

rolling.addEventListener('click',function(){
    displayEyes.src = rollingEyes;
})

winking.addEventListener('click',function(){
    displayEyes.src = winkingEyes;
})

openMouth.addEventListener('click',function(){
    displayMouth.src = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/mouth/open.png';
})

smiling.addEventListener('click',function(){
    displayMouth.src = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/mouth/smiling.png';
})

straight.addEventListener('click',function(){
    displayMouth.src = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/mouth/straight.png';
})

sad.addEventListener('click',function(){
    displayMouth.src = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/mouth/sad.png';
})

teeth.addEventListener('click',function(){
    displayMouth.src = 'https://raw.githubusercontent.com/qaifikhan/JavaScript-Assessment-Starter-Files/master/emoji-maker/assets/mouth/teeth.png';
})







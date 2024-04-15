var spyBtn = document.querySelector('.spy-btn');
var spyInput = document.querySelector('.inputfield');
var spyResult = document.querySelector('.spy-result')
var array = ""

spyBtn.addEventListener('click',function(){
    array = spyInput.value;
    var arraysplit = array.split("")
    var sum = 0;
    var sumValue;
    for (i =0;i<arraysplit.length;i++){
        sum = sum + Number(arraysplit[i]);
        
    }
    spyResult.style.backgroundColor = '#fff'
    sumValue = sum;
    console.log(sumValue)
    var multiply = 1;
    var mulValue;
    for(i = 0; i<arraysplit.length;i++){
      multiply = multiply * arraysplit[i]
    }
    mulValue = multiply;
    console.log(mulValue)
    if ( sumValue === mulValue){
        spyResult.innerHTML = "This is a Spy Number"
    }
    else{
        spyResult.innerHTML = "This is not a Spy Number"
    }
}
   
)


    
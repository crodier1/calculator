$(document).ready(function(){
    var arr = [""];
    //we will temporarily input the numbers, period or operators in the array//
    var str;
    //from the array we will put them in the string. from here we will caculate them in the dispaly//
    var per = ["."];
    var op = ["/","*","-","+"];
    var nums = [0,1,2,3,4,5,6,7,8,9];
    
    function fil(input){
      //we will filter out double periods or double operators//
      if(per.includes(arr[arr.length-1]) && input ==="."){
        //if the array ends w/ an array and the input is a period//
        alert("Error: Duplicate '.'");
        //don't allow another period and send an alert//
      } else if(!op.includes(input) && arr.length === 1){
        //if the input isn't a period & array length is 1//
        arr.push(input);
        //then put the input into the array//
      } else if(!op.includes(arr[arr.length-1])){
        //if the array doesn't end w/ a operator// 
        arr.push(input);
        //then push the input into the array//
      } else if(nums.includes(Number(input))){
        //if the input contains numbers then translate teh string into a number w/ in the array//
        arr.push(input);
        //then push the input in the array//
      } update();
      //call the update function//
    }
    
    function update(){
      //this will update the html//
      str = arr.join("");
      //set the string as the array which is converted into a string//
      $("#display2").html(str);
      //update the html in the display as the string//
    }
    
    function getTotal(){
      str = arr.join("");
      //set the string as the array but convert the array into a string//
      $("#display2").html(eval(str));
      //update the html dispaly and calculate the string equation//
    }
    
    $("a").on("click",function(){
      //when the buttons are clicked//
      if(this.id === "AC"){
        //when teh AC button is hit//
        arr = [""];
        //empty the array//
        update();
        //call the update array//
      } else if(this.id === "CE"){
        //if the CE button is hit//
        arr.pop();
        //pop off the last element in the array//
        update();
        //activate the update function//
      } else if(this.id === "total"){
        //if we hit the total button//
        getTotal();
        //active the getTotal function//
      } else {
        if(arr[arr.length-1].indexOf("/","*","-","+",".")===-1){
          //if the last element isn't an array is a period or operator like a number// 
          fil(this.id);
          //run the number through the fil function//
        } else{
          fil(this.id);
          //if it is an operator or period then run it through the fil function// 
        }
      }
    })
  });

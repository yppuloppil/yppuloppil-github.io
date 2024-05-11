$(document).ready(function(){
  $("#containerTwo").css("display","none");
  $("#playButton").click(function(){
    $("#container").remove();
    $("#containerTwo").css("display","");
    $("body").css("background-color","white");
    var row = 0;
    var col = 0;
    var ans = "adore";
    var guess = "";
    $("body").keyup(function(event){
      if(event.key=="Backspace"&&col!=0)
      {
       guess = guess.substring(0,guess.length-1);
       col--;
       $("#board").children().eq(row).children().eq(col).children().eq(0).text("");
      }
      else if(event.key>='a'&&event.key<='z'&&col<5)
      {
        guess += event.key;
        $("#board").children().eq(row).children().eq(col).children().eq(0).text(event.key);
        col++; 
      }
      else if(event.key=="Enter"&&col==5)
      {
        for(let i = 0; i < 5; i++)
        {
          var color = "#787c7e";
          for(let j = 0; j < 5; j++) if(ans[j]==guess[i]&&ans[j]!=guess[j]) color = "#c9b458"; 
          if(guess[i]==ans[i]) color = "#6aaa6b";
          $("#board").children().eq(row).children().eq(i).children().eq(0).css("background-color",color);
          $("#board").children().eq(row).children().eq(i).children().eq(0).css("color","white");
          $('.keyboardKey').each(function()
          {
            var obj = $(this);
            console.log(obj.css("background-color"));
            if(obj.text()==guess[i]) if(obj.css("background-color")!="rgb(106, 170, 107)") obj.css("background-color",color);
          });
        }
        row++;
        col = 0;
        if(guess==ans)
        {
          setTimeout(
          function() 
          {
            alert("GOOD JOB YAYAYAYA");
            location.reload(true);
          }, 500);
        }
        if(row==6)
        {
          alert("ANGIEEEEEEEE!!!");
          location.reload(true);
        }
        guess = "";
      }
    });
  });
  
});
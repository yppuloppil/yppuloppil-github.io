$(document).ready(function(){
  $("#containerTwo").css("display","none");
  $("#playButton").click(function(){
    $("#container").remove();
    $("#containerTwo").css("display","");
    $("body").css("background-color","white");
  });
  var guess = [];
  var lives = 4;
  var left = 4;
  var ans1 = ["lil bun","hubert","lil guy","ava","DA KIDS YAYAYAYAYA"];
  var ans2 = ["rdu","jfk","dfw","sgn","airports we've been to together :O"];
  var ans3 = ["cookies","chip dips(with ashwagandha)","ice cream sandwiches","macarons","TASTE TESTS WE DID :D"];
  var ans4 = ["indoor skydiving","running a 5k","canyoning","durham scooter ride", "CRAZY THINGS WE DID TOGETHER MUHAHAHA"];
  $("input").change(function(){
    if($(this).prop('checked'))
    {
      if(guess.length==4)
      {
        $(this).prop('checked',false);
        return;
      }
      $(this).parent().css("background-color","rgb(90, 89, 78)");
      $(this).parent().css("color","rgb(255, 255, 255)");
      guess.push($(this).prop('value'));
    }
    else
    {
      $(this).parent().css("background-color","rgb(239, 239, 230)");
      $(this).parent().css("color","rgb(0, 0, 0)");
      guess.splice(guess.indexOf($(this).prop('value')), 1);
    }
  });
  $("body").keyup(function(event){
    if(event.key!="Enter"||guess.length!=4) return;
    var score1 = 0;
    var score2 = 0;
    var score3 = 0;
    var score4 = 0;
    for(let i = 0; i < guess.length; i++)
    {
      if(ans1.includes(guess[i])) score1++;
      if(ans2.includes(guess[i])) score2++;
      if(ans3.includes(guess[i])) score3++;
      if(ans4.includes(guess[i])) score4++;
    }
    if(score1==4)
    {
      alert(ans1[4]);
      $("input").each(function(){
        console.log($(this).prop('value'));
        if(guess.includes($(this).prop('value')))
        {
          $(this).parent().remove();
        }
      });
      guess = [];
      left--;
    }
    else if(score2==4)
    {
      alert(ans2[4]);
      $("input").each(function(){
        if(guess.includes($(this).prop('value')))
        {
          $(this).parent().remove();
        }
      });
      guess = [];
      left--;
    }
    else if(score3==4)
    {
      alert(ans3[4]);
      $("input").each(function(){
        if(guess.includes($(this).prop('value')))
        {
          $(this).parent().remove();
        }
      });
      guess = [];
      left--;
    }
    else if(score4==4)
    {
      alert(ans4[4]);
      $("input").each(function(){
        if(guess.includes($(this).prop('value')))
        {
          $(this).parent().remove();
        }
      });
      guess = [];
      left--;
    }
    else
    {
      if(Math.max(Math.max(score1,score2),Math.max(score3,score4))==3) alert("One Away ya dork!");
      else alert("WHAT DA!!!");
      lives--;
      $(".bubble").eq(0).remove();
      if(lives==0)
      {
        alert("HOW DID U DIE U DORK");
        location.reload(true);  
      }
    }
    if(left==0)
    {
      alert("YAY U DID IT!!!!"); 
    }
  });
});
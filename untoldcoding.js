var i = 0;
var txt1 =
  "Hi API.....!  <<               Now I wan't to say something . <<<                So , Please read everything carefully...!                                                                           > WE ARE HUMANS SO WE MISTAKES   <<                  I KNOW I HAVE DONE A BIG MISTAKE  IA HVE BREAK UR TRSUT ....! <<                           API PLZ FORGIVE ME AND GIVE ME SECOND CHANCE ...!                                                     > PLZ API I WANT TO CONTINE MY FRINEDSHIP ...!                     << IN FUTURE WE WI ALSO NOT GIVE U ANY FORM OF COMPLAIN...!                                                     << SORRY BUT API I DONT HAVE ANY CHOICE TO LOSSE FAJAR....!                                                             PLZ .....! |                  <<<< Give me One chance to Prove myself ...!;
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var answer = "Lose yourself";
var tracker = 1;

function checksong() {
    var guess = $("#guess").val();

    if (guess.toUpperCase() == answer.toUpperCase()) { 
        $("#message").text("Correct!");
        tracker++;
        
        if (tracker == 2) {
            song2();
        }
        if (tracker == 3) {
            song3();
        }
        if (tracker == 4) {
            song4();
        }
        if (tracker == 5) {
            song5();
        }
        if (tracker == 6) {
            song6();
        }
        if (tracker == 7) {
            song7();
        }
        if (tracker == 8) {
            song8();
        }
        if (tracker == 9) {
            song9();
        }
        if (tracker == 10) {
            song10();
        }
        if (tracker == 11) {
           $("#message").text("Congratulations, you won!");
        }
    } else { 
        $("#message").text("Incorrect!");
    }
}


function song2() {
    answer = "Billie jean";
    $("#line1").text("Billie Jean is not my lover");
    $("#line2").text("She's just a girl who claims I am the one");
    $("#line3").text("But the kid is not my son");
}

function song3() {
    answer = "Sicko mode";
    $("#line1").text("She's in love with who I am");
    $("#line2").text("Back in high school we used to bus it to the dance");
    $("#line3").text("");
}

function song4() {
    answer = "Murder on my mind";
    $("#line1").text("His body dropped down to the floor");
    $("#line2").text("He got teardrops in his eyes");
    $("#line3").text("He grabbed me by his hands and said he was afraid to die");
}

function song5() {
    answer = "Drip too hard";
    $("#line1").text("I dont care where I go as long as I get paid");
    $("#line2").text("Bad lil vibe she been on my mind");
    $("#line3").text("Soon as I get back she gettin slayed");
}

function song6() {
    answer = "Goosebumps";
    $("#line1").text("I get those goosebumps every time");
    $("#line2").text("You ease my mind you make everything feel fine");
    $("#line3").text("Worry about those comments im way too numb yeah");
}

function song7() {
    answer = "Humble";
    $("#line1").text("My left stroke just went viral");
    $("#line2").text("Right stroke put lil baby in a spiral");
    $("#line3").text("");
}

function song8() {
    answer = "Look at me";
    $("#line1").text("You put a gun on my mans");
    $("#line2").text("I put a hole in your parents");
    $("#line3").text("I got lean on my ksubis");
}

function song9() {
    answer = "Xo tour life";
    $("#line1").text("I dont really care if you cry");
    $("#line2").text("On the real you shoulda never lied");
    $("#line3").text("Shoulda saw the way she looked me in my eyes");
}

function song10() {
    answer = "Dark night dummo";
    $("#line1").text("Hold up..");
    $("#line2").text("Take a moment count my guap");
    $("#line3").text("All these racks bombin in, they bombin in");
}
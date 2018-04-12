// require /text/tracery.min.js
var index = Math.floor(Math.random() * 20 + 20);
const storyGrammar = {
    "intro": ["<div id='story' ><div class='row pic' style='background:url(#pic#); background-size: cover;background - repeat: no - repeat;'><div class=' col-sm-12 intro'><div class='name'> #nam# &nbsp;&nbsp;#age#</div><div class='job'> #jobn#</div></div></div><div class='text'>#begin#</div></div>"],
    "begin": ["<p>#greeting#</p><p>#self#</p>"],
    "pic": ["pic/mon1.jpg", "pic/mon2.jpg", "pic/mon3.jpg", "pic/mon4.jpg", "pic/mon5.jpg", "pic/mon6.jpg", "pic/mon7.jpg", "pic/mon8.jpg", "pic/mon9.png"],
    "greeting": ["Hi, #call#.", "Hey, #call#!", "Hello, #call#", "Hey #call#", "How's going #call#", "Nice to meet U", "Well, good to see Us"],
    "call": ["dude", "Ms", "lady", "girl", "bro", "man", "guy"],
    "self": ["<p>#selfopen# #nam#, #job#. #hobby#.</p>  <p>#wish#.</p> "],
    "selfopen": ["this is", "I'm", "My name is", "As U see, I'm", "Greeting from"],
    "name": ["Ceteua", "Eurybiot", "Faunus", "Gleneus", "Nomeod", "Orthaow", "Petrae", "Phanir", "Riphom", "Sparge"],
    "job": ["#jobn.a#", "#adj# #jobn#", "I'm #adj# #jobn#", "work as #jobn#"],
    "adj": ["an outstanding", "a knowledgeable", "an experienced", "a magical", "a worldfamous", "the first-class", "a genius", "a handsome", "rich"],
    "jobtitle": ["intestinal cleaner", "beech designer", "Trojan virus engineer", "plague researcher", "graves watcher", "Professor", "magicre searcher", "freelancer", "heir to the castle", "cartoon celebrity"],
    "phrase": ["#subject.a# #verb# #object.a#"],
    "hobby": ["I like #verbphrase#", "I always enjoy #verbphrase#", "My biggest hobby is #verbphrase#", "My interested field is #knowphrase#", "I got PHD in #knowphrase#", "I'm interested in #knowphrase#", "I'm interested in #verbphrase#"],
    "verbphrase": ["#verb# #place#", "eating #food#", "eating #food# #place#"],
    "knowphrase": ["#know#", "#know# and #know#"],
    "food": ["animal blood", "Wi-Fi signal", "human energy", "moonlight", "stone"],
    "know": ["mechanical biology", "bacteriology", "dark matter conversion", "cell psychology", "nocturnal communication"],
    "wish": ["I want to meet #subject#", "Wish to know #subject#", "Try to greet with #subject#", "Want make friends with #subject#", "Hope to find a parter who is #adjective.a# #noun#", "If you are #subject#, contact me"],
    "age": ["123", "305", "467", "443", "27", "25", "503", "68", "65", "46", "241", "405", "34", "57", "36", "37", "33", "31", "122", "290", "173", "23", "2300", "51", ],
    "subject": ["#noun.a#", "#adjective.a# #noun#", "#noun.a# who #features#", "#adjective.a# #noun#, who #features#"],
    "subjecttool": ["#tool#", "#adjective# #tool#"],
    "features": ["smells like elephant blood", "likes to collect animal hair", "can transform space radiation", "likes reading", "doesn't like sunshine", "can split itself", "can fly"],
    // "tool": ["axe", "beetle", "billhook", "comb", "Knife", "fork", " sword", " head", " shovel"],
    // "object": ["#noun#", "#adjective# #noun#", "#adjective# #noun# and #adverb.a# #adjective# #noun#"],
    // "adverb": ["exceptionally", "somewhat", "terribly", "extremely", "slightly"],
    "adjective": ["small", "hidious", "handsome", "wild", "elegant", "sexy", "gorgeous", "tiny", "talent", "beautiful", "quiet", "dark"],
    "noun": ["lady", "vampire", "frog", "duck", "doorman", "devil", "dwarf"],
    "place": ["in the sewer", " in the airport", " at street corner", "in a well", "in a coffin", "in the toilet"],
    "verb": ["takeing adevnture", "thinking about life", "dancing crazyly", "exercising cross-eyed", "enjoying the scenery", "re-assembling myself", "digging holes", "biting my hands"],
    // "time": ["At #timeadj.a# midnight", "On #timeadj.a# afternoon", "On #timeadj.a# dawn", "In #timeadj.a# morning"],
    // "timeadj": ["quiet", "dark", "sunny", "sownstorm", "foggy", "wild", "bald", "beautiful", "chubby", "clean", "dazzling", "fancy", "flabby", "glamorous", "long", "magnificent", "muscular", "plain", "quaint", "scruffy", "short"],
    // "end": ["keep in touch", "wait for Ur reply", "make a freind with me", "marry with a #object#", "return to the #timeadj# world", "awaken from a #adjective# nightmare", " return to Earth"]
}


function main() {
    // index++;
    console.log(index);
    let grammar = tracery.createGrammar(storyGrammar);
    var storyid = "#[nam:#name#][jobn:#jobtitle#]intro#";
    let story = grammar.flatten(storyid);
    console.log(storyid);
    const storyDiv = document.createElement('div');

    storyDiv.style = "font-size: 30px; margin: 10%; line-height: 1.5;";
    storyDiv.innerHTML = story;
    $("#content").append(story);
    // $("#content").last().attr("id","story");
    index = Math.floor(Math.random() * 20 + 20);
    // if(index <4){
    // setTimeout(main, 1500);}
    // else{
    //     const restart = document.createElement('div');
    //     restart.setAttribute("class","btn");
    //     restart.setAttribute("onclick", "readv()");
    //     restart.innerHTML = "restart your adventure";
    //     $("#content").append(restart);
    // }
    // document.body.insertAdjacentElement("beforeend", storyDiv);
}


setTimeout(main, 10);

// function readv() {

//     setTimeout(main, 10);
//     index = 0;
//     $("#content").html("");
// }


function moveleft() {

    $("#content").addClass("left");

    setTimeout(function () {
        $("#content").html("");

        main()
    }, 500);
    setTimeout(function () {

        $("#content").removeClass("left");

    }, 1800);

}
function moveright() {

    $("#content").addClass("right");

    setTimeout(function () {
        $("#content").html("");

        main()
    }, 500);
    setTimeout(function () {

        $("#content").removeClass("right");

    }, 1800);

}


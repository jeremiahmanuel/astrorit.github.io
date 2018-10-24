
//Automatic Quotes
let qIndex = 0;
let q=["Man must rise above the Earth—to the top of the atmosphere and beyond—for only thus will he fully understand the world in which he lives."];
q[1]=["To confine our attention to terrestrial matters would be to limit the human spirit."];
q[2]=["The good thing about science is that it’s true whether or not you believe in it."];
q[3]=["Astronomy compels the soul to look upwards and leads us from this world to another."];
q[4]=["Equipped with his five senses, man explores the universe around him and calls the adventure Science."];
q[5]=["Do not look at stars as bright spots only. Try to take in the vastness of the universe."];
let a=["Socrates, Philosopher","Stephen Hawking","Neil deGrasse Tyson","Plato","Edwin Hubble, Astronomer","Maria Mitchell, Astronomer"];
function quote() {
    if (qIndex >= q.length ) {
      qIndex=0;
   }
    let b = $("#quotejs");
    b.html("\""+q[qIndex]+"\"<footer class='blockquote-footer' style='font-size:24px; color:white; text-align:center;'>"+a[qIndex]+"</footer>");
    qIndex=qIndex+1;
}
setInterval(quote,3800); // Change quote every 2 seconds
//quote(0);

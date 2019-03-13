// ------------First code variant----------------

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

// function showOk() {
//   alert( "You agreed." );
// }

// function showCancel() {
//   alert( "You diagreed." );
// }

// ask("Do you agree?", showOk, showCancel);





// ------------Second code variant----------------

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You disagreed."); }
);
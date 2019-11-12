//entry object, return number of words in each entry
// split(" ")
//return number of connsta and vowels
function Entry(title, body) {
  this.title = title,
  this.body = body
}








$(document).ready(function(){
  $(".journalEntry").submit(function(event) {
  event.preventDefault();
  var userTitle = $("#userTitle").val();
  var userBody = $("#bodyInput").val();
  $("#displayIt").append(userTitle);
  $("#displayIt").append(userBody);

  let bodyArray = [];
  bodyArray.push(userBody);

  myEntry = new Entry (userTitle, bodyArray);

  console.log(bodyArray);

});
});


function toggles(choice) {
  alert("choice");

  var hiddenRating;

  switch(choice) {
  case 'dog':
    hiddenRating = document.getElementById("hidden-dog-rating");
    hiddenRating.hidden = false;
    break;
  case 'cat':
    hiddenRating = document.getElementById("hidden-cat-rating");
    hiddenRating.hidden = false;
    break;
  case 'other':
    hiddenRating = document.getElementById("hidden-other-animals-rating");
    hiddenRating.hidden = false;
    break;
  case '-dog':
    hiddenRating = document.getElementById("hidden-dog-rating");
    hiddenRating.hidden = true;
    break;
  case '-cat':
    hiddenRating = document.getElementById("hidden-cat-rating");
    hiddenRating.hidden = true;
    break;
  case '-other':
    hiddenRating = document.getElementById("hidden-other-animals-rating");
    hiddenRating.hidden = true;
    break;
  default:
    break;
  }
}

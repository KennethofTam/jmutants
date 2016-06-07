// Always check that you linked files in the index
// alert('Test');

var url =  "https://mutant-school.herokuapp.com/api/v1/mutants";

// First argument of function will be what you're iterating over
function loadMutants(mutants) {
  $.each(mutants, addMutant);
}

function addMutant(i, mutant) {
  console.log(mutant.mutant_name);
}

$.get({
  url: url,
  success: loadMutants
});

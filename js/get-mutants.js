// Always check that you linked files in the index
// alert('Test');

var url = 'https://mutant-school.herokuapp.com/api/v1/mutants';

// First argument of function will be what you're iterating over
function loadMutants(mutants) {
  $.each(mutants, function(i, mutant) {
    addMutant(mutant);
  });
}

function addMutant(mutant) {
  // Vomits all of the mutant names onto the main page
  // $('body').prepend(mutant.mutant_name);
  var li = $('.template')
    .clone()
    .removeClass('template');
   li.find('.mutant-name').text(mutant.mutant_name);
   li.attr('data-id', mutant.id);
   $('#mutantList').append(li);
}

$.get({
  url: url,
  success: loadMutants
  // loadMutants does not technically get called until get is completed
  // because possible failures may occur
});

//FLOW OF PROGRAM
// .get -> loadMutants -> .each -> addMutant -> .append -> addMutant ->
// .append -> ... -> .append

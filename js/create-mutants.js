// $.ajax({
//   method: 'post';
// })
$('#new_mutant').on('submit', handleCreateFormSubmit);
//var url =  "https://mutant-school.herokuapp.com/api/v1/mutants";


function handleCreateFormSubmit(ev) {
  ev.preventDefault();
  var f = ev.currentTarget;
  var mutant= {
      // mutant_name: ev.currentTarget.mutantName,
      mutant_name: f.mutantName.value,
      real_name: f.realName.value,
      power: f.power.value
  };
  createMutant(mutant);
}

function createMutant(mutant) {
  $.post({
    url: url,
    data: {
      mutant: mutant
    },
    success: function(mutant) {
      addMutant(mutant);
    },
  });
}

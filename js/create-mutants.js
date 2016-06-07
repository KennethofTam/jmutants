// $.ajax({
//   method: 'post';
// })
$('#new_mutant').on('submit', handleCreateFormSubmit);


function handleCreateFormSubmit(ev) {
  ev.preventDefault();
  var f = ev.currentTarget;
  var mutant= {
      //mutant_name: ev.currentTarget.mutantName,
      mutantName: f.mutantName.value,
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
    success: function(x) {
      alert(x.mutant_name);
    },
  });
}
var url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0';
var base_url = 'https://pokeapi.co/api/v2/pokemon/';
var template = $('.template')
  .clone()
  .removeClass('template')
  .detach();

function loadPokemon(pokemon) {
  $.each(pokemon.results, function(i, mutant) {
    //addMutant(i, mutant);
    pokemonData(i, mutant);
  });
}

function addMutant(i, mutant) {
  var ability = pokemonData(i, mutant);
  console.log('ability: ' + ability);
  var li = template.clone();
  li.find('.mutant-name a')
    .text(mutant.name)
    .attr('href', mutant.url)

  li.attr('data-id', mutant.id);
  $('#mutantList').append(li);
}


function pokemonData(index, pokemon) {
  var index_plus = index+=1;
  var poke_url = base_url + index_plus + '/';
  $.getJSON(poke_url, function(data){
    $.each(data.abilities, function(i, ability) {
      //console.log(ability.ability.name);
      var ability = ability.ability.name;
      var li = template.clone();
      li.find('.mutant-name a')
        .text(pokemon.name + ':' + ability)
        .attr('href', pokemon.url)
      li.attr('data-id', pokemon.id);
      $('#mutantList').append(li);
      return false;
    })
  });
}

$.get({
  url: url,
  success: loadPokemon
});

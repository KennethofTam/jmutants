$('#pokemans_form').on('submit', loadPokemon);

function loadPokemon(pokemons) {
  $.each(pokemons.results, function(i, pokemon) {
    //addPokemon(pokemon);
    console.log(pokemon);
  });
}

/*function addPokemon(pokemon) {
  $('body').prepend(pokemon.name);
}*/

$.get({
  url: 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=20',
  success: loadPokemon
});

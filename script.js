document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const recipeCards = document.querySelectorAll('.recipe-card');

    // Escuta o evento de digitação na barra de busca
    searchBar.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();

        recipeCards.forEach(card => {
            // Pega o nome guardado no atributo data-name do HTML
            const recipeName = card.getAttribute('data-name');
            
            // Verifica se o termo pesquisado está no nome da receita
            if (recipeName.includes(searchTerm)) {
                card.style.display = 'block'; // Mostra o card
            } else {
                card.style.display = 'none';  // Esconde o card
            }
        });
    });
});

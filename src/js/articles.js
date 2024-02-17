(function () {
    /**
     * Update the article list with the given query.
     */
    function updateArticleList(query = '') {
        const articleList = document.getElementById('articleList');
        articleList.articles = getArticles(query);
    }

    // add event listener to the search input so we can update the article list
    const searchInput = document.getElementById('articleSearchInput');
    searchInput.addEventListener('input', (event) => {
        updateArticleList(event.target.value);
    });

    // fill article list on page load
    updateArticleList();
})();

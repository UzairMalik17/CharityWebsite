(function () {
    /**
     * Update the dropzone list with the given query.
     */
    function updateDropzoneList(query = '') {
        const dropzoneList = document.getElementById('dropzoneList');
        dropzoneList.dropzones = getDropzones(query);
    }

    // add event listener to the search input so we can update the dropzone list
    const searchInput = document.getElementById('dropzoneSearchInput');
    searchInput.addEventListener('input', (event) => {
        updateDropzoneList(event.target.value);
    });

    // fill dropzone list on page load
    updateDropzoneList();
})();

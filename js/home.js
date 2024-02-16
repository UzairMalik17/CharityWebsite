// IIFE (Immediately-Invoked Function Expression)
// define and execute a function immediately after its creation. 
// It encapsulates the code within the function and ensures that 
// any variables or functions declared inside the function do not leak into the global scope.
(function () {
    const newsList = document.getElementById('newsList');
    newsList.items = newsItems;
})();

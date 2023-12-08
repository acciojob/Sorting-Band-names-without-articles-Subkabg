//your code here
document.addEventListener("DOMContentLoaded", function () {
  // Prompt user for input
  let bandNames = prompt("Enter band names separated by commas:").split(',');

  // Sort the array without articles
  bandNames.sort((a, b) => {
    const removeArticles = (name) => name.replace(/^(a|an|the)\s+/i, '');
    return removeArticles(a).localeCompare(removeArticles(b));
  });

  // Create the list inside the ul tag
  const ul = document.getElementById('bands');
  bandNames.forEach((band) => {
    const li = document.createElement('li');
    li.textContent = band.trim(); // Trim to remove leading/trailing spaces
    ul.appendChild(li);
  });
});



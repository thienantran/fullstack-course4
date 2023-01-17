// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowHomeHTML, true);

// Builds HTML for the home page based on categories array
// returned from the server.
function buildAndShowHomeHTML (categories) {

  // Load home snippet page
  $ajaxUtils.sendGetRequest(homeHtmlUrl, function (homeHtml) {
    // Choose a random category
    var chosenCategoryShortName = chooseRandomCategory(categories);
    // Substitute {{randomCategoryShortName}} in the home html snippet with the chosen category
    var homeHtmlToInsertIntoMainPage = insertProperty(homeHtml, "randomCategoryShortName", "'"+ chosenCategoryShortName + "'");
    // Insert the produced HTML in STEP 3 into the main page
    insertHtml("#main-content", homeHtmlToInsertIntoMainPage);
    }, false);
}

// Given array of category objects, returns a random category object.
function chooseRandomCategory (categories) {
  // Choose a random index into the array (from 0 inclusively until array length (exclusively))
  var randomArrayIndex = Math.floor(Math.random() * categories.length);
  // return category object with that randomArrayIndex
  return categories[randomArrayIndex];
}

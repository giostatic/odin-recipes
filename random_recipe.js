let recipeLinks = ["<a href='recipes/ribs.html'>Slow cooked ribs</a>"];

// let goSomewhere= (recipes) => {
//     let recipes = recipeLinks[Math.floor(Math.random()*recipeLinks.length)];
//     window.location = recipes; //redirects the button
// };

function goSomewhere {
    let recipes = recipeLinks[Math.floor(Math.random()*recipeLinks.length)];
    window.location = recipes; //redirects the button
    document.getElementById("my-button").innerHTML = "YOU CLICKED ME!";
}

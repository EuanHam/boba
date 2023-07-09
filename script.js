document.addEventListener('DOMContentLoaded',postData);

    const data = document.location.search;
    const params = new URLSearchParams(data);

    const name = params.get('fname');
    const coffeeCount = params.get('coffee');
    const fruityDrinks = params.get('fruit');
    const sweetness = params.get('sweetness');
    const experimentalDrink = params.get('experimental');
  
    const coffeeTea = "The Coffee Milk Tea with Coffee Jelly";
    const coffeeMilk = "Milk Foam Black Coffee";
    const lemon = "Lemon Ai-Yu Tea with White Pearls from the Creative Series";
    const carmChoc = "Caramel Chocolate from the Creative Series";
    const hibiscus = "Hibiscus Green Tea with Herbal Jelly";
    const strawberry = "Strawberry Milk Tea with Boba";
    const brown = "Brown Sugar Milk Tea "
    const earl = "Earl Gray Milk Tea with Boba";


    // Calculate the results based on the form inputs
    let image;
    let result = "Your Gong Cha drink recommendation: ";
  
    if (experimentalDrink === "true") {
        if (coffeeCount > 1) {
            result += coffeeMilk;
            image = "coffeeMilk.png";
        } else {
            result += hibiscus;
            image = "hibiscus.png";
        }
    } else {
        if (sweetness > 50) {
            if (fruityDrinks === "true") {
                result += lemon;
                image = "lemon.png";
            } else {
                result += carmChoc;
                image = "carmChoc.png";
            }
        } else {
            if (coffeeCount > 2 && sweetness <= 50) {
                result += coffeeTea;
                image = "coffeeMilk.png";
            } else {
                result += earl;
                image = "earl.png";
            }
        }
    }
    
    function postData() {
        const container = document.getElementById('results');
        container.innerHTML = `<h1>${result}!</h1>
                                <img src="${image}"></img>
                                <h3>Thank you for taking our quiz!`;
    
    }
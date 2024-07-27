// List of card names, add 1 card per strings. I left some examples.
const cardNames = [
"Zada, Hedron Grinder",
"Accelerate",
"Ancestors' Aid"
]; // Add your list of card names here

import { createArrayCsvWriter }  from 'csv-writer';

// Function to call search API for a card name
async function searchCard(cardName) {    
    const searchUrl = `https://moxmonolith.com/card/search?name=${encodeURIComponent(cardName)}`;
    // console.log('searchUrl: ', searchUrl)
    const response = await fetch(searchUrl);
    const data = await response.json();
    const cardId = data.cards.find(card => card.name === cardName)?.id;
    return cardId;
}

// Function to call product API for a card ID
async function getProduct(cardId) {
    const productUrl = `https://moxmonolith.com/card/${cardId}/products?retailers[]=2&retailers[]=3&retailers[]=4&retailers[]=6&retailers[]=11&retailers[]=13&retailers[]=15&retailers[]=18&retailers[]=19&retailers[]=20&retailers[]=21&retailers[]=22&retailers[]=23&retailers[]=24&retailers[]=25&retailers[]=26&retailers[]=32&retailers[]=33&retailers[]=34&retailers[]=35&retailers[]=37&retailers[]=38&retailers[]=39&retailers[]=40&retailers[]=41&retailers[]=42&retailers[]=43&retailers[]=44&retailers[]=45&retailers[]=46&poll=0`;
    // console.log('productUrl: ', productUrl)
    const response = await fetch(productUrl);
    const data = await response.json();
    return data.products;
}

// Function to process each card
async function processCards(cardNames) {
    const csvData = [];
    for (const cardName of cardNames) {
        console.log(cardName)
        const cardId = await searchCard(cardName);
        if (cardId) {
            const products = await getProduct(cardId);
            for (const product of products) {
                const { retailer_name, link, price } = product;
                csvData.push([cardName, retailer_name, link, price / 100]);
            }
        } else {
            console.log(`Card "${cardName}" not found.`);
        }
    }
    return csvData;
}

// Function to write CSV file
async function writeCSV(data, filePath) {
    // Create a CSV writer
    const csvWriter = createArrayCsvWriter({
        header: ["Card", "Retailer", "Link", "Price"],
        path: 'output.csv'
    });
    await csvWriter.writeRecords(data)
    console.log(`CSV file created at ${filePath}`);
}

// Call the function to process cards
processCards(cardNames)
    .then(csvData => writeCSV(csvData, 'output.csv'))
    .catch(error => console.error(error));

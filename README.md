# Card Finder for Mox Monolith

# 1 Dependencies
- You need to have Node.js installed to run it, I recommend using [nvm](https://github.com/nvm-sh/nvm) and using the lts (`nvm install --lts`).
- install dependencies with `npm i`
Now you should be good to go.

# 2 Add your list
In `card_finder.js` add your cards to the `cardNames` array.

# 3 Run it
Run `node card_finder.js` it will output the card names as it processess them, something similar to:

```
$ node card_finder.js
Zada, Hedron Grinder
Accelerate
Ancestors' Aid
CSV file created at output.csv
```

# 4 Profit
Use the generated `output.csv` in your prefered spreadsheet tool to search through listings.

Below is an example record, for each row we have the card name, store name, link to the product and price in South African Rand.

```
Ancestors' Aid,TopDeck,https://store.topdecksa.co.za//products/ancestors-aid?variant=39863156277344,5
```

If you make a meaningful contribution, please consider a PR :)

# 5 Disclaimer
See LICENSE.txt, further, this code was generated quickly using chatGPT and then with some modifications added, it is not optimized in any way for performance.
The host of the APIs have given consent that we can "go nuts" with regard to hitting, so I guess you can add as many cards as your internet and storage can handle.
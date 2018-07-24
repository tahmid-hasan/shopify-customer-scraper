# Shopify Customer Scraper

This is a simple Command Line App to scrap customer from a Shopify store.

```diff
-Please don't use this app without permission of the Store Owner!
```
# Installation Guide

Before install it please ensure that NodeJS and NPM have already installed on your computer.

## Install With Command Line

To install this package globally simply execute this command from your CMD or Git Bash or Powershell

`npm install --global https://github.com/tahmid-hasan/shopify-customer-scraper.git`

**_or_**

`npm i -g https://github.com/tahmid-hasan/shopify-customer-scraper.git`

After install it globally please execute this command to use it from anywhere from your computer

`npm link scs` **_or_** `npm ln scs`

# Users Guide

## How to use it

This is the commands you can use from command line for this APP

`scs --version` | To get the app version.

`scs get-customer` **_or_** `scs gc` | To get all customers data from a store.

```
Note: You have to provide some information about the store after execute this command like:
    => Store URL
    => API_KEY of a private app from the store
    => API_SECRET or API_PASSWORD of that private app from the store
```

After getting all the customers data you can generate an excel sheet or csv. To generate a sheet please run

`scs generate-sheet` **_or_** `scs gs`

You can also use flag to generate sheet with a specified filename and extension. Use `-f` flag for filename and `-e` flag for extension.

### Example
`scs generate-sheet -f filename -e csv` **_or_** `scs gs -f filename -e csv`

The default filename for generated sheet is `customer` and the default file extension is `xlsx`

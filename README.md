
 # E-commerce Back End 

 This is a fully functioning Ecommerce back end. With this program you will be able to add your own products with their own categories as well as their own
 tags. You are also able to update, delete any exisiting products you have on the program. Every api end point was made by yours truly.
 





## API Reference

#### Get all Products

```http
  GET /api/products
```

#### Get all categories

```http
  GET  /api/categories
```

#### Get all Tags

```http
GET /api/tags
```
#### These all have your CRUD methods with everything else other than find all you will need to provide an id. To view the ids please view the seed folder.

## Installation

Once you have cloned this on your local machine you will need to do a few things.

1st you will need to instal npm
```zsh
  npm init
  npm install -y
```

2nd 
```zsh
npm install express dotenv mysql2 
```


The following step you will see a file named .env you will need to to put the database name which is 'ecommerce_db'
your root name for your mysql db as well as your password.
Once these steps are done you will navigate to server.js, open in intergrated terminal and type npm start, once you type that command you will see the server start to boot up.
the best way to test these routes is to download insomnia.


    

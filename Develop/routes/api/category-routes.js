const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    attributes: ['category_name'],
    include: [
      {
        model: Product,
        include: 'product_tagg'
      }
    ]
  })
  .then(CategoryData => res.json(CategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        include: 'product_tagg'
      }
    ]
  })
  .then(CategoryData => res.json(CategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(CategoryData => res.json(CategoryData))
.catch(err => {
  console.log(err);
  res.status(400).json(err);
})
  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
  {
    category_name: req.body.category_name
  }, 
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(CategoryData => {
    if(!CategoryData){
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(CategoryData)
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(CategoryData => {
    if(!CategoryData){
      res.status(404).json({ message: 'No Category found with this id' });
      return;
    }
    res.json(CategoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;

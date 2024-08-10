const router = require('express').Router();
const { Category, Product } = require('../../models'); // Import the Category and Product models

// The `/api/categories` endpoint

// GET all categories
router.get('/', async (req, res) => {
  try {
    // Find all categories and include associated Products
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData); // Send the retrieved data as JSON with a 200 status code
  } catch (err) {
    res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});

// GET a single category by `id`
router.get('/:id', async (req, res) => {
  try {
    // Find one category by its `id` and include associated Products
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' }); // Send a 404 error if the category is not found
      return;
    }

    res.status(200).json(categoryData); // Send the retrieved data as JSON with a 200 status code
  } catch (err) {
    res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});

// POST a new category
router.post('/', async (req, res) => {
  try {
    // Create a new category using the data in req.body
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData); // Send the created category data as JSON with a 200 status code
  } catch (err) {
    res.status(400).json(err); // Send a 400 error if something goes wrong with the request data
  }
});

// PUT to update a category by `id`
router.put('/:id', async (req, res) => {
  try {
    // Update a category by its `id` with the data in req.body
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category found with this id!' }); // Send a 404 error if the category is not found
      return;
    }

    res.status(200).json({ message: 'Category updated successfully!' }); // Send a success message with a 200 status code
  } catch (err) {
    res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});

// DELETE a category by `id`
router.delete('/:id', async (req, res) => {
  try {
    // Delete a category by its `id`
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' }); // Send a 404 error if the category is not found
      return;
    }

    res.status(200).json({ message: 'Category deleted successfully!' }); // Send a success message with a 200 status code
  } catch (err) {
    res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});

module.exports = router; // Export the router to be used in other parts of the application

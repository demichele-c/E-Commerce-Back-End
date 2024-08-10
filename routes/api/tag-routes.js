const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models'); // Import the Tag, Product, and ProductTag models

// The `/api/tags` endpoint

// GET all tags
router.get('/', async (req, res) => {
  try {
    // Find all tags and include associated Product data
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }], // Include associated Products through the ProductTag junction table
    });
    res.status(200).json(tagData); // Send the retrieved tags as JSON with a 200 status code
  } catch (err) {
    res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});

// GET a single tag by `id`
router.get('/:id', async (req, res) => {
  try {
    // Find a single tag by its `id` and include associated Product data
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }], // Include associated Products through the ProductTag junction table
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' }); // Send a 404 error if the tag is not found
      return;
    }

    res.status(200).json(tagData); // Send the retrieved tag as JSON with a 200 status code
  } catch (err) {
    res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});

// POST to create a new tag
router.post('/', async (req, res) => {
  try {
    // Create a new tag using the data in req.body
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData); // Send the created tag as JSON with a 200 status code
  } catch (err) {
    res.status(400).json(err); // Send a 400 error if something goes wrong with the request data
  }
});

// PUT to update a tag's name by `id`
router.put('/:id', async (req, res) => {
  try {
    // Update a tag's name by its `id` with the data in req.body
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!tagData[0]) {
      res.status(404).json({ message: 'No tag found with this id!' }); // Send a 404 error if the tag is not found
      return;
    }

    res.status(200).json({ message: 'Tag updated successfully!' }); // Send a success message with a 200 status code
  } catch (err) {
    res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});

// DELETE a tag by `id`
router.delete('/:id', async (req, res) => {
  try {
    // Delete a tag by its `id`
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' }); // Send a 404 error if the tag is not found
      return;
    }

    res.status(200).json({ message: 'Tag deleted successfully!' }); // Send a success message with a 200 status code
  } catch (err) {
    res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});

module.exports = router; // Export the router to be used in other parts of the application

const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models'); // Import models for Product, Category, Tag, and ProductTag

// The `/api/products` endpoint

// GET all products
router.get('/', async (req, res) => {
  try {
    // Find all products and include associated Category and Tag data
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(productData); // Send the retrieved products as JSON with a 200 status code
  } catch (err) {
    res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});

// GET a single product by `id`
router.get('/:id', async (req, res) => {
  try {
    // Find a single product by its `id` and include associated Category and Tag data
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' }); // Send a 404 error if the product is not found
      return;
    }

    res.status(200).json(productData); // Send the retrieved product as JSON with a 200 status code
  } catch (err) {
    res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});

// POST to create a new product
router.post('/', async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  try {
    // Create a new product using the data in req.body
    const product = await Product.create(req.body);

    // If there are product tags, create pairings to bulk create in the ProductTag model
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr); // Bulk create ProductTag records
    }

    res.status(200).json(product); // Send the created product as JSON with a 200 status code
  } catch (err) {
    console.log(err);
    res.status(400).json(err); // Send a 400 error if something goes wrong
  }
});

// PUT to update a product by `id`
router.put('/:id', async (req, res) => {
  try {
    // Update product data based on `id`
    const product = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // If there are product tags, handle their associations
    if (req.body.tagIds && req.body.tagIds.length) {
      // Find all existing ProductTag records for this product
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id },
      });

      // Create a filtered list of new tag_ids that aren't already associated with the product
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      // Identify ProductTag records that need to be removed
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // Execute the removal and creation of ProductTag records
      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    res.status(200).json(product); // Respond with the updated product
  } catch (err) {
    res.status(400).json(err); // Send a 400 error if something goes wrong
  }
});

// DELETE a product by `id`
router.delete('/:id', async (req, res) => {
  try {
    // Delete one product by its `id` value
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' }); // Send a 404 error if the product is not found
      return;
    }

    res.status(200).json({ message: 'Product deleted successfully!' }); // Send a success message with a 200 status code
  } catch (err) {
    res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});

module.exports = router; // Export the router to be used in other parts of the application

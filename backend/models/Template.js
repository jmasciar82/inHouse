// models/Template.js
const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category_id: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency_id: { type: String, required: true },
    available_quantity: { type: Number, required: true },
    pictures: [{ source: String }],
    condition: { type: String, default: 'new' },
    listing_type_id: { type: String, default: 'bronze' }
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;

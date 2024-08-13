// routes/templates.js
const express = require('express');
const Template = require('../models/Template');
const router = express.Router();

// Obtener todas las plantillas
router.get('/', async (req, res) => {
    try {
        const templates = await Template.find();
        res.json(templates);
    } catch (error) {
        res.status(500).send('Error al obtener las plantillas');
    }
});

// Obtener una plantilla por ID
router.get('/:id', async (req, res) => {
    try {
        const template = await Template.findById(req.params.id);
        if (!template) {
            return res.status(404).send('Plantilla no encontrada');
        }
        res.json(template);
    } catch (error) {
        res.status(500).send('Error al obtener la plantilla');
    }
});

// Crear una nueva plantilla
router.post('/', async (req, res) => {
    try {
        const newTemplate = new Template(req.body);
        const savedTemplate = await newTemplate.save();
        res.status(201).json(savedTemplate);
    } catch (error) {
        res.status(500).send('Error al crear la plantilla');
    }
});

// Actualizar una plantilla existente
router.put('/:id', async (req, res) => {
    try {
        const updatedTemplate = await Template.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTemplate) {
            return res.status(404).send('Plantilla no encontrada');
        }
        res.json(updatedTemplate);
    } catch (error) {
        res.status(500).send('Error al actualizar la plantilla');
    }
});

// Eliminar una plantilla
router.delete('/:id', async (req, res) => {
    try {
        const deletedTemplate = await Template.findByIdAndDelete(req.params.id);
        if (!deletedTemplate) {
            return res.status(404).send('Plantilla no encontrada');
        }
        res.send('Plantilla eliminada');
    } catch (error) {
        res.status(500).send('Error al eliminar la plantilla');
    }
});

module.exports = router;

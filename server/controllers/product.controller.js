const { request } = require("express");
const { model } = require("mongoose");

const Wine = require("../models/product.models");

const createWine = (req, res) => {
  Wine.create(req.body)
    .then((newWine) => res.json(newWine))
    .catch((err) => res.status(400).json(err));
};

const showWine = (req, res) => {
  Wine.find({})
    // .collation({ locale: "en", strength: 2 })
    // .sort({ petType: 1 })
    .then((allWine) => res.json(allWine))
    .catch((err) => res.status(400).json(err));
};

const showOneWine = (req, res) => {
  Wine.findOne({ _id: req.params._id })
    .then((oneWine) => res.json(oneWine))
    .catch((err) => res.status(400).json(err));
};

const updateWine = (req, res) => {
  Wine.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedWine) => res.json(updatedWine))
    .catch((err) => res.status(400).json(err));
};

const deleteWine = (req, res) => {
  wine.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  showWine,
  showOneWine,
  createWine,
  updateWine,
  deleteWine,
};

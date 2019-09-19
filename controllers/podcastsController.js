const Podcasts = require('../models/podcastModel.js');
const API_KEY = process.env.REACT_APP_LISTEN_API_KEY;
const axios = require('axios');

const PodcastsController = {
  indexPopular: async (req, res) => {
    console.log(API_KEY)
    try {
      const popularPodcasts = await axios.get(
        'https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us&safe_mode=1',
        { headers: { 'X-ListenAPI-Key': API_KEY } }
      );
      res.json(popularPodcasts);
    } catch (err) {
      console.log(err);
    }
  },

  index: async (req, res) => {
    try {
      const podcasts = await Podcasts.find({});
      res.json(podcasts);
    } catch (err) {
      console.log(err);
    }
  },

  show: async (req, res) => {
    try {
      const podcastId = req.params.id;
      const podcast = await Podcasts.findById(podcastId);
      res.json(podcast);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  create: async (req, res) => {
    try {
      const newPodcast = req.body;

      const savedPodcast = await Podcasts.create(newPodcast);

      res.json(savedPodcast);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const podcastId = req.params.id;
      const updatedPodcast = req.body;
      const savedPodcast = await Podcasts.findByIdAndUpdate(
        podcastId,
        updatedPodcast,
        {
          new: true
        }
      );
      res.json(savedPodcast);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const podcastId = req.params.id;
      await Podcasts.findByIdAndRemove(podcastId);
      res.json({
        msg: 'Successfully Deleted'
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = PodcastsController;

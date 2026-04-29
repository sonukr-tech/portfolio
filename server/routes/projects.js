const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

const defaultProjects = [
  {
    title: 'E-Learning Platform with AI Tutor',
    description: 'A scalable, cloud-native e-learning platform leveraging AWS services to deliver personalized education through an integrated AI tutor.',
    tags: ['react', 'nodejs', 'mongodb', 'aws', 'ai'],
    githubUrl: 'https://github.com/sonukr-tech/Learning-Hub',
    liveUrl: '',
    order: 1,
    featured: true
  },
  {
    title: 'Grocery Management System',
    description: 'A software solution designed to automate and streamline inventory, sales, customer orders, and staff management for retail grocery stores.',
    tags: ['react', 'nodejs', 'mongodb'],
    githubUrl: 'https://github.com/sonukr-tech/Online-Grocery-Shop',
    liveUrl: '',
    order: 2,
    featured: true
  },
  {
    title: 'Bike and Car Rental System',
    description: 'A web-based platform that streamlines vehicle booking by allowing users to check real-time availability, secure reservations, and process payments, while enabling admins to manage inventory and bookings.',
    tags: ['react', 'nodejs', 'mongodb'],
    githubUrl: 'https://github.com/sonukr-tech/Bike-and-Car-Rental-System',
    liveUrl: '',
    order: 3,
    featured: true
  }
];

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    let projects = await Project.find().sort({ order: 1 });

    if (projects.length === 0) {
      projects = await Project.insertMany(defaultProjects);
    }

    res.json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

// POST /api/projects
router.post('/', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;
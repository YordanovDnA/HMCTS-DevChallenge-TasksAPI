// seeder.js
require('dotenv').config();
const mongoose = require('mongoose');
const Task = require('./modells/task'); 

const tasks = [
  {
    title: 'Prepare client meeting',
    description: 'Create the agenda and prepare notes.',
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days later
    status: 'Pending',
  },
  {
    title: 'Finish landing page design',
    description: 'Work on Figma designs.',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    status: 'In Progress',
  },
  {
    title: 'Deploy new API version',
    description: 'Push v2.0 to production servers.',
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    status: 'Pending',
  },
  {
    title: 'Fix mobile responsiveness',
    description: 'CSS fixes for iPhone 13.',
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    status: 'On Hold',
  },
  {
    title: 'QA testing',
    description: 'Regression testing before release.',
    dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
    status: 'Pending',
  },
  {
    title: 'Write blog post',
    description: 'New blog post about the tech stack.',
    dueDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    status: 'Completed',
  },
  {
    title: 'Weekly team sync',
    description: 'Organize weekly Zoom call.',
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    status: 'Pending',
  },
  {
    title: 'Create project roadmap',
    description: 'Outline goals for Q3.',
    dueDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
    status: 'In Progress',
  },
  {
    title: 'Update user documentation',
    description: 'Add screenshots to the user manual.',
    dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    status: 'Pending',
  },
  {
    title: 'Backup database',
    description: 'Monthly scheduled backup.',
    dueDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000),
    status: 'Pending',
  },
];

const seedTasks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
    
    await Task.deleteMany(); // Clear all tasks first (optional)
    console.log('Old tasks removed.');

    await Task.insertMany(tasks);
    console.log('New tasks seeded successfully.');

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedTasks();

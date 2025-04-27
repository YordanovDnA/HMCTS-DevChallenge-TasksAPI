const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // Assuming you export app in server.js
const Task = require('../modells/task');

// Dummy Task Data
const dummyTask = {
  title: 'Test Task',
  description: 'Test Description',
  dueDate: new Date(),
};

let createdTaskId = null;

// Tests
describe('Tasks API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await Task.deleteMany();
  });

  it('should create a task', async () => {
    const res = await request(app)
      .post('/api/v1/ctm/tasks')
      .send(dummyTask);
      
    expect(res.statusCode).toBe(201);
    expect(res.body.data).toHaveProperty("_id");
    expect(res.body.data.title).toBe(dummyTask.title);
    createdTaskId = res.body._id;
  });

  it('should get all tasks', async () => {
    const res = await request(app).get('/api/v1/ctm/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a single task by ID', async () => {
    // First, create a task
    const task = await Task.create(dummyTask);

    const res = await request(app).get(`/api/v1/ctm/tasks/${task._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(task._id.toString());
  });

  it('should update the status of a task', async () => {
    const task = await Task.create(dummyTask);

    const res = await request(app)
      .patch(`/api/v1/ctm/tasks/${task._id}`)
      .send({ status: 'Completed' });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('Completed');
  });

  it('should delete a task', async () => {
    const task = await Task.create(dummyTask);

    const res = await request(app).delete(`/api/v1/ctm/tasks/${task._id}`);
    expect(res.statusCode).toBe(200);
  });

  it('should return 404 if task not found', async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app).get(`/api/v1/ctm/tasks/${fakeId}`);
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('This task was not found in the database.');
  });

  it('should return 400 for invalid task ID', async () => {
    const res = await request(app).get(`/api/v1/ctm/tasks/123`);
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Invalid Task ID format.');
  });
});

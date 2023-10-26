import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let tasks: Task[] = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task: Task = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };

    tasks.push(task);
    res.json(task);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

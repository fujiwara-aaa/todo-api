
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// 仮のデータ（初期は dueDate なし → 後でPRで追加予定）

 let todos = [
  { id: 1, title: '朝会の準備', completed: false, dueDate: '2026-02-22T00:00:00.000Z' },
  { id: 2, title: '営業データ取り込み', completed: true,  dueDate: '2026-02-20T00:00:00.000Z' }
 ];


app.get('/todos', (req, res) => {
  res.json(todos);
});


app.post('/todos', (req, res) => {
  const { title, dueDate } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  const next = { id: Date.now(), title, completed: false, dueDate: dueDate ?? null };
  todos.push(next);
  res.status(201).json(next);
});

app.patch('/todos/:id/toggle', (req, res) => {
  const id = Number(req.params.id);
  const t = todos.find(x => x.id === id);
  if (!t) return res.status(404).json({ error: 'not found' });
  t.completed = !t.completed;
  res.json(t);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`todo-api running on http://localhost:${PORT}`);
});

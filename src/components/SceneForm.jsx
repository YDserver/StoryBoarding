import { useState, useEffect } from 'react';
import { generateImage } from '../utils/generateImage';

function SceneForm({ onAdd, onUpdate, editing }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dialogue, setDialogue] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setDescription(editing.description);
      setDialogue(editing.dialogue);
      setImage(editing.image || '');
    } else {
      setTitle('');
      setDescription('');
      setDialogue('');
      setImage('');
    }
  }, [editing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scene = { title, description, dialogue, image };
    if (!image) {
      scene.image = await generateImage(title || description);
    }
    if (editing) {
      onUpdate(editing.id, scene);
    } else {
      onAdd(scene);
    }
    setTitle('');
    setDescription('');
    setDialogue('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="font-semibold mb-2">
        {editing ? 'Edit Scene' : 'Add Scene'}
      </h2>
      <div className="mb-2">
        <label className="block text-sm font-medium">Title</label>
        <input
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Dialogue</label>
        <textarea
          className="w-full border p-2 rounded"
          value={dialogue}
          onChange={(e) => setDialogue(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Image URL</label>
        <input
          className="w-full border p-2 rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        {editing ? 'Update' : 'Add'} Scene
      </button>
    </form>
  );
}

export default SceneForm;

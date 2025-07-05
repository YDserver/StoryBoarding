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
 gca3m9-codex/build-multi-scene-storyboard-app-with-pdf-export-and-vercel
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur p-4 rounded-lg shadow-lg border border-white/20"
    >
      <h2 className="font-semibold mb-4 text-lg text-white">
        {editing ? 'Edit Scene' : 'Add Scene'}
      </h2>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          className="w-full p-2 rounded-md bg-gray-900/50 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
 main
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
 gca3m9-codex/build-multi-scene-storyboard-app-with-pdf-export-and-vercel
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          className="w-full p-2 rounded-md bg-gray-900/50 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
 main
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
gca3m9-codex/build-multi-scene-storyboard-app-with-pdf-export-and-vercel
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Dialogue</label>
        <textarea
          className="w-full p-2 rounded-md bg-gray-900/50 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
 main
          value={dialogue}
          onChange={(e) => setDialogue(e.target.value)}
          required
        />
      </div>
 gca3m9-codex/build-multi-scene-storyboard-app-with-pdf-export-and-vercel
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input
          className="w-full p-2 rounded-md bg-gray-900/50 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"

          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
 gca3m9-codex/build-multi-scene-storyboard-app-with-pdf-export-and-vercel
      <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-4 py-2 rounded-md w-full"
        type="submit"
      >

        {editing ? 'Update' : 'Add'} Scene
      </button>
    </form>
  );
}

export default SceneForm;

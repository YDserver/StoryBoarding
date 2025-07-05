import { useState } from 'react';
import SceneForm from './components/SceneForm';
import SceneList from './components/SceneList';
import ScenePreview from './components/ScenePreview';
import PdfExporter from './components/PdfExporter';
import './index.css';

function App() {
  const [scenes, setScenes] = useState([]);
  const [editing, setEditing] = useState(null);

  const addScene = (scene) => {
    setScenes([...scenes, { ...scene, id: Date.now() }]);
  };

  const updateScene = (id, updated) => {
    setScenes(scenes.map((s) => (s.id === id ? { ...s, ...updated } : s)));
    setEditing(null);
  };

  const deleteScene = (id) => {
    setScenes(scenes.filter((s) => s.id !== id));
  };

  const startEdit = (scene) => {
    setEditing(scene);
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-slate-800 to-slate-900">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Storyboard Builder
      </h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="space-y-4">
          <SceneForm
            onAdd={addScene}
            onUpdate={updateScene}
            editing={editing}
          />
          <SceneList
            scenes={scenes}
            onEdit={startEdit}
            onDelete={deleteScene}
          />
          {scenes.length > 0 && <PdfExporter scenes={scenes} />}
        </div>
        <div>
          <ScenePreview scenes={scenes} />
        </div>
      </div>
    </div>
  );
}

export default App;

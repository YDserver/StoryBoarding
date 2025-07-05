function SceneList({ scenes, onEdit, onDelete }) {
  return (

    <div className="bg-white/10 backdrop-blur p-4 rounded-lg shadow-lg border border-white/20">
      <h2 className="font-semibold mb-4 text-white">Scenes</h2>
      {scenes.length === 0 && <p className="text-sm">No scenes yet.</p>}
      <ul>
        {scenes.map((scene) => (
          <li key={scene.id} className="border-b border-white/20 py-2 flex justify-between items-start">

            <div>
              <p className="font-medium">{scene.title}</p>
            </div>
            <div>
              <button
 
                className="text-purple-400 hover:text-purple-200 mr-2"
 
                onClick={() => onEdit(scene)}
              >
                Edit
              </button>
              <button
 
                className="text-red-400 hover:text-red-200"
 
                onClick={() => onDelete(scene.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SceneList;

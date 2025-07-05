function SceneList({ scenes, onEdit, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Scenes</h2>
      {scenes.length === 0 && <p className="text-sm">No scenes yet.</p>}
      <ul>
        {scenes.map((scene) => (
          <li key={scene.id} className="border-b py-2 flex justify-between items-start">
            <div>
              <p className="font-medium">{scene.title}</p>
            </div>
            <div>
              <button
                className="text-blue-500 mr-2"
                onClick={() => onEdit(scene)}
              >
                Edit
              </button>
              <button
                className="text-red-500"
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

function ScenePreview({ scenes }) {
  return (
    <div className="space-y-4">
      {scenes.map((scene, index) => (
        <div key={scene.id} className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">
            {index + 1}. {scene.title}
          </h3>
          {scene.image && (
            <img src={scene.image} alt="scene" className="w-full mb-2" />
          )}
          <p className="mb-1">{scene.description}</p>
          <p className="italic text-gray-600">{scene.dialogue}</p>
        </div>
      ))}
    </div>
  );
}

export default ScenePreview;

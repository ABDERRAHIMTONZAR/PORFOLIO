export default function Label({ nom, valeur }) {
  return (
    <div className="flex items-center space-x-2">
      <span className="font-bold text-gray-800">{nom}:</span>
      <span className="text-gray-500">{valeur}</span>
    </div>
  );
}
export default function Error({ error }) {
  return (
    <div>
     {error && <p className="mt-6 text-red-500">{error}</p>}
    </div>
  );
}
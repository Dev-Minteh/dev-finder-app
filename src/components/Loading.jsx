export default function Loading({ loading }) {
  return (
    <>
     {loading && <p className="mt-6">Loading...</p>}
    </>
  );
}
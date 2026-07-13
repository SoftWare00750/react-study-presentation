export default function ConceptCard({ title, description, children }) {
  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">{title}</h2>
        <p className="text-slate-600 mb-4">{description}</p>
        {children && (
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
            {children}
          </div>
        )}
      </div>
    </>
  );
}
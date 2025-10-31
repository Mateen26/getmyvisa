export default function PreApprovalCard({ title, description, documents }) {
  return (
    <div className="rounded-2xl border border-yellow-400 bg-yellow-50 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-red-900">{title}</h3>
      {description && <p className="mt-2 text-sm text-red-900/80">{description}</p>}
      <ul className="mt-4 space-y-2 text-sm text-red-900">
        {documents.map((doc) => (
          <li key={doc} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-red-900" aria-hidden />
            <span>{doc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


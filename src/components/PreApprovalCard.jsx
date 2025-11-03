export default function PreApprovalCard({ title, description, documents }) {
  return (
    <div className="rounded-2xl border border-[#8fc3ff]/40 bg-[#f0f6ff] p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[#0b1f40]">{title}</h3>
      {description && <p className="mt-2 text-sm text-[#0b1f40]/80">{description}</p>}
      <ul className="mt-4 space-y-2 text-sm text-[#0b1f40]">
        {documents.map((doc) => (
          <li key={doc} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#0074ff]" aria-hidden />
            <span>{doc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


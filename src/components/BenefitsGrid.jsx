export default function BenefitsGrid({ items, columns = 2 }) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid gap-4 ${columnClasses[columns] || columnClasses[2]}`}>
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-xl border border-[#cfe2ff] bg-white p-4 shadow-sm"
        >
          <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0074ff] text-sm font-semibold text-white">
            ✓
          </span>
          <p className="text-sm text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  );
}


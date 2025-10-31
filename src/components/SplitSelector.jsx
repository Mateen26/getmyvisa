'use client';

export default function SplitSelector({ options, active, onChange }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {options.map((option) => {
        const isActive = option.id === active;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            aria-pressed={isActive}
            className={`flex flex-col gap-3 rounded-2xl border-2 px-6 py-6 text-left transition cursor-pointer ${
              isActive
                ? 'border-yellow-500 bg-red-900 text-white shadow-lg'
                : 'border-red-100 bg-white text-slate-900 hover:border-red-200 hover:shadow-md'
            }`}
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-yellow-400">
              {option.badge}
            </span>
            <span className="text-2xl font-semibold">{option.title}</span>
            <span className={`text-sm leading-relaxed ${isActive ? 'text-red-50' : 'text-slate-600'}`}>
              {option.description}
            </span>
            {option.points && (
              <ul className="mt-3 space-y-2 text-sm">
                {option.points.map((point) => (
                  <li
                    key={point}
                    className={`flex items-start gap-2 ${isActive ? 'text-red-50' : 'text-slate-700'}`}
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </button>
        );
      })}
    </div>
  );
}


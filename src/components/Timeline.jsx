export default function Timeline({ steps }) {
  return (
    <ol className="relative ml-3 border-l border-red-200 pl-6">
      {steps.map((step, index) => (
        <li key={step.title} className="mb-8 last:mb-0">
          <div className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-sm font-semibold text-black">
            {index + 1}
          </div>
          <h4 className="text-base font-semibold text-red-900">{step.title}</h4>
          <p className="mt-1 text-sm text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}


export default function Timeline({ steps }) {
  return (
    <ol className="relative ml-3 border-l border-[#cfe2ff] pl-6">
      {steps.map((step, index) => (
        <li key={step.title} className="mb-8 last:mb-0">
          <div className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-[#0074ff] text-sm font-semibold text-white">
            {index + 1}
          </div>
          <h4 className="text-base font-semibold text-[#0b1f40]">{step.title}</h4>
          <p className="mt-1 text-sm text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}


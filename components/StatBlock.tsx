/**
 * Ligne de stats monospace séparées par des filets fins — bas du hero.
 */
export type Stat = { value: string; label: string };

export default function StatBlock({ stats }: { stats: Stat[] }) {
  return (
    <dl className="flex flex-col gap-4 font-mono sm:flex-row sm:gap-0">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex-1 py-1 sm:px-8 ${
            i > 0
              ? "border-t border-silver-300/70 pt-4 sm:border-t-0 sm:border-l sm:pt-1"
              : "sm:pl-0"
          }`}
        >
          <dd className="text-[0.95rem] font-medium tracking-[0.08em] text-graphite-900">
            {stat.value}
          </dd>
          <dt className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-silver-400">
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}

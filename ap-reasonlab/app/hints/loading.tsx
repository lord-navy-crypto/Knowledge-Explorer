export default function HintsLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-40 rounded-3xl bg-slate-200" />
      <div className="flex gap-2">
        <div className="h-9 w-24 rounded-full bg-slate-200" />
        <div className="h-9 w-28 rounded-full bg-slate-200" />
        <div className="h-9 w-24 rounded-full bg-slate-200" />
      </div>
      <div className="h-96 rounded-2xl bg-slate-100" />
    </div>
  );
}

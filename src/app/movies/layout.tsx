export default function MoviesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-1">...</div>
      {children}
    </div>
  );
}

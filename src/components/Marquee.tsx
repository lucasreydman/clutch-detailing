export function Marquee() {
  const items = [
    "Waterless wash",
    "Lawrence Park",
    "Ceramic coating",
    "Hoggs Hollow",
    "Plus+ interior",
    "Surrounding neighbourhoods",
    "No deposit",
    "Up to 500L saved",
  ];

  return (
    <div className="bg-forest text-bone overflow-hidden border-y border-bone/10 py-6">
      <div className="flex marquee gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="font-display text-3xl md:text-4xl tracking-tight inline-flex items-center gap-12">
            {item}
            <span className="text-sand">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

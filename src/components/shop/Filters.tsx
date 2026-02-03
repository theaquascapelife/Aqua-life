// components/shop/Filters.tsx
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const categories = [
  "Plants",
  "Fish",
  "Lights",
  "Filters",
  "Accessories",
];

export default function Filters() {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="rounded-xl border bg-white p-6 space-y-8">

        {/* Categories */}
        <div>
          <h3 className="mb-4 text-sm font-semibold">
            Categories
          </h3>
          <div className="space-y-3">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 text-sm"
              >
                <Checkbox />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <h3 className="mb-4 text-sm font-semibold">
            Price Range
          </h3>
          <Slider defaultValue={[0, 5000]} max={10000} step={100} />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>₹0</span>
            <span>₹10,000</span>
          </div>
        </div>

      </div>
    </aside>
  );
}

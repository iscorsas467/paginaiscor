import { ChevronDown } from "lucide-react";
import clsx from "clsx";

export default function AccordionHeader({
  icon,
  title,
  subtitle,
  open,
  color = "blue",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  open?: boolean;
  color?: "blue" | "green" | "purple" | "orange" | "red";
}) {
  const badgeMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-green-50 text-green-700",
    purple: "bg-purple-50 text-purple-700",
    orange: "bg-orange-50 text-orange-700",
    red: "bg-red-50 text-red-700",
  };
  return (
    <div
      className={clsx(
        "flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3",
        "hover:bg-gray-50 transition-shadow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(11,102,255,.28)]",
        open && "shadow-sm"
      )}
    >
      <span className={clsx("inline-grid h-9 w-9 place-items-center rounded-lg", badgeMap[color])}>
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-lg font-semibold leading-tight">{title}</div>
        {subtitle && (
          <div className="text-sm text-gray-500 truncate">{subtitle}</div>
        )}
      </div>
      <ChevronDown
        className={clsx("h-5 w-5 text-gray-500 transition-transform", open && "rotate-180")}
      />
    </div>
  );
}
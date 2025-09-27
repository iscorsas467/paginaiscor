"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, AnimatePresence } from "framer-motion";
import AccordionHeader from "./AccordionHeader";
import { Shield, GraduationCap, FolderCog, FileSearch, Briefcase } from "lucide-react";

const ICONS: Record<string, JSX.Element> = {
  sgsst: <Shield className="h-5 w-5" />,
  capacitacion: <GraduationCap className="h-5 w-5" />,
  consultoria: <FolderCog className="h-5 w-5" />,
  auditorias: <FileSearch className="h-5 w-5" />,
  otros: <Briefcase className="h-5 w-5" />,
};

export default function ServiceAccordionItem({
  value,
  color,
  title,
  subtitle,
  iconKey,
  items,
  href,
  openValue,
}: {
  value: string;
  color: "blue" | "green" | "purple" | "orange" | "red";
  title: string;
  subtitle?: string;
  iconKey: string;
  items: string[];
  href: string;
  openValue?: string;
}) {
  const isOpen = openValue === value;
  return (
    <Accordion.Item value={value} className="rounded-xl bg-transparent">
      <Accordion.Trigger asChild>
        <button className="w-full text-left">
          <AccordionHeader
            icon={ICONS[iconKey] ?? ICONS["otros"]}
            title={title}
            subtitle={subtitle}
            color={color}
            open={isOpen}
          />
        </button>
      </Accordion.Trigger>

      <Accordion.Content forceMount>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="px-4 pb-4 pt-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {items.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-transparent bg-white px-4 py-3 text-sm text-gray-700
                               hover:bg-gray-50 hover:border-gray-200 transition"
                  >
                    {s}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-end">
                <a
                  href={href}
                  className="text-sm font-semibold text-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(11,102,255,.28)] rounded-md px-2 py-1"
                  aria-label={`Ver detalle de ${title}`}
                >
                  Ver detalle →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Accordion.Content>
    </Accordion.Item>
  );
}
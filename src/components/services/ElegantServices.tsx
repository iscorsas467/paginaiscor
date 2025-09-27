"use client";
import { useEffect, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  GraduationCap, 
  FolderCog, 
  FileSearch, 
  CheckCircle2,
  ChevronDown 
} from "lucide-react";
import clsx from "clsx";

// Mapeo de íconos por categoría
const ICONS: Record<string, JSX.Element> = {
  sgsst: <ShieldCheck className="h-5 w-5" />,
  capacitacion: <GraduationCap className="h-5 w-5" />,
  consultoria: <FolderCog className="h-5 w-5" />,
  auditorias: <FileSearch className="h-5 w-5" />,
};

// Mapeo de colores por categoría
const COLOR_MAP = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    stripe: "bg-blue-600",
    ring: "focus-visible:ring-blue-500/20",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
    stripe: "bg-green-600",
    ring: "focus-visible:ring-green-500/20",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200",
    stripe: "bg-purple-600",
    ring: "focus-visible:ring-purple-500/20",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    stripe: "bg-orange-600",
    ring: "focus-visible:ring-orange-500/20",
  },
};

interface ServiceItem {
  key: "sgsst" | "capacitacion" | "consultoria" | "auditorias";
  title: string;
  subtitle?: string;
  color: "blue" | "green" | "purple" | "orange";
  items: string[];
  href: string;
  count?: number;
  order?: number;
}

interface ElegantServicesProps {
  data: ServiceItem[];
}

export default function ElegantServices({ data }: ElegantServicesProps) {
  const [openValue, setOpenValue] = useState<string>("sgsst");

  // Leer hash al montar y sincronizar
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && data.some(item => item.key === hash)) {
      setOpenValue(hash);
    }
  }, [data]);

  // Sincronizar hash cuando cambia el acordeón
  useEffect(() => {
    if (openValue) {
      window.history.replaceState(null, "", `#${openValue}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [openValue]);

  // Ordenar categorías por order si existe, sino A→Z
  const sortedData = [...data].sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <Accordion.Root
      type="single"
      collapsible
      value={openValue}
      onValueChange={setOpenValue}
      className="space-y-2"
    >
      {sortedData.map((category) => {
        const colors = COLOR_MAP[category.color];
        const isOpen = openValue === category.key;
        
        // Ordenar subservicios A→Z
        const sortedItems = [...category.items].sort((a, b) => a.localeCompare(b));

        return (
          <Accordion.Item key={category.key} value={category.key} className="group">
            <Accordion.Trigger asChild>
              <button className="w-full text-left focus:outline-none">
                <div className={clsx(
                  "relative rounded-xl border border-gray-200 bg-white px-6 py-4 hover:bg-gray-50 shadow-sm transition-all duration-200 cursor-pointer",
                  colors.ring
                )}>
                  {/* Franja de color en el borde izquierdo */}
                  <div className={clsx("absolute left-0 top-0 h-full w-1 rounded-l-xl", colors.stripe)} />
                  
                  <div className="flex items-center justify-between pl-4">
                    <div className="flex items-center space-x-4">
                      {/* Badge con ícono */}
                      <div className={clsx("h-10 w-10 inline-grid place-items-center rounded-lg", colors.bg)}>
                        {ICONS[category.key] || <ShieldCheck className="h-5 w-5" />}
                      </div>
                      
                      {/* Título y subtítulo */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-500 truncate">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Chevron */}
                    <ChevronDown 
                      className={clsx(
                        "h-5 w-5 text-gray-400 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )} 
                    />
                  </div>
                </div>
              </button>
            </Accordion.Trigger>

            <Accordion.Content forceMount>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-6 pt-4"
                  >
                    {/* Contador de servicios */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600">
                        {category.count || category.items.length} servicios especializados
                      </p>
                    </div>

                    {/* Grid de subservicios */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {sortedItems.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.2 }}
                          className="flex items-center space-x-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex justify-end">
                      <a
                        href={category.href}
                        className="text-sm font-semibold text-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 rounded-md px-2 py-1 transition-colors duration-200"
                        aria-label={`Ver detalle de ${category.title}`}
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
      })}
    </Accordion.Root>
  );
}
"use client";
import { useEffect, useMemo, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import ServiceAccordionItem from "./ServiceAccordionItem";

export default function ServicesAccordion({ data }:{ 
  data: Array<{ key:string; title:string; subtitle?:string; color:any; items:string[]; href:string }>
}) {
  const [open, setOpen] = useState<string>("");

  useEffect(() => {
    const h = (window.location.hash || "").replace("#", "");
    if (h) setOpen(h);
  }, []);

  useEffect(() => {
    if (open) history.replaceState(null, "", `#${open}`);
  }, [open]);

  const items = useMemo(() => data ?? [], [data]);

  return (
    <Accordion.Root type="single" collapsible value={open} onValueChange={setOpen} className="space-y-3">
      {items.map((c) => (
        <ServiceAccordionItem
          key={c.key}
          value={c.key}
          openValue={open}
          color={c.color}
          title={c.title}
          subtitle={c.subtitle}
          iconKey={c.key}
          items={c.items}
          href={c.href}
        />
      ))}
    </Accordion.Root>
  );
}


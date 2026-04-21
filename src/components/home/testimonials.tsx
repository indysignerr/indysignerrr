"use client";

import { motion } from "framer-motion";
import {
  TestimonialsColumn,
  type ColumnTestimonial,
} from "@/components/ui/testimonials-columns-1";
import { projects } from "@/lib/projects";

function buildTestimonials(): ColumnTestimonial[] {
  return projects.map((p) => {
    const author = p.testimonial.author ?? p.name;
    const role = p.testimonial.author ? p.name : p.category;
    const initials = author
      .split(/[\s,]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() ?? "")
      .join("");

    return {
      text: p.testimonial.quote,
      name: author,
      role,
      initials,
    };
  });
}

export function Testimonials() {
  const items = buildTestimonials();
  const repeated: ColumnTestimonial[] = [...items, ...items];
  const firstColumn = repeated.slice(0, 4);
  const secondColumn = repeated.slice(4, 8);
  const thirdColumn = repeated.slice(2, 6);

  return (
    <section className="relative bg-sky-mist py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center"
        >
          <div className="inline-flex rounded-full border border-ocean-deep/15 bg-paper/70 px-4 py-1.5 backdrop-blur">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-deep">
              Ce qu'ils en disent
            </span>
          </div>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-ink">
            <em className="italic font-normal">Six clients.</em> Un seul constat.
          </h2>
          <p className="mt-5 text-lg text-ink-soft max-w-md">
            Les retours des projets passés — directs, non modifiés, signés.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={26} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={32}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={22}
          />
        </div>
      </div>
    </section>
  );
}

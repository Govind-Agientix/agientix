import { useEffect, useState, useRef } from "react";

const metrics = [
  {
    value: 70,
    suffix: "%",
    prefix: "30–",
    label: "Operational cost reduction",
  },
  {
    value: 8,
    suffix: " weeks",
    prefix: "",
    label: "Typical time to value",
  },
  {
    value: 300,
    suffix: "+",
    prefix: "",
    label: "AI agents built and growing",
  },
  {
    value: 90,
    suffix: "%",
    prefix: "",
    label: "Enterprise-wide adoption",
  },
];

function AnimatedCounter({ value, prefix, suffix, label }: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-3">
        <span className="gradient-text">
          {prefix}{count}{suffix}
        </span>
      </div>
      <p className="text-lg text-muted-foreground">{label}</p>
    </div>
  );
}

export function MetricsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Impact, by the numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real deployments. Here's what our customers achieve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <AnimatedCounter
              key={index}
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

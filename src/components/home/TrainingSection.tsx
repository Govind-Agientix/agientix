import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Type, 
  Image, 
  Layers, 
  Video, 
  AudioLines, 
  Activity, 
  Box,
  Shield,
  RefreshCw,
  CheckCircle,
  BarChart3,
  Users,
  ArrowRight
} from "lucide-react";

const serviceCards = [
  {
    title: "LLM Evaluation & Regression Testing",
    desc: "Make sure your agent stays accurate after every update. We run repeatable tests and track improvements over time.",
  },
  {
    title: "Preference Ranking (RLHF-style)",
    desc: "We compare responses side-by-side and label which one is best. This creates training data that improves how your agent responds.",
  },
  {
    title: "Red Teaming & Safety Testing",
    desc: "We test edge cases, prompt injection, and policy violations. Your agent becomes safer before it reaches production.",
  },
  {
    title: "Structured Data Labeling",
    desc: "Precise, consistent labels across documents, text, vision, audio, and 3D—aligned to your real workflows.",
  },
  {
    title: "QA System & Consistency Checks",
    desc: "Double reviews and spot checks keep labels consistent—so improvements are measurable and repeatable.",
  },
];

const capabilityCards = [
  {
    icon: FileText,
    title: "Document Annotation",
    desc: "Entity extraction, table labeling, grounded Q&A, and complex form understanding.",
  },
  {
    icon: Type,
    title: "Text Annotation",
    desc: "Intent, entities, classification, moderation, and retrieval relevance labeling.",
  },
  {
    icon: Image,
    title: "Image Annotation",
    desc: "Bounding boxes, polygons, keypoints, classification, and attributes.",
  },
  {
    icon: Layers,
    title: "Segmentation",
    desc: "Pixel-level semantic, instance, and panoptic masks.",
  },
  {
    icon: Video,
    title: "Video Annotation",
    desc: "Object tracking, temporal labeling, action recognition, and QA.",
  },
  {
    icon: AudioLines,
    title: "Speech & Audio Labeling",
    desc: "Transcription, diarization, timestamps, and event labeling.",
  },
  {
    icon: Activity,
    title: "Time Series Annotation",
    desc: "Event and anomaly labeling for sensor and operational data.",
  },
  {
    icon: Box,
    title: "Point Cloud Annotation",
    desc: "3D cuboids, segmentation, tracking, and sensor fusion.",
  },
];

const improvementBullets = [
  "We capture real runs (with redaction) and queue the hard cases",
  "Annotators label what 'good' looks like and catch failures early",
  "We test updates before release so quality goes up, not down",
];

export function TrainingSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built to <span className="gradient-text">Improve Over Time</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-3">
            Every AI Agent we build includes annotators and AI trainers. They label training data, validate outputs, and handle complex documents—so your agent becomes more accurate, safer, and more reliable as usage grows.
          </p>
          <p className="text-sm text-muted-foreground">
            Included in every build: labeling, evaluation, QA, and safety testing to improve real-world performance.
          </p>
        </div>

        {/* Row A: 5 Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 border hover-lift motion-safe:transition-all motion-safe:duration-300"
            >
              <h3 className="font-semibold text-sm mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Row B: Two-column block */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT Column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Built with an Improvement Loop
              </h3>
              <p className="text-muted-foreground mb-6">
                We ship agents with a clear feedback loop. Our annotators review edge cases, score outputs, and create training data that improves behavior over time.
              </p>
              <ul className="space-y-3 mb-6">
                {improvementBullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">
                Best for: Document Agents and Integration Agents.
              </p>
            </div>

            {/* Callout Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Future-proof by design</h4>
                  <p className="text-sm text-muted-foreground">
                    This approach helps your agent keep improving as your business grows and as new model capabilities become available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT Column */}
          <div>
            <h4 className="font-display text-xl font-bold mb-2">
              Structured Data Labeling Capabilities
            </h4>
            <p className="text-muted-foreground text-sm mb-6">
              Our team supports the labeling and validation work your AI needs to understand real-world data and complex documents.
            </p>

            {/* 8 Capability Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {capabilityCards.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 motion-safe:transition-colors motion-safe:duration-200 hover:bg-secondary/80"
                  >
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">{cap.title}</h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Control Callout */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">You stay in control</h4>
                  <p className="text-sm text-muted-foreground">
                    We work inside your environment. You control access, workflow, and approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                Request a labeling quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Talk to our AI trainers</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            Annotators are included in every build to reach accuracy targets and keep agents improving after launch.
          </p>
        </div>
      </div>
    </section>
  );
}

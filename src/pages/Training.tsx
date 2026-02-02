import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  ArrowRight
} from "lucide-react";

const heroBullets = [
  "Improve Document Agents with reliable extraction and validation labels",
  "Improve Integration Agents with correct tool actions and workflow checks",
  "Measure progress with repeatable evaluation cycles",
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

const Training = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Done-for-You AI Training Teams{" "}
                <span className="gradient-text">in Your Tools</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Every AI Agent we build includes AI Trainers and Data Labelers. They label training data, validate outputs, and improve reliability—so your AI agent gets better safely over time.
              </p>
              <ul className="text-left max-w-xl mx-auto space-y-3 mb-10">
                {heroBullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Talk to our AI trainers <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Request a labeling quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Structured Data Labeling Capabilities */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                Structured Data Labeling Capabilities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our team supports the labeling and validation work your AI needs to understand real-world data and complex documents.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {capabilityCards.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border hover:bg-secondary/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm mb-1">{cap.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Control Callout */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">You stay in control</h3>
                    <p className="text-muted-foreground">
                      We work inside your environment. You control access, workflow, and approvals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Improvement Loop Block */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                  Built with an Improvement Loop
                </h2>
                <p className="text-muted-foreground mb-6">
                  We ship agents with a clear feedback loop. Our annotators review edge cases, score outputs, and create training data that improves behavior over time.
                </p>
                <ul className="space-y-3 mb-6">
                  {improvementBullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground">
                  Best for: Document Agents and Integration Agents.
                </p>
              </div>

              {/* Future-proof Callout */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <RefreshCw className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Future-proof by design</h3>
                    <p className="text-muted-foreground">
                      This approach helps your agent keep improving as your business grows and as new model capabilities become available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding">
          <div className="container-wide text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Ready to improve your AI agents?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Annotators are included in every build to reach accuracy targets and keep agents improving after launch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Talk to our AI trainers <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request a labeling quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Training;

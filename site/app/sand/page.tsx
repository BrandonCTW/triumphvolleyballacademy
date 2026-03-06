import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Sun } from "lucide-react";

export default function SandPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        <Image
          src="/photos/tva-sand-action-hero.jpg"
          alt="TVA athletes on the sand court"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.3 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.90) 0%, rgba(30,45,92,0.70) 50%, rgba(30,45,92,0.88) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
            <Sun size={14} />
            Sand Volleyball
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            TVA Beach Academy
          </h1>
          <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Beach Academy returns every summer for boys and girls. Same coaches. Same faith. On the sand.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl" style={{ backgroundColor: "rgba(61,191,176,0.15)", border: "1px solid rgba(61,191,176,0.3)" }}>
            <Calendar size={20} style={{ color: "#3DBFB0" }} />
            <span className="text-white font-semibold">Registration Coming Soon</span>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/beach-new-1.jpg"
                  alt="TVA sand volleyball"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6" style={{ color: "#1E2D5C" }}>
                What to Expect
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#374151" }}>
                Beach volleyball is its own discipline. Sand changes everything. Positioning, footwork, how you read the game - none of it transfers automatically from indoors. TVA Beach Academy brings focused summer training for boys and girls across all experience levels, with coaches who know how to develop athletes on the beach court. Faith stays part of every session.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert sand volleyball coaching from TVA staff",
                  "Skill development for all experience levels",
                  "Faith integrated into every session",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#3DBFB0" }} />
                    <span className="text-base" style={{ color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 text-center overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        <Image
          src="/photos/beach-new-2.jpg"
          alt="TVA sand courts"
          fill
          className="object-cover object-center"
          style={{ opacity: 0.22 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.88) 0%, rgba(30,45,92,0.72) 50%, rgba(30,45,92,0.9) 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white mb-4">Volleyball Doesn&apos;t Stop in Summer</h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Beach Academy runs each summer. The rest of the year, TVA Boys and Girls Indoor programs train through the competitive season. Same coaches. Same mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/boys-indoor"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#3DBFB0" }}
            >
              Boys Indoor <ArrowRight size={18} />
            </Link>
            <Link
              href="/girls-indoor"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 border-2 hover:bg-white/10"
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}
            >
              Girls Indoor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

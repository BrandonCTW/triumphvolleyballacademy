import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, DollarSign, ArrowRight, Sun } from "lucide-react";

const schedule = [
  { division: "13-16 Girls", time: "6:00 - 8:00pm", price: "$550" },
  { division: "17-18 Girls", time: "6:00 - 8:00pm", price: "$550" },
  { division: "11-16 Boys", time: "6:00 - 7:30pm", price: "$450" },
  { division: "17-18 Boys", time: "6:00 - 7:30pm", price: "$450" },
  { division: "10-13 Girls and Boys", time: "6:00 - 7:30pm", price: "$450" },
];

export default function SandPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        {/* Background beach photo */}
        <Image
          src="/photos/TVA-in-sand.jpeg"
          alt="TVA athletes on the sand court"
          fill
          unoptimized
          priority
          className="object-cover object-center"
          style={{ opacity: 0.2 }}
        />
        {/* Dark overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.90) 0%, rgba(30,45,92,0.70) 50%, rgba(30,45,92,0.88) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "rgba(244,160,122,0.2)", color: "#F4A07A" }}>
                <Sun size={14} />
                Summer 2025
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
                TVA Beach
                <br />
                <span style={{ color: "#3DBFB0" }}>Academy 2025</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
                Experience sand volleyball training with the TVA family. A summer program built for boys and girls who want to develop their beach game in a faith-centered environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <Calendar size={18} style={{ color: "#3DBFB0" }} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>Dates</p>
                    <p className="text-sm font-bold text-white">May 27 - July 17, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <Clock size={18} style={{ color: "#F4A07A" }} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>Days</p>
                    <p className="text-sm font-bold text-white">Tuesdays and Thursdays</p>
                  </div>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdMfh_o_ZMGGGuGrCp2Pe6xgjgshrWBiyJ6xAZR3MgB3VAGPA/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#3DBFB0" }}
              >
                Register Now <ArrowRight size={20} />
              </a>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-40" style={{ backgroundColor: "#F4A07A" }} />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/sand-beach-academy-2025.webp"
                  alt="TVA Beach Academy 2025"
                  width={600}
                  height={450}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "rgba(61,191,176,0.15)", color: "#3DBFB0" }}>
              <DollarSign size={14} />
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#1E2D5C" }}>
              Schedule and Pricing
            </h2>
            <p className="text-lg" style={{ color: "#6b7280" }}>
              Sessions run Tuesday and Thursday, May 27 through July 17, 2025.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Table */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-3 px-6 py-4 text-sm font-bold uppercase tracking-wider" style={{ backgroundColor: "#1E2D5C", color: "#3DBFB0" }}>
                <span>Division</span>
                <span className="text-center">Time</span>
                <span className="text-right">Price</span>
              </div>
              {schedule.map((row, i) => (
                <div
                  key={row.division}
                  className="grid grid-cols-3 px-6 py-5 items-center border-b last:border-b-0 transition-colors hover:bg-gray-50"
                  style={{ borderColor: "#f3f4f6", backgroundColor: i % 2 === 0 ? "white" : "#fafafa" }}
                >
                  <div>
                    <span className="font-bold text-base" style={{ color: "#1E2D5C" }}>
                      {row.division}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(61,191,176,0.1)", color: "#1E2D5C" }}>
                      <Clock size={12} style={{ color: "#3DBFB0" }} />
                      {row.time}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black" style={{ color: "#3DBFB0" }}>
                      {row.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Register CTA below table */}
            <div className="mt-10 text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdMfh_o_ZMGGGuGrCp2Pe6xgjgshrWBiyJ6xAZR3MgB3VAGPA/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-white text-xl transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#3DBFB0" }}
              >
                Register Now <ArrowRight size={22} />
              </a>
              <p className="text-sm mt-4" style={{ color: "#9ca3af" }}>
                Spots are limited - register early to secure your place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/TVA-in-sand.jpeg"
                  alt="TVA in sand volleyball"
                  width={600}
                  height={450}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6" style={{ color: "#1E2D5C" }}>
                What to Expect
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#374151" }}>
                TVA Beach Academy is a summer training program designed to help athletes develop their sand volleyball skills in a focused, faith-centered environment. Whether you are new to beach volleyball or looking to sharpen your game, our coaches will challenge and develop you.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert sand volleyball coaching from TVA staff",
                  "Skill development for all experience levels",
                  "Both individual technique and team play",
                  "Faith integrated into every session",
                  "Strong community with teammates and families",
                  "Central Valley location - convenient for all",
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

      {/* Bottom CTA */}
      <section className="relative py-16 text-center overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        {/* Background courts action photo */}
        <Image
          src="/photos/tva-sand-courts-action.jpg"
          alt="TVA sand courts"
          fill
          unoptimized
          className="object-cover object-center"
          style={{ opacity: 0.2 }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.88) 0%, rgba(30,45,92,0.72) 50%, rgba(30,45,92,0.9) 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Sun size={40} className="mx-auto mb-6" style={{ color: "#F4A07A" }} />
          <h2 className="text-4xl font-black text-white mb-4">
            Summer 2025 Starts Soon
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Don't miss your spot in TVA Beach Academy 2025. Registration is now open.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdMfh_o_ZMGGGuGrCp2Pe6xgjgshrWBiyJ6xAZR3MgB3VAGPA/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-white text-xl transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#3DBFB0" }}
          >
            Register Now <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </div>
  );
}

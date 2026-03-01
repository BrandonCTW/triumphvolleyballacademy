import Image from "next/image";
import { Trophy, Users, Heart } from "lucide-react";

export default function GirlsIndoorPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        {/* Background team photo */}
        <Image
          src="/photos/girls-team.png"
          alt="TVA girls team"
          fill
          unoptimized
          className="object-cover object-center"
          style={{ opacity: 0.18 }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.9) 0%, rgba(30,45,92,0.72) 50%, rgba(30,45,92,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 60%, #F4A07A 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "rgba(244,160,122,0.2)", color: "#F4A07A" }}>
                Girls Program
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Girls <span style={{ color: "#3DBFB0" }}>Indoor</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
                Elite competitive indoor volleyball for girls youth athletes in the Central Valley. TVA builds champions on and off the court through faith-centered coaching and high-quality training.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
                  Competitive Training
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
                  Club Achievements
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
                  Faith-Based Culture
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/girls-team.png"
                  alt="Girls volleyball team"
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

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-black mb-6" style={{ color: "#1E2D5C" }}>
                Program Overview
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#374151" }}>
                TVA Girls Indoor is a competitive club volleyball program dedicated to developing elite young athletes who compete with excellence and live with purpose. Our coaching staff provides high-quality instruction while building a culture rooted in Christian values.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#374151" }}>
                We believe in developing the whole athlete - not just the volleyball player. Girls in the TVA program learn what it means to pursue excellence in sport while growing in faith, character, and leadership.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#374151" }}>
                TVA is a family. Every player, parent, and coach is part of a community that supports one another both on and off the court. We are more than a club - we are a family built on faith.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <Users size={32} className="mb-4" style={{ color: "#F4A07A" }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1E2D5C" }}>What to Expect</h3>
              <ul className="space-y-3">
                {[
                  "Elite competitive training",
                  "Skill development at all levels",
                  "Faith-integrated coaching",
                  "Strong team culture",
                  "Character and leadership growth",
                  "Community and family atmosphere",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#374151" }}>
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#F4A07A" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Team Photo and Flyer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/photos/girls-team.png"
                alt="Girls team group photo"
                width={600}
                height={400}
                unoptimized
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/photos/girls-flyer.png"
                alt="Girls program flyer"
                width={600}
                height={400}
                unoptimized
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Club Achievements */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <Trophy size={36} style={{ color: "#F4A07A" }} />
            <h2 className="text-4xl font-black" style={{ color: "#1E2D5C" }}>
              Club Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy size={28} color="white" />,
                color: "#3DBFB0",
                title: "Competitive Excellence",
                description:
                  "TVA Girls Indoor competes at the highest levels in the Central Valley, developing players who go on to play at the high school and collegiate level.",
              },
              {
                icon: <Heart size={28} color="white" />,
                color: "#F4A07A",
                title: "Character Development",
                description:
                  "We measure success not just in wins, but in the character of our athletes. Faith, integrity, and leadership are developed through every practice and competition.",
              },
              {
                icon: <Users size={28} color="white" />,
                color: "#1E2D5C",
                title: "Team Community",
                description:
                  "The bonds formed at TVA last a lifetime. Our players and families become part of a faith community that supports one another beyond the sport.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1E2D5C" }}>
                  {item.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faith quote CTA */}
      <section className="relative py-20 text-center overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        {/* Background team photo */}
        <Image
          src="/photos/girls-team.png"
          alt="TVA girls team"
          fill
          unoptimized
          className="object-cover object-center"
          style={{ opacity: 0.18 }}
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
          <blockquote className="text-2xl md:text-3xl font-bold italic text-white mb-4">
            "Whatever you do, do it all for the glory of God."
          </blockquote>
          <p className="text-lg mb-10" style={{ color: "#3DBFB0" }}>
            1 Corinthians 10:31
          </p>
          <a
            href="/about"
            className="inline-block px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "#3DBFB0" }}
          >
            Learn More About TVA
          </a>
        </div>
      </section>
    </div>
  );
}

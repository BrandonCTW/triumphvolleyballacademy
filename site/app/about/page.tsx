import Image from "next/image";
import Link from "next/link";
import { Heart, Target, Users, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        {/* Background team photo */}
        <Image
          src="/photos/boys-team.png"
          alt="TVA team"
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
              "linear-gradient(135deg, rgba(30,45,92,0.85) 0%, rgba(30,45,92,0.75) 50%, rgba(30,45,92,0.9) 100%)",
          }}
        />
        {/* Teal accent */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #3DBFB0 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
            Who We Are
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            About TVA
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            Faith. Community. Excellence. These are not just words - they are the foundation of everything we do at Triumph Volleyball Academy.
          </p>
        </div>
      </section>

      {/* Vision & Mission with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: "#F4A07A" }} />
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/photos/vision-and-mission.png"
                  alt="TVA Vision and Mission"
                  width={700}
                  height={500}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#3DBFB0" }}>
                    <Target size={20} color="white" />
                  </div>
                  <h2 className="text-3xl font-black" style={{ color: "#1E2D5C" }}>Our Vision</h2>
                </div>
                <blockquote
                  className="text-xl font-medium italic leading-relaxed"
                  style={{ color: "#374151", borderLeft: "4px solid #3DBFB0", paddingLeft: "1.5rem" }}
                >
                  "To see the world impacted for Jesus Christ through the influence of athletes and coaches and the sport of volleyball."
                </blockquote>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#F4A07A" }}>
                    <Heart size={20} color="white" />
                  </div>
                  <h2 className="text-3xl font-black" style={{ color: "#1E2D5C" }}>Our Mission</h2>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: "#374151" }}>
                  Develop student athletes physically, mentally, and spiritually through high-quality volleyball training in a Christian environment.
                </p>
              </div>

              <div className="p-6 rounded-2xl" style={{ backgroundColor: "#1E2D5C" }}>
                <BookOpen size={24} className="mb-3" style={{ color: "#3DBFB0" }} />
                <p className="text-lg font-semibold italic text-white mb-2">
                  "Whatever you do, do it all for the glory of God."
                </p>
                <p className="text-sm font-bold" style={{ color: "#3DBFB0" }}>
                  1 Corinthians 10:31
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faith Values */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#1E2D5C" }}>
              Our Core Values
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
              At TVA, we believe athletics is a platform to impact the world for Jesus Christ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={28} color="white" />,
                color: "#3DBFB0",
                title: "Faith First",
                description:
                  "Every athlete and coach serves a higher purpose through sport. We integrate Christian values into training and team culture, creating an environment where faith grows alongside athletic skill.",
              },
              {
                icon: <Users size={28} color="white" />,
                color: "#1E2D5C",
                title: "Community",
                description:
                  "TVA is a family, not just a club. We build genuine relationships and support each other on and off the court. Our community extends beyond volleyball into life.",
              },
              {
                icon: <Target size={28} color="white" />,
                color: "#F4A07A",
                title: "Excellence",
                description:
                  "We push athletes to compete at their highest level. Excellence is not just about winning - it is about giving your best in everything you do, for the glory of God.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: value.color }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1E2D5C" }}>
                  {value.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#6b7280" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="relative py-20 text-center overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        {/* Background courts photo */}
        <Image
          src="/photos/tva-sand-courts.png"
          alt="TVA sand courts"
          fill
          unoptimized
          className="object-cover object-center"
          style={{ opacity: 0.18 }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.88) 0%, rgba(30,45,92,0.72) 50%, rgba(30,45,92,0.9) 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white mb-6">
            Join the TVA Family
          </h2>
          <p className="text-xl mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
            Open to all youth athletes in the Central Valley. Come experience volleyball with purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/boys-indoor"
              className="inline-block px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#3DBFB0" }}
            >
              Boys Programs
            </Link>
            <Link
              href="/girls-indoor"
              className="inline-block px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 border-2 hover:bg-white/10"
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}
            >
              Girls Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

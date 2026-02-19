import { motion } from 'framer-motion'
import { Users, Target, Zap } from 'lucide-react'

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <main className="bg-background min-h-screen text-primary pt-32 px-6 pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto"
      >
        <motion.section variants={item} className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-secondary">The story behind the studio.</p>
        </motion.section>

        <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold">Our Mission</h2>
            <p className="text-secondary leading-relaxed">
              Chillart Studio was born from a simple idea: design should be both beautiful and functional.
              We believe that every brand has a unique story, and our job is to tell it in the most compelling way possible.
            </p>
            <p className="text-secondary leading-relaxed">
              For over 5 years, we've partnered with ambitious startups and established companies to build digital products that people love to use.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects", value: "150+" },
              { label: "Clients", value: "90+" },
              { label: "Years", value: "5+" },
              { label: "Awards", value: "12" }
            ].map((stat, i) => (
              <div key={i} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
                <div className="text-3xl font-display font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="mb-32">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mario Rossi", role: "Creative Director", icon: "👨‍💻" },
              { name: "Anna Bianchi", role: "Web Developer", icon: "👩‍💻" },
              { name: "Luca Verdi", role: "Visual Designer", icon: "👨‍🎨" }
            ].map((member, i) => (
              <div key={i} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-center hover:border-zinc-700 transition-colors">
                <div className="text-4xl mb-4">{member.icon}</div>
                <h3 className="font-display font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-secondary text-sm uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item}>
          <h2 className="font-display text-3xl font-bold mb-12 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Passion", desc: "We love what we do and it shows in every pixel." },
              { icon: Zap, title: "Innovation", desc: "Always exploring new technologies and trends." },
              { icon: Users, title: "Collaboration", desc: "We work with you, not just for you." }
            ].map((val, i) => (
              <div key={i} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-900">
                <val.icon className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">{val.title}</h4>
                <p className="text-secondary text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Palette, Wand2 } from 'lucide-react'

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <main className="bg-background min-h-screen text-primary selection:bg-accent selection:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background gradient/blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.h1
            variants={item}
            className="font-display text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-tight"
          >
            We Craft <span className="text-secondary opacity-50 block md:inline">Digital</span><br className="hidden md:block" /> Experiences.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 font-light"
          >
            Chillart Studio is a digital design agency combining strategy, branding, and technology to build brands that matter.
          </motion.p>

          <motion.div variants={item}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-background font-bold rounded-full hover:bg-zinc-200 transition-all duration-300"
            >
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-zinc-500">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Our Expertise</h2>
            <Link to="/services" className="text-accent hover:text-white transition-colors flex items-center gap-2">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Web Development", desc: "Performance-driven websites crafted with modern technologies." },
              { icon: Palette, title: "Brand Identity", desc: "Distinctive visual systems that tell your brand's unique story." },
              { icon: Wand2, title: "Creative Strategy", desc: "Data-backed strategies to position your brand for growth." }
            ].map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-2">
                <service.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4 font-display">{service.title}</h3>
                <p className="text-secondary leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Statement */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">Driven by results.<br />Fueled by passion.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { title: "Strategic", text: "We don't just design pretty things. We build systems that work for your business goals." },
              { title: "Creative", text: "Pushing boundaries to create memorable experiences that stand out in a crowded market." },
              { title: "Technical", text: "Clean code, fast load times, and flawless performance across all devices." }
            ].map((item, i) => (
              <div key={i} className="border-t border-zinc-800 pt-8">
                <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                <p className="text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

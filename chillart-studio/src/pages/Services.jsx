import { motion } from 'framer-motion'
import { Globe, Palette, Wand2, Target, Smartphone, Lightbulb } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We build modern, responsive, and performance-driven websites to showcase your brand online.',
      icon: Globe
    },
    {
      id: 2,
      title: 'Visual Identity',
      description: 'Logos, color palettes, and visual guidelines that perfectly represent your company.',
      icon: Palette
    },
    {
      id: 3,
      title: 'Branding',
      description: 'Complete branding strategies to build a strong and recognizable corporate identity.',
      icon: Wand2
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces and excellent user experiences to maximize engagement.',
      icon: Target
    },
    {
      id: 5,
      title: 'Social Media Design',
      description: 'Visual content and graphics for your social media platforms.',
      icon: Smartphone
    },
    {
      id: 6,
      title: 'Creative Consulting',
      description: 'Strategic consulting to help you define your creative vision.',
      icon: Lightbulb
    }
  ]

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
        className="max-w-7xl mx-auto"
      >
        <motion.section variants={item} className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-secondary">Comprehensive creative solutions for your business.</p>
        </motion.section>

        <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 group">
              <service.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-secondary leading-relaxed">{service.description}</p>
            </div>
          ))}
        </motion.section>
      </motion.div>
    </main>
  )
}

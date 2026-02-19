import { motion } from 'framer-motion'
import { ShoppingBag, Rocket, Building2, Utensils, Smartphone, BarChart3 } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Fashion E-commerce',
      category: 'Web Design',
      description: 'Complete e-commerce solution for a fashion brand with inventory management.',
      icon: ShoppingBag
    },
    {
      id: 2,
      title: 'Tech Startup Branding',
      category: 'Branding',
      description: 'Full visual identity for an innovative technology startup.',
      icon: Rocket
    },
    {
      id: 3,
      title: 'Corporate Renewal',
      category: 'Web Design',
      description: 'Complete website redesign for a service sector company.',
      icon: Building2
    },
    {
      id: 4,
      title: 'Restaurant Identity',
      category: 'Branding',
      description: 'Logo, color palette, and branding materials for a local restaurant.',
      icon: Utensils
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'UI/UX Design',
      description: 'User interface design for a mobile food delivery application.',
      icon: Smartphone
    },
    {
      id: 6,
      title: 'Social Campaign',
      category: 'Social Media',
      description: 'Consistent graphics creation for a social network marketing campaign.',
      icon: BarChart3
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
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-secondary">A selection of our recent projects.</p>
        </motion.section>

        <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group bg-zinc-900 overflow-hidden rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="p-8 pb-12">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 text-2xl text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <project.icon className="w-6 h-6" />
                </div>
                <p className="text-secondary text-xs uppercase tracking-widest mb-2 font-bold">{project.category}</p>
                <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </motion.section>
      </motion.div>
    </main>
  )
}

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <main className="bg-background min-h-screen text-primary pt-32 px-6 pb-20 flex flex-col items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full text-center"
      >
        <motion.section variants={item} className="mb-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-secondary">Come visit us or get in touch.</p>
        </motion.section>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-zinc-900/50 p-12 rounded-2xl border border-zinc-800">
          {[
            { icon: MapPin, title: "Address", content: "Via Esempio 123, 00100 Roma, Italia" },
            { icon: Mail, title: "Email", content: "grafichenelchill@gmail.com", link: "mailto:grafichenelchill@gmail.com" },
            { icon: Phone, title: "Phone", content: "+39 06 1234567", link: "tel:+39061234567" },
            { icon: 'clock', title: "Hours", content: "Mon - Fri: 09:00 - 18:00" }
          ].map((info, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center text-accent text-2xl mb-2 border border-zinc-800">
                {typeof info.icon === 'string' ? <span>🕒</span> : <info.icon className="w-8 h-8" />}
              </div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-secondary hover:text-accent transition-colors text-lg">{info.content}</a>
                ) : (
                  <p className="text-secondary text-lg">{info.content}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}

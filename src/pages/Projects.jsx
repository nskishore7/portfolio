import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🛒 E-Commerce Web Application',
    desc: 'A full-stack MERN e-commerce app with product listings, cart management, user authentication, and secure checkout.',
    ss: '/ecommerce.jpeg',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    live: '#',
    code: 'https://github.com/Mohan-Rex/ecommerce-app',
  },
  {
    title: '🎓 E-Learning Platform',
    desc: 'Interactive online learning platform with video lessons, user dashboards, and real-time progress tracking using REST APIs.',
    ss: '/E-learning.JPG',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'React Router'],
    live: '#',
    code: 'https://github.com/Mohan-Rex/elearning-platform',
  },
  {
    title: '📦 Asset Management System',
    desc: 'Dashboard-based web app for managing company assets. Includes CRUD operations, search filters, and role-based authentication.',
    ss: '/AssetManagement.jpg',
    tech: ['React', 'Express.js', 'MongoDB', 'Node.js', 'JWT Auth'],
    live: '#',
    code: 'https://github.com/Mohan-Rex/asset-management-system',
  },
  {
    title: '🎵 Music Player App',
    desc: 'Responsive web music player with dynamic playlist management, audio APIs, and modern React component structure.',
    ss: '/MusicPlayer.png',
    tech: ['React', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    live: '#',
    code: 'https://github.com/Mohan-Rex/music-player',
  },
  {
    title: '💪 Fitness Website',
    desc: 'A modern fitness platform showcasing workout programs, nutrition tips, and progress tracking, built with React and animations.',
    ss: '/Fitness.JPG',
    tech: ['React', 'Framer Motion', 'CSS3', 'HTML5'],
    live: '#',
    code: 'https://github.com/Mohan-Rex/fitness-website',
  },
  {
    title: '💼 Portfolio Website',
    desc: 'My personal portfolio showcasing my MERN projects, skills, and experience with clean animations and responsive design.',
    ss: '/portfolio.jpg',
    tech: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    live: '#',
    code: 'https://github.com/Mohan-Rex/Mohan-Portfolio',
  },
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: 16,
          padding: 30,
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my web development projects — blending creativity,
          full-stack development, and modern UI/UX.
        </p>

        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background:
                  'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)',
              }}
            >
              <motion.div
                className="ss"
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: 12, overflow: 'hidden' }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12,
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3
                  style={{
                    fontSize: 18,
                    color: '#0ea5e9',
                    marginBottom: 6,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: '#bbb',
                    marginBottom: 8,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 10,
                  }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none',
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background:
                        'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none',
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

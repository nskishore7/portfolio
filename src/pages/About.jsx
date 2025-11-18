import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaBookReader, FaCogs, FaUserAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Projects
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* --- Project 1 --- */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "1.8rem 2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 15px rgba(0,255,200,0.05)",
              display: "flex",
              alignItems: "center",
              gap: "1.4rem",
            }}
          >
            <FaShoppingCart size={40} color="var(--accent)" />
            <div>
              <h3 style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "1.3rem" }}>
                E-Commerce Web Application
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)" }}>
                Developed a full-stack online store with user authentication, product management,
                cart functionality, and secure checkout. Integrated RESTful APIs and MongoDB for
                product and order data persistence.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "0.4rem" }}>
                <strong>Tech Stack:</strong> React, Node.js, Express.js, MongoDB, JWT, Bootstrap
              </p>
            </div>
          </motion.div>

          {/* --- Project 2 --- */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "1.8rem 2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 15px rgba(0,255,200,0.05)",
              display: "flex",
              alignItems: "center",
              gap: "1.4rem",
            }}
          >
            <FaBookReader size={38} color="var(--accent)" />
            <div>
              <h3 style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "1.3rem" }}>
                E-Learning Platform
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)" }}>
                Created a responsive online learning system with course browsing, user dashboards,
                and progress tracking. Implemented video lessons and course enrollment using
                dynamic routing and state management.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "0.4rem" }}>
                <strong>Tech Stack:</strong> React, Node.js, Express.js, MongoDB, React Router, CSS
              </p>
            </div>
          </motion.div>

          {/* --- Project 3 --- */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "1.8rem 2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 15px rgba(0,255,200,0.05)",
              display: "flex",
              alignItems: "center",
              gap: "1.4rem",
            }}
          >
            <FaCogs size={38} color="var(--accent)" />
            <div>
              <h3 style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "1.3rem" }}>
                Asset Management System
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)" }}>
                Built a role-based dashboard for managing company assets and tracking asset
                lifecycle. Implemented CRUD operations, search filters, and secure API endpoints.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "0.4rem" }}>
                <strong>Tech Stack:</strong> MERN Stack (MongoDB, Express.js, React, Node.js)
              </p>
            </div>
          </motion.div>

          {/* --- Project 4 --- */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "1.8rem 2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 15px rgba(0,255,200,0.05)",
              display: "flex",
              alignItems: "center",
              gap: "1.4rem",
            }}
          >
            <FaUserAlt size={36} color="var(--accent)" />
            <div>
              <h3 style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "1.3rem" }}>
                Personal Portfolio Website
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)" }}>
                Designed and developed this modern portfolio using React, Framer Motion, and
                responsive layouts. Showcases my projects, skills, and career journey.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "0.4rem" }}>
                <strong>Tech Stack:</strong> React, Vite, Framer Motion, CSS
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;

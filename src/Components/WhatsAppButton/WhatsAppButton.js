import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "918792783540"; // Your WhatsApp number
  const message = "Hello! I’d like to know more about your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div style={styles.container}>
      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            style={styles.chatPopup}
          >
            <div style={styles.chatHeader}>
              <FaWhatsapp color="white" size={20} />
              <span style={styles.chatTitle}>Chat with us</span>
              <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
                ✕
              </button>
            </div>
            <div style={styles.chatBody}>
              <p>Hi there 👋</p>
              <p>How can we help you today?</p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.chatButton}
            >
              Open WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={styles.whatsappButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaWhatsapp size={35} color="white" />
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    zIndex: 1000,
  },
  whatsappButton: {
    backgroundColor: "#25D366",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
    cursor: "pointer",
  },
  chatPopup: {
    width: "260px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    marginBottom: "10px",
    overflow: "hidden",
    fontFamily: "sans-serif",
  },
  chatHeader: {
    backgroundColor: "#25D366",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 15px",
  },
  chatTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    marginLeft: "5px",
    flex: 1,
  },
  closeBtn: {
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
  chatBody: {
    padding: "15px",
    fontSize: "14px",
    color: "#333",
    backgroundColor: "#f8f8f8",
  },
  chatButton: {
    display: "block",
    textAlign: "center",
    backgroundColor: "#25D366",
    color: "white",
    padding: "10px 15px",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "0 0 12px 12px",
  },
};

export default WhatsAppButton;

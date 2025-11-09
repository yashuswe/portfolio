import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold">YS</span>
          </div>

          <p className="text-background/70 mb-4">
            © 2024 Yashassvi Suhane. All rights reserved.
          </p>

          <p className="text-background/50 text-sm">
            Built with passion using React, TypeScript, and modern web
            technologies.
          </p>

          <div className="pt-4 border-t border-background/20">
            <p className="text-background/60 text-xs">
              Designed with Apple-inspired aesthetics and premium attention to
              detail.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

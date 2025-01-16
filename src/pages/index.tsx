import { motion } from "framer-motion";
import { Mail, Linkedin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IndexPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Welcome to Albert Salgueda's Personal Website
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Co-Founder at Altan
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Empowering creators to build and monetize intelligent apps, unlocking a future where humans are free at last.
        </p>
      </motion.section>

      {/* About Section */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          About Albert
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          At Altan, we're automating automation itself, empowering creators to build and monetize intelligent apps.
        </p>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Co-Founder at Altan</h3>
              <p className="text-muted-foreground">
                Revolutionizing the future by automating automation itself, empowering creators to build and monetize intelligent apps, and making work optional.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Skills:</strong> Aprendizaje automático, Software Development
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Professor of Computer Science</h3>
              <p className="text-muted-foreground">
                Fundació Eduard Soler · Contract · Jan 2023 - Jul 2023 · Ripoll, Catalonia, Spain
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Product Manager at Adsmurai</h3>
              <p className="text-muted-foreground">
                Defined technical development and launch of innovative products for the Adsmurai Marketing Platform. Led a team of engineers, UI/UX designers, and data scientists.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Skills:</strong> Software Development
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fundador at eRipoll</h3>
              <p className="text-muted-foreground">
                Developed a platform to modernize local commerce by impulsing digitalization, helping small businesses operate during the pandemic.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Freelance</h3>
              <p className="text-muted-foreground">
                eCommerce development and other freelance projects.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fabricación at INDUSTRIAS SALGUEDA SA</h3>
              <p className="text-muted-foreground">
                Developed a motherboard with Python and Arduino to automatically control fan speed using a thermal sensor.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button size="lg" variant="default">
              <Mail className="mr-2 h-5 w-5" /> Contact
            </Button>
            <Button size="lg" variant="outline">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

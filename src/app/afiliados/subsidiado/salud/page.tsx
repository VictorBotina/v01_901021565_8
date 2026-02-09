// src/app/afiliados/subsidiado/salud/page.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Stethoscope,
  Brain,
  Apple,
  HeartPulse,
  Baby,
  Cake,
  PersonStanding,
  User,
  School,
  GraduationCap,
  Briefcase,
  Heart,
  Activity,
  Wind,
  ShieldAlert,
  Syringe,
  Users,
  Bug,
} from "lucide-react";
import { ArticleSection } from "@/components/articles/ArticleSection";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const cursosDeVida = [
  {
    title: "Gestación",
    icon: <HeartPulse />,
    description: "Controles prenatales y acompañamiento para un embarazo seguro.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/gestacion",
  },
  {
    title: "Recién nacido",
    icon: <Baby />,
    description: "Atención al nacer, tamizajes y vacunación inicial.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/recien-nacido",
  },
  {
    title: "Primera infancia (0-5 años)",
    icon: <Cake />,
    description: "Desarrollo integral, vacunación y control de crecimiento.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/primera-infancia",
  },
  {
    title: "Infancia (6-11 años)",
    icon: <School />,
    description: "Salud escolar, nutrición y actividad física.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/infancia",
  },
  {
    title: "Adolescencia (12-17 años)",
    icon: <PersonStanding />,
    description: "Salud sexual, reproductiva y prevención de riesgos.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/adolescencia",
  },
  {
    title: "Juventud (18-28 años)",
    icon: <GraduationCap />,
    description: "Prevención de ITS, planificación y estilo de vida saludable.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/juventud",
  },
  {
    title: "Adultez (29-59 años)",
    icon: <Briefcase />,
    description: "Seguimiento de enfermedades crónicas y salud laboral.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/adultez",
  },
  {
    title: "Vejez (60+ años)",
    icon: <Heart />,
    description: "Atención integral, prevención y rehabilitación.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/vejez",
  },
];

export default function CuidadoSaludLandingPage() {
  return (
    <>
      <div className="p-6">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Cuidado de la Salud y Bienestar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Encuentra aquí los programas y la atención que necesitas en cada
            momento de tu vida. Nuestro modelo está centrado en ti.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          {/* Columna Cursos de Vida */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">
              Cursos de Vida: Etapas y Cuidados
            </h2>
            <Card>
              <CardHeader>
                <CardTitle as="h3">Atención para cada Etapa</CardTitle>
                <CardDescription>
                  Un modelo de salud continuo, integral y pertinente para cada
                  momento de tu vida.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {cursosDeVida.map((curso) => (
                  <Link
                    key={curso.title}
                    href={curso.href}
                    className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                      {React.cloneElement(curso.icon, {
                        className:
                          "h-6 w-6 text-primary group-hover:text-primary-foreground",
                      })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {curso.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {curso.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* Columna Programas de Salud */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">
              Programas Cuidado de la Salud
            </h2>
            <Card>
              <CardHeader>
                <CardTitle as="h3">Nuestros Programas</CardTitle>
                <CardDescription>
                  Descubre cómo te acompañamos con programas de promoción,
                  prevención y bienestar.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <Link
                  href="/afiliados/subsidiado/salud/programas/artritis"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Stethoscope className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Artritis Reumatoide
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Información y recursos de nuestro programa de acompañamiento integral.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/cancer"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Activity className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Cáncer
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Programas de detección temprana y apoyo integral en el tratamiento.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/epoc"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Wind className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      EPOC
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Atención integral para la Enfermedad Pulmonar Obstructiva Crónica.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/asma"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Activity className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Asma
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Control y prevención de crisis para una mejor calidad de vida respiratoria.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/eda"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Activity className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Enfermedad Diarreica Aguda (EDA)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Medidas de prevención y manejo, especialmente en niños.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/ira"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Activity className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Infección Respiratoria Aguda (IRA)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Prevención y cuidado de infecciones respiratorias en todas las etapas.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/its"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <ShieldAlert className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Infecciones de Transmisión Sexual (ITS)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Educación, prevención y acceso a pruebas para una salud sexual segura.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/vih-sida"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Activity className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      VIH / SIDA
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Acompañamiento integral, tratamiento y apoyo para una mejor calidad de vida.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/vacunacion"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Syringe className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Esquema de Vacunación
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Protege tu salud y la de tu familia completando los esquemas de inmunización.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/maternidad"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Baby className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Cuidado Materno
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Acompañamiento integral para una maternidad segura y saludable.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/salud-mental"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Brain className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Salud Mental
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Recursos y apoyo para el bienestar emocional y mental de nuestros afiliados.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/habitos-saludables"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Apple className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Hábitos Saludables y Vida Activa
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Promovemos el bienestar integral a través de la alimentación balanceada y el ejercicio.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/dengue"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Bug className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Prevención del Dengue
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Información sobre prevención, síntomas de alarma y control del mosquito.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/fiebre-amarilla"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Activity className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Fiebre Amarilla
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Información detallada sobre la fiebre amarilla y la importancia de la vacunación.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/afiliados/subsidiado/salud/programas/enfoque-diferencial"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Users className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Enfoque Diferencial
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Atención inclusiva y pertinente para poblaciones con necesidades específicas.
                    </p>
                  </div>
                </Link>
                
                <Link
                  href="/afiliados/subsidiado/salud/programas"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <HeartPulse className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Otros Programas de Salud
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Explora todos nuestros programas de gestión del riesgo en salud.
                    </p>
                  </div>
                </Link>

                <div className="flex justify-center pt-4">
                    <Button asChild variant="outline" className="w-full">
                        <Link href="/afiliados/subsidiado/salud/programas">Ver todos los programas</Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
      <ArticleSection title="Noticias sobre Salud y Bienestar" />
    </>
  );
}

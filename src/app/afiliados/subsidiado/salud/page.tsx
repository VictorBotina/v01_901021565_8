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
  School,
  GraduationCap,
  Briefcase,
  Heart,
  Activity,
  Wind,
  ShieldAlert,
  Syringe,
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
    description: "La etapa de gestación comprende el cuidado integral de la mujer embarazada desde la confirmación del embarazo hasta el parto. Incluye controles prenatales periódicos, educación para la maternidad, identificación temprana de riesgos, acceso a exámenes y seguimiento médico oportuno, con el objetivo de proteger la salud de la madre y favorecer el adecuado desarrollo del bebé.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/gestacion",
  },
  {
    title: "Recién nacido",
    icon: <Baby />,
    description: "Corresponde a la atención inmediata y continua del bebé desde el nacimiento. En esta etapa se realizan evaluaciones clínicas iniciales, tamizajes neonatales, vacunación según el esquema nacional y orientación a la familia sobre cuidados básicos, lactancia materna y signos de alarma, garantizando un inicio de vida saludable.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/recien-nacido",
  },
  {
    title: "Primera infancia (0-5 años)",
    icon: <Cake />,
    description: "Esta etapa se centra en el desarrollo integral de niñas y niños, promoviendo un crecimiento físico, cognitivo y emocional adecuado. Incluye controles de crecimiento y desarrollo, vacunación completa, alimentación saludable, estimulación temprana y acciones de prevención para reducir enfermedades y riesgos en los primeros años de vida.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/primera-infancia",
  },
  {
    title: "Infancia (6-11 años)",
    icon: <School />,
    description: "Durante la infancia se fortalecen hábitos saludables que impactan el bienestar a largo plazo. La atención en salud prioriza la salud escolar, la nutrición adecuada, la actividad física, la salud visual y oral, así como la detección temprana de dificultades de aprendizaje o problemas de salud que puedan afectar el desarrollo integral.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/infancia",
  },
  {
    title: "Adolescencia (12-17 años)",
    icon: <PersonStanding />,
    description: "La adolescencia es una etapa clave para la promoción del autocuidado y la toma de decisiones informadas. Se enfoca en la salud sexual y reproductiva, la prevención del embarazo adolescente, la educación sobre infecciones de transmisión sexual, el cuidado de la salud mental, la prevención del consumo de sustancias y la promoción de estilos de vida saludables.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/adolescencia",
  },
  {
    title: "Juventud (18-28 años)",
    icon: <GraduationCap />,
    description: "En la juventud se fortalecen las acciones de prevención y promoción orientadas a consolidar hábitos saludables. La atención en salud incluye planificación familiar, prevención y detección de ITS, cuidado de la salud mental, promoción de la actividad física, alimentación balanceada y acompañamiento para una vida productiva y saludable.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/juventud",
  },
  {
    title: "Adultez (29-59 años)",
    icon: <Briefcase />,
    description: "Esta etapa se orienta al mantenimiento de la salud y la prevención de enfermedades crónicas. Incluye el seguimiento de condiciones como hipertensión, diabetes, enfermedades respiratorias y cáncer, así como la promoción de la salud laboral, el manejo del estrés, la actividad física y la detección temprana de riesgos que puedan afectar la calidad de vida.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/adultez",
  },
  {
    title: "Vejez (60+ años)",
    icon: <Heart />,
    description: "La vejez prioriza la atención integral de las personas mayores, enfocada en la prevención de la discapacidad, el control de enfermedades crónicas, la rehabilitación funcional y el fortalecimiento de la autonomía. También se promueve el envejecimiento activo, el bienestar mental y el acompañamiento familiar y comunitario para una vida digna y saludable.",
    href: "/afiliados/subsidiado/salud/cursos-de-vida/vejez",
  },
];

const programGroups = [
  {
    category: "Cuidado de Largo Plazo y Enfermedades Crónicas",
    programs: [
      { title: "Artritis Reumatoide", href: "/afiliados/subsidiado/salud/programas/artritis", icon: <Stethoscope />, description: "Información y recursos de nuestro programa de acompañamiento integral." },
      { title: "Cáncer", href: "/afiliados/subsidiado/salud/programas/cancer", icon: <Activity />, description: "Programas de detección temprana y apoyo integral en el tratamiento." },
      { title: "EPOC", href: "/afiliados/subsidiado/salud/programas/epoc", icon: <Wind />, description: "Atención integral para la Enfermedad Pulmonar Obstructiva Crónica." },
      { title: "Asma", href: "/afiliados/subsidiado/salud/programas/asma", icon: <Activity />, description: "Control y prevención de crisis para una mejor calidad de vida respiratoria." },
    ]
  },
  {
    category: "Enfermedades Huérfanas y de Baja Frecuencia",
    programs: [
      { title: "Enfermedades Huérfanas", href: "/afiliados/subsidiado/salud/programas/enfermedades-huerfanas", icon: <ShieldAlert />, description: "Atención y seguimiento para condiciones de baja prevalencia." },
    ]
  },
  {
    category: "Salud Respiratoria",
    programs: [
      { title: "Infección Respiratoria Aguda (IRA)", href: "/afiliados/subsidiado/salud/programas/ira", icon: <Activity />, description: "Prevención y cuidado de infecciones respiratorias en todas las etapas." },
    ]
  },
  {
    category: "Prevención y Manejo de Enfermedades Infecciosas",
    programs: [
      { title: "Enfermedad Diarreica Aguda (EDA)", href: "/afiliados/subsidiado/salud/programas/eda", icon: <Activity />, description: "Medidas de prevención y manejo, especialmente en niños." },
      { title: "Prevención del Dengue", href: "/afiliados/subsidiado/salud/programas/dengue", icon: <Bug />, description: "Información sobre prevención, síntomas de alarma y control del mosquito." },
      { title: "Fiebre Amarilla", href: "/afiliados/subsidiado/salud/programas/fiebre-amarilla", icon: <Activity />, description: "Información detallada sobre la fiebre amarilla y la importancia de la vacunación." },
    ]
  },
  {
    category: "Salud Sexual y Reproductiva",
    programs: [
      { title: "Infecciones de Transmisión Sexual (ITS)", href: "/afiliados/subsidiado/salud/programas/its", icon: <ShieldAlert />, description: "Educación, prevención y acceso a pruebas para una salud sexual segura." },
      { title: "VIH / SIDA", href: "/afiliados/subsidiado/salud/programas/vih-sida", icon: <Activity />, description: "Acompañamiento integral, tratamiento y apoyo para una mejor calidad de vida." },
      { title: "Cuidado Materno", href: "/afiliados/subsidiado/salud/programas/maternidad", icon: <Baby />, description: "Acompañamiento integral para una maternidad segura y saludable." },
    ]
  },
  {
    category: "Bienestar Emocional y Mental",
    programs: [
      { title: "Salud Mental", href: "/afiliados/subsidiado/salud/programas/salud-mental", icon: <Brain />, description: "Recursos y apoyo para el bienestar emocional y mental de nuestros afiliados." },
    ]
  },
  {
    category: "Prevención y Protección de la Salud",
    programs: [
      { title: "Esquema de Vacunación", href: "/afiliados/subsidiado/salud/programas/vacunacion", icon: <Syringe />, description: "Protege tu salud y la de tu familia completando los esquemas de inmunización." },
      { title: "Hábitos Saludables y Vida Activa", href: "/afiliados/subsidiado/salud/programas/habitos-saludables", icon: <Apple />, description: "Promovemos el bienestar integral a través de la alimentación balanceada y el ejercicio." },
    ]
  },
  {
    category: "Solidaridad y Vida",
    programs: [
      { title: "Donación de Órganos", href: "/afiliados/subsidiado/salud/programas/donacion-organos", icon: <HeartPulse />, description: "Un acto de vida: conoce la importancia y el proceso para ser donante." },
    ]
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
                      {React.cloneElement(curso.icon as React.ReactElement<{ className?: string }>, {
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
                <div className="flex justify-center pt-4">
                    <Button asChild variant="outline" className="w-full">
                        <Link href="/afiliados/subsidiado/salud/cursos-de-vida">Ampliar información</Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Columna Programas de Salud Organizados */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Nuestros Programas
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle as="h3">Gestión del Riesgo en Salud</CardTitle>
                <CardDescription>
                  Descubre cómo te acompañamos con programas de promoción,
                  prevención y bienestar para cada necesidad.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {programGroups.map((group) => (
                  <div key={group.category} className="space-y-4">
                    <h4 className="font-bold text-lg text-primary border-b pb-2">
                      {group.category}
                    </h4>
                    <div className="grid gap-2">
                      {group.programs.map((program) => (
                        <Link
                          key={program.title}
                          href={program.href}
                          className="group flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                            {/* 
                              DOC: Se utiliza un cast a React.ReactElement<{ className?: string }> 
                              porque React.cloneElement requiere que el tipo de props del elemento 
                              sea conocido y acepte las propiedades que se están inyectando. 
                              Al ser icons genéricos, TypeScript infiere 'unknown' por defecto, 
                              lo que genera el error TS2769 si no se especifica el tipo.
                            */}
                            {React.cloneElement(program.icon as React.ReactElement<{ className?: string }>, {
                              className: "h-5 w-5 text-primary group-hover:text-primary-foreground",
                            })}
                          </div>
                          <div>
                            <h5 className="font-semibold text-foreground group-hover:text-primary">
                              {program.title}
                            </h5>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {program.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
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

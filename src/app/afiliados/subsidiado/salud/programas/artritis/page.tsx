import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArticleSection } from "@/components/articles/ArticleSection";
import { 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  Apple, 
  Brain, 
  Users, 
  ExternalLink, 
  AlertCircle,
  Info,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import React from 'react';

export const metadata: Metadata = {
    title: '¿Te duelen las articulaciones todos los días? Podría ser Artritis Reumatoide',
    description: 'Informar el programa de salud de Artritis Reumatoide de forma fácil y segura',
    keywords: ['Emssanar EPS', 'Afiliación en salud', 'Régimen subsidiado', 'Prevención en salud', 'Artritis reumatoide', 'cuidado de salud'],
};

export default function ArtritisPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header Section */}
        <header className="mb-12 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-title mb-6 leading-tight">
            ¿Te duelen las articulaciones todos los días? Podría ser Artritis Reumatoide
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium italic">
            "Inflamación, dolor y cansancio: lo que debes saber sobre la Artritis Reumatoide"
          </p>
        </header>

        <main className="max-w-5xl mx-auto space-y-16">
          
          {/* Intro Section */}
          <section className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Vivir con artritis reumatoide no es simplemente convivir con dolor en las articulaciones. Es enfrentar una enfermedad autoinmune crónica en la que el sistema inmunológico, que normalmente protege al cuerpo, ataca por error las propias articulaciones, generando inflamación persistente.
            </p>
            <p>
              Con el tiempo, esta inflamación puede afectar el movimiento, la energía, la autonomía e incluso la calidad de vida. Pero hay algo importante que debes saber: cuando se detecta y trata a tiempo, es posible controlar la enfermedad, reducir el daño articular y mantener una vida activa y plena.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-foreground font-medium">
                La información oportuna transforma el pronóstico. El acompañamiento médico hace la diferencia. Y tu compromiso es parte fundamental del proceso.
              </p>
            </div>
          </section>

          {/* Definition Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-title flex items-center gap-3">
                <Stethoscope className="h-8 w-8 text-primary" />
                ¿Qué es la artritis reumatoide?
              </h2>
              <p className="text-muted-foreground">
                La artritis reumatoide es una enfermedad inflamatoria crónica que afecta principalmente las articulaciones (manos, muñecas, rodillas y pies), aunque también puede comprometer otros órganos del cuerpo.
              </p>
              <p className="text-muted-foreground">
                A diferencia de otros tipos de artritis relacionados con el desgaste, esta enfermedad tiene un origen autoinmune. Eso significa que el sistema de defensa del cuerpo reacciona de forma inadecuada y provoca inflamación continua.
              </p>
            </div>
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  Riesgos sin tratamiento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Dolor persistente",
                    "Daño progresivo en las articulaciones",
                    "Pérdida de movilidad",
                    "Deformidades",
                    "Discapacidad funcional"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-bold text-sm text-destructive uppercase tracking-wider">
                  La detección temprana es clave para evitar complicaciones.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Video Section */}
          <section>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl border bg-black">
              <iframe
                src="https://www.youtube.com/embed/vdNjk59-s-Y"
                title="Artritis Reumatoide - Emssanar EPS"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>

          {/* Symptoms Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Señales que tu cuerpo puede estar dando</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada persona vive la artritis reumatoide de manera distinta. Presta atención a estos síntomas:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Dolor e inflamación", desc: "Especialmente en manos, muñecas o pies. Calor o sensibilidad al tacto." },
                { title: "Rigidez matutina", desc: "Rigidez que dura más de 30 minutos al despertar o tras reposo." },
                { title: "Cansancio constante", desc: "Fatiga profunda no siempre relacionada con el esfuerzo físico." },
                { title: "Menos apetito", desc: "Pérdida de peso o menor deseo de comer." },
                { title: "Fiebre leve", desc: "Febrícula ocasional asociada al proceso inflamatorio." },
                { title: "Nódulos cutáneos", desc: "Protuberancias firmes cerca de las articulaciones afectadas." }
              ].map((symptom, i) => (
                <Card key={i} className="hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-primary">{symptom.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{symptom.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Alert className="bg-amber-50 border-amber-200">
              <Info className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Importante</AlertTitle>
              <AlertDescription className="text-amber-700">
                Si logras identificar varios de estos síntomas, consulta a un profesional de salud. No ignores lo que tu cuerpo está intentando decirte.
              </AlertDescription>
            </Alert>
          </section>

          {/* Treatment & Self-care */}
          <section className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Cuidarte también es parte del tratamiento</h2>
              <p className="text-muted-foreground">El manejo integral combina medicina, hábitos saludables y autocuidado.</p>
            </div>
            
            <div className="grid gap-8">
              {[
                { 
                  icon: <HeartPulse className="h-10 w-10 text-primary" />, 
                  title: "Sigue tu tratamiento médico", 
                  content: "Tomar la medicación exactamente como lo indica tu médico ayuda a controlar la inflamación. No suspendas el tratamiento sin orientación profesional, incluso si los síntomas mejoran." 
                },
                { 
                  icon: <Activity className="h-10 w-10 text-primary" />, 
                  title: "Muévete a tu ritmo", 
                  content: "La actividad física adecuada fortalece los músculos, mejora la movilidad y disminuye la rigidez. Un profesional puede orientarte sobre ejercicios adaptados." 
                },
                { 
                  icon: <CheckCircle2 className="h-10 w-10 text-primary" />, 
                  title: "Cuida tu peso", 
                  content: "Mantener un peso saludable reduce la carga sobre las articulaciones, especialmente rodillas y caderas. Pequeños cambios sostenidos generan grandes resultados." 
                },
                { 
                  icon: <Apple className="h-10 w-10 text-primary" />, 
                  title: "Aliméntate bien", 
                  content: "Una dieta rica en frutas, verduras y proteínas de calidad disminuye procesos inflamatorios. Evita ultraprocesados y azúcares." 
                },
                { 
                  icon: <Brain className="h-10 w-10 text-primary" />, 
                  title: "Descansa y cuida tu mente", 
                  content: "Dormir bien es fundamental para la recuperación. El manejo del estrés mediante relajación o apoyo psicológico ayuda a mantener el equilibrio emocional." 
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-xl bg-muted/30">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Support Section */}
          <section className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center space-y-6">
            <Users className="h-16 w-16 mx-auto opacity-80" />
            <h2 className="text-3xl font-bold">No estás solo</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Vivir con una enfermedad crónica puede generar incertidumbre o temor. Participar activamente en tu tratamiento y apoyarte en familiares, amigos o grupos de apoyo fortalece tu proceso.
            </p>
            <p className="text-xl font-semibold italic">"La red de apoyo también es medicina"</p>
          </section>

          {/* Route & Action */}
          <section className="text-center space-y-8 py-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Ruta de atención y acompañamiento</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Si presentas síntomas compatibles con artritis reumatoide, conoce los pasos para acceder a un diagnóstico y tratamiento oportuno.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 shadow-xl">
                <Link href="#">
                  Consultar microred de artritis
                </Link>
              </Button>
            </div>
          </section>

          {/* Professional Resources */}
          <section className="border-t pt-16">
            <Card className="bg-secondary/30">
              <CardHeader>
                <CardTitle>Para profesionales de la salud e interesados</CardTitle>
                <CardDescription>Evidencia científica y guías de práctica clínica oficiales.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <p className="text-sm">
                      Consulta la <strong>Guía de Práctica Clínica No. 26</strong>: “Detección temprana, diagnóstico y tratamiento de la artritis reumatoide”, un documento basado en la mejor evidencia científica.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                      <Link href="https://drive.google.com/file/d/1MqR5-_MCTgZqjY6nqbmifDpJq3AxfJ-s/view" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Guía No. 26 (PDF)
                      </Link>
                    </Button>
                  </div>
                  <div className="flex-1 space-y-4">
                    <p className="text-sm">
                      Accede a más información en el portal de Guías de Práctica Clínica del Ministerio de Salud.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                      <Link href="https://gpc.minsalud.gov.co" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Portal MinSalud GPC
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Closing Phrase */}
          <section className="text-center pt-8 border-t">
            <h2 className="text-3xl font-bold text-primary mb-4">Vivir con artritis reumatoide es posible</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              La artritis reumatoide no define quién eres ni determina tus sueños. Con un diagnóstico temprano y hábitos saludables, es posible mantener la movilidad y conservar tu independencia. Escuchar al cuerpo es el primer paso. Cuidarte es una forma de proteger tu futuro.
            </p>
          </section>

        </main>
      </div>
      
      <ArticleSection title="Últimas noticias y novedades" />
    </div>
  );
}

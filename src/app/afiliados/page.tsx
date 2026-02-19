import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  CheckCircle, 
  Shield, 
  Users, 
  Phone, 
  Mail, 
  MessageSquare, 
  Building, 
  ExternalLink,
  FileText,
  HeartPulse,
  Scale,
  HandHelping,
  ClipboardCheck,
  Stethoscope,
  Activity,
  Globe,
  CreditCard
} from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArticleSection } from "@/components/articles/ArticleSection";
import { DynamicHeroImage } from "@/components/ui/DynamicHeroImage";
import { AnimatedPhrase } from "@/components/ui/AnimatedPhrase";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://v01-901021565-8.vercel.app";

export const metadata: Metadata = {
  title: 'Tu salud, tus derechos y tus deberes: infórmate y actúa | Emssanar EPS',
  description: 'Conoce tus derechos y deberes como afiliado, acceso a servicios de salud integral y canales de atención confiables.',
  keywords: 'afiliados EPS, derechos y deberes del afiliado, plan de beneficios en salud, servicios de salud integral, atención al paciente, portabilidad EPS, atención urgente, copagos EPS, cuotas moderadoras, salud en Colombia, canales de atención EPS, Resolución 229 de 2020, Resolución 2718 de 2024, autocuidado, red de prestadores, trámites EPS',
  openGraph: {
    title: 'Tu salud, tus derechos y tus deberes: infórmate y actúa',
    description: 'Conoce tus derechos y deberes como afiliado, acceso a servicios de salud integral y canales de atención confiables.',
    url: `${siteUrl}/afiliados`,
    type: 'website',
    images: [
      {
        url: `/images/img-sub/canales-atencion-emssanar-eps-img16022026.webp`,
        width: 1200,
        height: 630,
        alt: 'Tu salud, tus derechos y tus deberes: infórmate y actúa',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tu salud, tus derechos y tus deberes: infórmate y actúa',
    description: 'Conoce tus derechos y deberes como afiliado, acceso a servicios de salud integral y canales de atención confiables.',
    images: [`/images/img-sub/canales-atencion-emssanar-eps-img16022026.webp`],
  }
};

export default function AfiliadosPage() {
  const regimes = [
    {
      title: "Régimen Subsidiado",
      description: "Accede a servicios de salud de calidad sin costo, garantizando tu bienestar y el de tu familia.",
      buttonText: "Conoce más",
      buttonLink: "/afiliados/subsidiado",
      imageUrl: "/images/img-sub/ico_subsidiado.svg",
    },
    {
      title: "Régimen Contributivo",
      description: "Cobertura completa para ti y tus beneficiarios a través de tu aporte como trabajador o independiente.",
      buttonText: "Explora beneficios",
      buttonLink: "/afiliados/contributivo",
      imageUrl: "/images/img-sub/ico_subsidiado.svg",
    },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="mb-12">
          <DynamicHeroImage 
            src="/images/img-sub/canales-atencion-emssanar-eps-img16022026.webp"
            alt="Derechos y Deberes del Afiliado"
            mainTitle="Tu salud, tus derechos y tus deberes: infórmate y actúa"
            title="¿Conoces tus derechos como afiliado? Esto es lo que debes saber, aquí te explicamos cuáles son."
            priority
          />

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed text-center mt-8">
            <p>
              Nuestra misión no solo es garantizar servicios de salud integrales para todos los afiliados, sino también promover la responsabilidad y el cuidado de tu salud en conjunto con tu familia. Estamos comprometidos a acompañarte en todo momento, asegurando el acceso y disfrute efectivo de los servicios de salud con criterios de pertinencia e integralidad.
            </p>
            <p>
              El contenido de esta página web está reglamentado por el Ministerio de Salud y Protección Social, de acuerdo con la Resolución 229 de 2020 (que define los lineamientos de la Carta de Derechos y Deberes) y la Resolución 2718 de 2024 (que actualiza los servicios y tecnologías financiados con la UPC). Nuestro objetivo es informarte claramente sobre tus derechos y deberes del afiliado dentro del sistema de salud colombiano.
            </p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto space-y-20">
          
          {/* Tarjetas de Régimen */}
          <section className="grid md:grid-cols-2 gap-8">
            {regimes.map((regime, index) => (
              <Card key={index} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow border-primary/10 overflow-hidden">
                <CardHeader className="items-center bg-primary/5 w-full py-8 text-title">
                  <div className="p-4 bg-background rounded-full shadow-sm mb-4">
                    <Image
                      src={regime.imageUrl}
                      alt={`Icono ${regime.title}`}
                      width={80}
                      height={80}
                      className="h-20 w-20"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold">{regime.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-8">
                  <p className="text-muted-foreground">{regime.description}</p>
                </CardContent>
                <CardFooter className="pb-8">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href={regime.buttonLink}>{regime.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </section>

          {/* Sección de Derechos y Deberes */}
          <section className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Derechos y Deberes del Afiliado</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conoce el marco legal que protege tu salud y las responsabilidades que compartimos para un sistema sostenible.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="rights" className="border rounded-xl px-6 bg-card shadow-sm">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-title">Derechos del Afiliado y del Paciente</h3>
                      <p className="text-sm text-muted-foreground font-normal">Acceso, calidad, trato digno y autonomía.</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 space-y-8">
                  <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4">
                    Todo afiliado, sin restricciones por motivos de pertenencia étnica, sexo, identidad de género, edad, religión o condición social o económica, tiene derecho a:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg flex items-center gap-2 text-primary">
                        <Activity className="h-5 w-5" aria-hidden="true" />
                        Acceso, Oportunidad y Calidad
                      </h4>
                      <ul className="space-y-4">
                        {[
                          { title: "Acceder sin restricción", desc: "Tienes derecho a acceder en condiciones de calidad, oportunidad y eficiencia a todas las actividades, procedimientos, intervenciones, insumos y medicamentos que no estén expresamente excluidos del Plan de Beneficios financiado con la UPC." },
                          { title: "Servicios de Urgencias sin Barreras", desc: "Recibir la atención de urgencias requerida con la oportunidad que su condición amerite, sin que sea exigible documento, carné o cancelación de pago previo alguno. Los pagos moderadores no deben constituir barreras al acceso." },
                          { title: "Atención Integral y Continua", desc: "Acceder a los servicios y tecnologías de salud en forma continua y sin interrupción por razones administrativas o económicas." },
                          { title: "Trámite de Servicios Interno", desc: "No se pueden imponer como requisito de acceso cargas administrativas propias de la EPS. La EPS debe autorizar y tramitar internamente los servicios de salud ordenados por el médico tratante." },
                          { title: "Portabilidad", desc: "Recibir atención médica y acceso a servicios de salud de manera integral en un municipio o distrito diferente al de su residencia si se traslada temporalmente por un periodo superior a un mes y hasta doce (12) meses." },
                          { title: "Libre Escogencia y Segunda Opinión", desc: "Elegir libremente el asegurador, el médico y las instituciones que le presten atención dentro de la oferta disponible. Además, tienes derecho a recibir una segunda opinión por parte de un profesional de la salud de la red en caso de duda sobre el diagnóstico o manejo." }
                        ].map((item, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <span className="font-bold text-foreground">• {item.title}:</span>
                            <span className="text-muted-foreground text-sm leading-relaxed">{item.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-lg flex items-center gap-2 text-primary">
                        <Scale className="h-5 w-5" aria-hidden="true" />
                        Dignidad y Autonomía
                      </h4>
                      <ul className="space-y-4">
                        {[
                          { title: "Trato Digno", desc: "Recibir un trato digno en el acceso a los servicios y en todas las etapas de atención, sin ser sometido a tratos crueles o inhumanos." },
                          { title: "Protección Especial por Alto Costo", desc: "Recibir protección especial si padece enfermedades catastróficas o de alto costo, implicando acceso oportuno a los servicios y la prohibición de cobro de copagos o cuotas moderadoras para estos eventos." },
                          { title: "Consentimiento Informado", desc: "Aceptar o rechazar actividades, intervenciones, medicamentos, dispositivos, servicios o tratamientos para su cuidado. Ninguna persona podrá ser obligada a recibirlos en contra de su voluntad." },
                          { title: "Acceso a Información y Confidencialidad", desc: "Recibir información clara y comprensible, y solicitar copia de la historia clínica, la cual debe ser tratada de manera confidencial y reservada. La copia de la historia clínica debe ser entregada en un término máximo de cinco (5) días calendario." }
                        ].map((item, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <span className="font-bold text-foreground">• {item.title}:</span>
                            <span className="text-muted-foreground text-sm leading-relaxed">{item.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="duties" className="border rounded-xl px-6 bg-card shadow-sm">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Users className="h-6 w-6 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-title">Responsabilidades en el Sistema de Salud</h3>
                      <p className="text-sm text-muted-foreground font-normal">Deberes del afiliado para la sostenibilidad del sistema.</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <p className="text-muted-foreground mb-8">Sé corresponsable con tu salud y la sostenibilidad del sistema. Según lo establecido en la ley, los afiliados y pacientes tienen los siguientes deberes:</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "Autocuidado", desc: "Propender por su autocuidado, el de su familia y el de su comunidad.", icon: <HeartPulse className="h-5 w-5" aria-hidden="true" /> },
                      { title: "Seguimiento Médico", desc: "Atender oportunamente las recomendaciones formuladas por el personal de salud y las recibidas en los programas de promoción y prevención.", icon: <Stethoscope className="h-5 w-5" aria-hidden="true" /> },
                      { title: "Solidaridad", desc: "Actuar de manera solidaria ante las situaciones que pongan en peligro la vida o la salud de las personas.", icon: <HandHelping className="h-5 w-5" aria-hidden="true" /> },
                      { title: "Respeto", desc: "Respetar al personal responsable de la prestación y administración de los servicios de salud, y a los otros pacientes.", icon: <Users className="h-5 w-5" aria-hidden="true" /> },
                      { title: "Uso Racional", desc: "Usar adecuada y racionalmente las prestaciones y los recursos ofrecidos por el SGSSS.", icon: <Scale className="h-5 w-5" aria-hidden="true" /> },
                      { title: "Información Veraz", desc: "Suministrar de manera voluntaria, oportuna y suficiente la información que se requiera para recibir el servicio.", icon: <ClipboardCheck className="h-5 w-5" aria-hidden="true" /> },
                      { title: "Cumplimiento Normativo", desc: "Cumplir las normas del Sistema General de Seguridad Social en Salud.", icon: <Shield className="h-5 w-5" aria-hidden="true" /> },
                      { title: "Aportes Económicos", desc: "Contribuir al financiamiento de los gastos que demande la atención, de acuerdo con su capacidad de pago.", icon: <CreditCard className="h-5 w-5" aria-hidden="true" /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-transparent hover:border-accent/20 transition-colors">
                        <div className="text-accent shrink-0">{item.icon}</div>
                        <div>
                          <h5 className="font-bold text-foreground">{i + 1}. {item.title}</h5>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Sección de PBS */}
          <section className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3 space-y-6">
                <div className="p-4 bg-primary text-white rounded-2xl w-fit">
                  <FileText className="h-10 w-10" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold text-title leading-tight">Plan de Beneficios en Salud (PBS) con cargo a la UPC</h2>
                <p className="text-primary font-bold">Resolución 2718 de 2024</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  El Plan de Beneficios con Cargo a la UPC es un derecho fundamental que define el conjunto de servicios, procedimientos, medicamentos y tecnologías para los afiliados.
                </p>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Servicios Cubiertos", desc: "La Resolución 2718 de 2024 garantiza promoción, prevención (RIAS), recuperación, rehabilitación y atención integral en salud mental." },
                  { title: "Dispositivos Médicos", desc: "Se garantizan insumos, suministros, material de curación, lentes correctores (según régimen) y prótesis/órtesis ortopédicas." },
                  { title: "Salud Mental", desc: "Incluye atención de urgencias y psicoterapia ambulatoria. Cubre internación si el trastorno pone en peligro la vida o integridad." },
                  { title: "Medicamentos", desc: "Derecho a acceder a fármacos, servicios y tecnologías descritos en el Anexo 1 de la Resolución 2718 de 2024, sin costos adicionales." },
                  { title: "Transporte y Traslado", desc: "Cubre traslado en ambulancia para urgencias y remisiones, y transporte ambulatorio en zonas con prima por dispersión geográfica." },
                  { title: "Pagos Moderadores", desc: "Cuotas moderadoras y copagos buscan el uso racional del sistema. Su falta de pago no impide el acceso a servicios esenciales." }
                ].map((item, i) => (
                  <Card key={i} className="border-none shadow-none bg-background/50 p-6">
                    <h4 className="font-bold text-title mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Sección de Canales de Atención */}
          <section className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Canales de Atención Oportuna y Contacto</h2>
              <p className="text-muted-foreground">Estamos cerca de ti para brindarte una atención preferencial y efectiva.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="md:col-span-2 border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl text-title">Opciones de Contacto Directo</CardTitle>
                  <CardDescription>Atención 24/7 y asesoría personalizada.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Canal</TableHead>
                        <TableHead>Contacto / Horario</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium flex items-center gap-2"><Phone className="h-4 w-4 text-primary" aria-hidden="true" /> Línea Nacional (24/7)</TableCell>
                        <TableCell>01 8000 930 942</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium flex items-center gap-2"><Phone className="h-4 w-4 text-primary" aria-hidden="true" /> Línea Fija</TableCell>
                        <TableCell>601 7055837</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium flex items-center gap-2"><MessageSquare className="h-4 w-4 text-green-600" aria-hidden="true" /> WhatsApp</TableCell>
                        <TableCell>311 6097426 (Lun-Vie, 7am-5pm)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium flex items-center gap-2"><Mail className="h-4 w-4 text-primary" aria-hidden="true" /> Correo Electrónico</TableCell>
                        <TableCell>afiliate@emssanareps.co</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Building className="h-6 w-6" aria-hidden="true" />
                    Oficinas de Atención
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm opacity-90 leading-relaxed">
                    Contamos con presencia en todos los municipios de cobertura para brindarte acompañamiento presencial y radicación de trámites.
                  </p>
                  <div className="bg-white/10 p-4 rounded-xl text-xs space-y-2">
                    <p className="font-bold border-b border-white/20 pb-1">Atención Preferencial:</p>
                    <ul className="list-disc list-inside opacity-90 space-y-1">
                      <li>Niños y niñas</li>
                      <li>Mujeres embarazadas</li>
                      <li>Adultos mayores</li>
                      <li>Personas con discapacidad</li>
                    </ul>
                  </div>
                  <Button asChild variant="secondary" className="w-full mt-4 font-bold">
                    <Link href="/afiliados/subsidiado/informacion/oficinas">Consultar Directorio</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sección de Recursos y PQRD */}
          <section className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-title">Recursos en Línea</h2>
              <div className="grid gap-4">
                <Button asChild variant="outline" className="h-auto py-4 justify-start text-left hover:bg-primary/5 hover:border-primary/30 group">
                  <Link href="https://emssanareps.co" className="flex items-center gap-4 w-full">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors"><Globe className="h-5 w-5 text-primary" aria-hidden="true" /></div>
                    <div>
                      <p className="font-bold text-foreground">Página Web [emssanareps.co]</p>
                      <p className="text-xs text-muted-foreground">Trámites virtuales y asistente ClaraBot.</p>
                    </div>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto py-4 justify-start text-left hover:bg-primary/5 hover:border-primary/30 group">
                  <Link href="/afiliados/subsidiado/informacion/prestadores" className="flex items-center gap-4 w-full">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors"><Stethoscope className="h-5 w-5 text-primary" aria-hidden="true" /></div>
                    <div>
                      <p className="font-bold text-foreground">Consulta tu Red de Servicios</p>
                      <p className="text-xs text-muted-foreground">Ubica tu IPS Primaria y Red de Urgencias.</p>
                    </div>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto py-4 justify-start text-left hover:bg-primary/5 hover:border-primary/30 group">
                  <Link href="/afiliados/subsidiado/tramites/movilidad" className="flex items-center gap-4 w-full">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors"><ExternalLink className="h-5 w-5 text-primary" aria-hidden="true" /></div>
                    <div>
                      <p className="font-bold text-foreground">Movilidad y Portabilidad</p>
                      <p className="text-xs text-muted-foreground">Gestiona tus traslados y régimen fácilmente.</p>
                    </div>
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-title">
                  <MessageSquare className="h-6 w-6 text-accent" aria-hidden="true" />
                  PQRD y Protección
                </CardTitle>
                <CardDescription>Valoramos tu retroalimentación para mejorar continuamente.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed">
                <p>Hemos dispuesto canales para la atención de Peticiones, Quejas, Reclamos y Denuncias (PQR) con el compromiso de gestionarlos de manera oportuna:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" aria-hidden="true" /> Formulario PQR y Chat ClaraBot en la web.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" aria-hidden="true" /> Buzones de sugerencias en cada oficina.</li>
                </ul>
                <div className="p-4 bg-background rounded-xl border border-accent/10 text-xs text-muted-foreground mt-4">
                  <p className="font-bold text-foreground mb-1">Mecanismos de Protección:</p>
                  Puedes presentar un derecho de petición o acudir a la Superintendencia Nacional de Salud (SNS) si la EPS o IPS pone en riesgo tu vida o integridad física.
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                  <Link href="/afiliados/subsidiado/tramites/pqr">Radicar Solicitud</Link>
                </Button>
              </CardFooter>
            </Card>
          </section>

          {/* Frase de cierre animada */}
          <section className="text-center py-16 border-t border-b bg-muted/30 rounded-3xl">
            <AnimatedPhrase 
              text="Recuerda, tu salud, tus derechos y tus deberes: infórmate y actúa"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight max-w-4xl mx-auto px-4"
            />
          </section>

        </main>
      </div>
      
      <ArticleSection title="Últimas noticias y novedades" />
    </div>
  );
}

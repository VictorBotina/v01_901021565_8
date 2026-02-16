// src/app/afiliados/subsidiado/informacion/canales-de-atencion/page.tsx
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { 
  Phone, 
  Globe, 
  Mail, 
  Smartphone, 
  MapPin, 
  MessageCircle, 
  MessageSquareText,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Share2
} from "lucide-react";
import Link from "next/link";
import React from 'react';

export const metadata: Metadata = {
  title: 'Canales de atención de Emssanar EPS para ti',
  description: 'Conoce los canales de atención de Emssanar EPS y comunícate fácilmente para gestionar solicitudes, recibir información y atención oportuna.',
  keywords: ['Canales de atención', 'Contacto Emssanar EPS', 'Atención al usuario', 'Comunicación EPS', 'Servicios en línea', 'Atención 24/7', 'PQRD', 'Afiliados Emssanar'],
  openGraph: {
    title: 'Canales de atención de Emssanar EPS para ti',
    description: 'Conoce los canales de atención de Emssanar EPS y comunícate fácilmente para gestionar solicitudes, recibir información y atención oportuna.',
    url: '/afiliados/subsidiado/informacion/canales-de-atencion',
    type: 'website',
    images: [
      {
        url: '/images/img-sub/canales-atencion-emssanar-eps-img16022026.webp',
        width: 1200,
        height: 630,
        alt: 'Canales de Atención Emssanar EPS',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canales de atención de Emssanar EPS para ti',
    description: 'Conoce los canales de atención de Emssanar EPS y comunícate fácilmente para gestionar solicitudes, recibir información y atención oportuna.',
    images: ['/images/img-sub/canales-atencion-emssanar-eps-img16022026.webp'],
  }
};

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function CanalesAtencionPage() {
  const channels = [
    {
      id: "clara-bot",
      title: "Clara Bot",
      description: "Información inmediata sobre afiliación y atención, con acompañamiento de agente de contacto cuando lo requieras.",
      icon: <MessageSquareText className="h-6 w-6" />,
      availability: "Servicio 24/7",
      is247: true,
    },
    {
      id: "web",
      title: "Página web",
      description: "Realiza trámites en línea como radicación de solicitudes, actualización de datos, PQRD, descarga de certificados y portabilidad.",
      icon: <Globe className="h-6 w-6" />,
      availability: "Servicio 24/7",
      is247: true,
      link: "https://emssanareps.co",
    },
    {
      id: "phones",
      title: "Líneas telefónicas",
      description: "Línea nacional: 01 8000 930 942 | Línea afiliados: (601) 705 58 37 | Línea COVID-19 y viruela símica: (601) 705 58 36.",
      icon: <Phone className="h-6 w-6" />,
      availability: "Servicio 24/7",
      is247: true,
    },
    {
      id: "email",
      title: "Correo electrónico",
      description: "Gestiona afiliaciones, traslados, movilidad, portabilidad y actualización de datos a través de afiliate@emssanareps.co.",
      icon: <Mail className="h-6 w-6" />,
      availability: "Servicio 24/7",
      is247: true,
      link: "mailto:afiliate@emssanareps.co",
    },
    {
      id: "app",
      title: "App móvil Emssanar EPS",
      description: "Accede a actualización de datos, trámites en línea, red de servicios, plan de atención individual y reporte de eventos.",
      icon: <Smartphone className="h-6 w-6" />,
      availability: "Servicio 24/7",
      is247: true,
      link: "https://bit.ly/Emssanar-App",
    },
    {
      id: "offices",
      title: "Oficinas de atención",
      description: "Atención presencial para radicar cualquier tipo de solicitud informativa o de gestión, con acompañamiento personalizado.",
      icon: <MapPin className="h-6 w-6" />,
      availability: "Horario según municipio",
      is247: false,
      link: "/afiliados/subsidiado/informacion/oficinas",
    },
    {
      id: "sms",
      title: "SMS masivos",
      description: "Recibe notificaciones sobre radicación de autorizaciones, direccionamientos y comunicaciones informativas importantes.",
      icon: <MessageCircle className="h-6 w-6" />,
      availability: "Servicio 24/7",
      is247: true,
    },
  ];

  const socialMedia = [
    { name: "TikTok", url: "https://www.tiktok.com/@emssanar", icon: <TikTokIcon className="h-5 w-5" /> },
    { name: "Facebook", url: "https://www.facebook.com/EmssanarEPS", icon: <Facebook className="h-5 w-5" /> },
    { name: "Instagram", url: "https://www.instagram.com/emssanar_eps", icon: <Instagram className="h-5 w-5" /> },
    { name: "X (Twitter)", url: "https://twitter.com/EmssanarEPS", icon: <Twitter className="h-5 w-5" /> },
    { name: "YouTube", url: "https://www.youtube.com/channel/UCW2ZC89js0wcRExrUYMgz5w", icon: <Youtube className="h-5 w-5" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="mb-12 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-title mb-6">
          Canales de atención de Emssanar EPS para ti
        </h1>
        
        <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-xl mb-8">
          <Image 
            src="/images/img-sub/canales-atencion-emssanar-eps-img16022026.webp"
            alt="Cabecera Canales de Atención Emssanar EPS"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-xl text-primary font-semibold mb-6">
          Comunícate con Emssanar EPS cuando lo necesites
        </p>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
          <p>
            En Emssanar EPS trabajamos para brindarte una atención cercana, oportuna y eficiente. Por eso, hemos dispuesto una amplia variedad de canales de atención, diseñados para que puedas comunicarte con nosotros de forma sencilla, segura y acorde a tus necesidades, ya seas usuario del régimen subsidiado o contributivo.
          </p>
          <p>
            Nuestro objetivo es que cuentes con múltiples alternativas para resolver tus inquietudes, realizar trámites, gestionar solicitudes y recibir acompañamiento permanente. Cada canal refleja nuestro compromiso con la escucha activa, la transparencia y la mejora continua del servicio, facilitando una experiencia de atención integral.
          </p>
        </div>
      </header>

      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Canales de atención disponibles para ti</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ponemos a tu disposición canales digitales, telefónicos y presenciales con amplios horarios de disponibilidad y atención especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel) => (
            <Card key={channel.id} className="flex flex-col h-full hover:shadow-lg transition-shadow border-primary/10">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {channel.icon}
                  </div>
                  <Badge variant={channel.is247 ? "default" : "secondary"} className="font-medium">
                    {channel.availability}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{channel.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {channel.description}
                </p>
              </CardContent>
              {channel.link && (
                <CardFooter className="pt-0">
                  <Button asChild variant="outline" className="w-full group">
                    <Link href={channel.link} target={channel.link.startsWith('http') ? "_blank" : "_self"}>
                      {channel.link.startsWith('http') ? 'Acceder ahora' : 'Ver detalles'}
                      <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-accent/5 rounded-2xl p-8 mb-16 border border-accent/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Share2 className="text-primary h-8 w-8" />
              Redes sociales
            </h2>
            <p className="text-muted-foreground text-lg">
              Consulta información, realiza solicitudes y recibe orientación a través de nuestros canales oficiales.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialMedia.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.url} 
                  target="_blank"
                  className="p-3 bg-background border rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md"
                  aria-label={`Seguir en ${social.name}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <Card className="bg-background shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Horarios de Redes Sociales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-muted-foreground">Consulta de información</span>
                <Badge variant="outline">24/7</Badge>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-muted-foreground">Atención con agente</span>
                <span className="text-sm">Lunes a viernes</span>
              </div>
              <div className="text-right text-primary font-bold">
                7:00 a.m. a 6:00 p.m.
              </div>
              <div className="bg-primary/5 p-4 rounded-lg text-center font-semibold text-primary">
                Atención digital
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center space-y-8 py-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Una atención pensada para ti</h2>
          <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
            <p>
              En Emssanar EPS creemos que una buena comunicación es clave para una atención en salud de calidad. Por eso, fortalecemos continuamente nuestros canales para ofrecerte respuestas claras, procesos ágiles y acompañamiento oportuno en cada trámite o solicitud.
            </p>
            <p>
              Te invitamos a utilizar estos canales de manera responsable y a elegir el que mejor se adapte a tu necesidad. Nuestro equipo está siempre dispuesto a escucharte y brindarte soluciones, reafirmando nuestro compromiso con el bienestar de nuestros afiliados.
            </p>
          </div>
        </div>
        
        <div className="pt-8">
          <div className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full text-xl font-bold shadow-lg transform hover:scale-105 transition-transform">
            Emssanar EPS, siempre conectados contigo
          </div>
        </div>
      </section>
    </div>
  );
}

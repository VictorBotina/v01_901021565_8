// src/app/afiliados/subsidiado/salud/programas/fiebre-amarilla/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fiebre Amarilla: Qué es y cómo prevenir la enfermedad | Emssanar EPS',
    description: 'Información detallada sobre la fiebre amarilla, síntomas de alerta y la importancia de la vacunación para la prevención.',
    keywords: ['fiebre amarilla', 'vacunación', 'prevención', 'síntomas fiebre amarilla', 'salud pública', 'Emssanar EPS'],
};

export default function FiebreAmarillaPage() {
  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Fiebre Amarilla: Qué es y cómo prevenir la enfermedad</h1>
        <p className="text-lg text-muted-foreground">
          La fiebre amarilla es una enfermedad viral prevenible que se transmite a través de la picadura de mosquitos infectados. Conoce cómo protegerte y proteger a tu comunidad.
        </p>
      </header>

      <div className="grid gap-8 max-w-4xl">
        <section>
          <h2 className="text-2xl font-semibold mb-3">¿Qué es la Fiebre Amarilla?</h2>
          <p className="text-foreground/80 leading-relaxed">
            Es una infección viral transmitida por mosquitos de los géneros Aedes y Haemagogus. Se denomina "amarilla" debido a la ictericia (coloración amarillenta de la piel y los ojos) que presentan algunos pacientes. Es una enfermedad endémica en zonas tropicales de África y América Latina.
          </p>
        </section>

        <section className="bg-accent/10 p-6 rounded-lg border-l-4 border-primary">
          <h2 className="text-xl font-bold mb-2">La Vacunación: Tu mejor defensa</h2>
          <p className="text-foreground/80">
            La vacuna contra la fiebre amarilla es segura, asequible y una sola dosis es suficiente para conferir inmunidad y protección de por vida, sin necesidad de dosis de refuerzo. Debe administrarse al menos 10 días antes de viajar a una zona de riesgo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Medidas de Prevención</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            <li><strong>Vacunarse:</strong> Es la medida más efectiva.</li>
            <li><strong>Uso de repelentes:</strong> Aplicar repelente en la piel expuesta siguiendo las instrucciones del fabricante.</li>
            <li><strong>Ropa protectora:</strong> Usar camisas de manga larga y pantalones largos, preferiblemente de colores claros.</li>
            <li><strong>Control de mosquitos:</strong> Eliminar criaderos de mosquitos en el hogar y alrededores (recipientes con agua estancada).</li>
            <li><strong>Uso de toldillos:</strong> Especialmente si se duerme durante el día o en zonas de alta presencia de mosquitos.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

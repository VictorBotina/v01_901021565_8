// src/app/afiliados/subsidiado/salud/programas/enfermedades-huerfanas/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enfermedades Huérfanas | Atención Especializada y Seguimiento',
    description: 'Programa de atención para enfermedades huérfanas, raras, ultra-huérfanas y olvidadas. Seguimiento integral para pacientes y sus familias en Emssanar EPS.',
    keywords: ['enfermedades huérfanas', 'enfermedades raras', 'atención especializada', 'Emssanar EPS', 'salud pública'],
};

export default function EnfermedadesHuerfanasPage() {
  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Enfermedades Huérfanas</h1>
        <p className="text-lg text-muted-foreground">
          Nuestro compromiso es brindar una atención integral, continua y humanizada a los pacientes diagnosticados con enfermedades de baja prevalencia.
        </p>
      </header>

      <div className="grid gap-8 max-w-4xl">
        <section>
          <h2 className="text-2xl font-semibold mb-3">¿Qué son las Enfermedades Huérfanas?</h2>
          <p className="text-foreground/80 leading-relaxed">
            Son aquellas enfermedades crónicamente debilitantes, graves, que amenazan la vida y que tienen una baja prevalencia (menor de 1 por cada 5.000 personas). Este grupo incluye las enfermedades raras, las ultra-huérfanas y las olvidadas.
          </p>
        </section>

        <section className="bg-accent/10 p-6 rounded-lg border-l-4 border-primary">
          <h2 className="text-xl font-bold mb-2">Nuestro Enfoque de Atención</h2>
          <p className="text-foreground/80">
            En Emssanar EPS S.A.S. trabajamos para garantizar el acceso a diagnósticos oportunos, tratamientos especializados y el suministro de tecnologías en salud necesarias, coordinando con centros de referencia para asegurar la mejor calidad de vida posible a nuestros afiliados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Compromisos con el Afiliado</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            <li><strong>Atención Integral:</strong> Acceso a equipos multidisciplinarios calificados para el manejo de su condición.</li>
            <li><strong>Sin Barreras:</strong> Eliminación de obstáculos administrativos para la prestación de servicios esenciales.</li>
            <li><strong>Seguimiento:</strong> Monitoreo constante de la evolución clínica y el bienestar del paciente.</li>
            <li><strong>Apoyo Familiar:</strong> Orientación y acompañamiento a los cuidadores y al núcleo familiar.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

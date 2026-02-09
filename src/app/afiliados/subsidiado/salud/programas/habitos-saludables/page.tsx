// src/app/afiliados/subsidiado/salud/programas/habitos-saludables/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hábitos Saludables y Vida Activa | Bienestar Integral',
    description: 'Consejos y guías para una alimentación balanceada, actividad física y un estilo de vida saludable.',
    keywords: ['hábitos saludables', 'nutrición', 'vida activa', 'ejercicio', 'alimentación sana', 'Emssanar EPS'],
};

export default function HabitosSaludablesPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Hábitos Saludables y Vida Activa</h1>
        <p className="text-lg">
          Promovemos el bienestar integral a través de la alimentación balanceada y la actividad física regular.
        </p>
        <div className="mt-8 space-y-6">
            <section>
                <h2 className="text-2xl font-semibold mb-2">Alimentación Balanceada</h2>
                <p className="text-muted-foreground">
                    Consumir frutas, verduras y mantenerse hidratado es fundamental para prevenir enfermedades crónicas.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-2">Actividad Física</h2>
                <p className="text-muted-foreground">
                    Realizar al menos 30 minutos de ejercicio diario fortalece tu corazón y mejora tu estado de ánimo.
                </p>
            </section>
        </div>
      </div>
    );
  }

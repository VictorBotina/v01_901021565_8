import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prevención del Embarazo Adolescente | Salud Sexual y Reproductiva',
    description: 'Programas de orientación, educación y servicios de salud para la prevención del embarazo en adolescentes.',
    keywords: ['embarazo adolescente', 'prevención', 'salud sexual', 'adolescencia', 'Emssanar EPS'],
};

export default function PrevencionEmbarazoAdolescentePage() {
  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Prevención del Embarazo Adolescente</h1>
        <p className="text-lg text-muted-foreground">
          Nuestro compromiso es brindar herramientas educativas y acceso a servicios de salud que permitan a los jóvenes tomar decisiones informadas sobre su proyecto de vida.
        </p>
      </header>

      <div className="grid gap-8 max-w-4xl">
        <section>
          <h2 className="text-2xl font-semibold mb-3">¿En qué consiste el programa?</h2>
          <p className="text-foreground/80 leading-relaxed">
            Es un conjunto de acciones integrales orientadas a promover la salud sexual y reproductiva de los adolescentes, fomentando el autocuidado, la toma de decisiones responsables y el acceso efectivo a métodos de planificación familiar.
          </p>
        </section>

        <section className="bg-accent/10 p-6 rounded-lg border-l-4 border-primary">
          <h2 className="text-xl font-bold mb-2">Nuestro Enfoque</h2>
          <p className="text-foreground/80">
            Trabajamos bajo un modelo de atención amigable y confidencial, asegurando que los adolescentes encuentren un espacio seguro para resolver dudas y recibir orientación profesional sin prejuicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Servicios Disponibles</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            <li><strong>Asesoría en Salud Sexual:</strong> Orientación personalizada sobre derechos sexuales y reproductivos.</li>
            <li><strong>Planificación Familiar:</strong> Información y acceso a diversos métodos anticonceptivos de forma gratuita.</li>
            <li><strong>Talleres Educativos:</strong> Espacios de formación para adolescentes, padres y cuidadores.</li>
            <li><strong>Atención Integral:</strong> Consulta médica y psicológica enfocada en las necesidades de la etapa adolescente.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

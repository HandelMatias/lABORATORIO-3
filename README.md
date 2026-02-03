
# Diagrama de roles

```mermaid
flowchart TD
  Donante[Donante] --> R1[Registro / Login]
  Donante --> D1[Crear Donación Dinero]
  Donante --> D2[Crear Donación Física]
  Donante --> P1[Ver mis Donaciones]
  Donante --> C1[Chat por Donación]

  D1 --> S1[Stripe Checkout]
  S1 --> E1[Estado: pagado]

  D2 --> P2[Estado: pendiente]
  P2 --> Recolector[Recolector]
  Recolector --> A1[Asignar Donación]
  A1 --> E2[Estado: asignada]
  Recolector --> E3[Entregar Donación]
  E3 --> E4[Estado: entregada]
  Recolector --> C1

  Admin[Admin] --> U1[Gestionar Usuarios/Roles]
  Admin --> EST[Actualizar Estado Donación]
  Admin --> DASH[Dashboard Estadísticas]
  Admin --> C1

  C1 --> Hist[Historial de Chat (API)]

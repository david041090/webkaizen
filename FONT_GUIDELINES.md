# Guía de Tipografía y Espaciado Responsivo

Este documento proporciona una guía para el uso de las clases de utilidad responsiva implementadas en el proyecto para mantener consistencia en tipografía y espaciado.

## Clases de Tipografía

### Encabezados

| Clase | Descripción | Tamaño Móvil | Tamaño Escritorio |
|-------|-------------|--------------|-------------------|
| `.heading-1` | Encabezado principal | 2.25rem (36px) | 3rem (48px) |
| `.heading-2` | Encabezado secundario | 1.875rem (30px) | 2.5rem (40px) |
| `.heading-3` | Encabezado terciario | 1.5rem (24px) | 2rem (32px) |
| `.heading-4` | Encabezado cuaternario | 1.25rem (20px) | 1.5rem (24px) |
| `.heading-5` | Encabezado quinto nivel | 1.125rem (18px) | 1.25rem (20px) |

### Texto de Cuerpo

| Clase | Descripción | Tamaño Móvil | Tamaño Escritorio |
|-------|-------------|--------------|-------------------|
| `.text-body-lg` | Texto grande | 1.125rem (18px) | 1.25rem (20px) |
| `.text-body` | Texto normal | 1rem (16px) | 1.125rem (18px) |
| `.text-body-sm` | Texto pequeño | 0.875rem (14px) | 1rem (16px) |

## Clases de Espaciado

| Clase | Descripción | Espaciado Móvil | Espaciado Escritorio |
|-------|-------------|-----------------|----------------------|
| `.section-spacing` | Espaciado entre secciones | 2rem (32px) | 3rem (48px) |
| `.container-spacing` | Espaciado interior de contenedores | 1.25rem (20px) | 2rem (32px) |
| `.item-spacing` | Espaciado entre elementos | 1rem (16px) | 1.5rem (24px) |
| `.grid-spacing` | Espaciado en grids | 0.75rem (12px) - 1.5rem (24px) | 1rem (16px) - 2rem (32px) |

## Clases para Iconos

| Clase | Descripción | Tamaño Móvil | Tamaño Escritorio |
|-------|-------------|--------------|-------------------|
| `.icon-small` | Iconos pequeños | 1rem (16px) | 1.25rem (20px) |
| `.icon-medium` | Iconos medianos | 1.25rem (20px) | 1.75rem (28px) |
| `.icon-large` | Iconos grandes | 1.5rem (24px) | 2rem (32px) |

## Uso

Para implementar estas clases en los componentes, simplemente reemplaza las clases de Tailwind específicas de tamaño por estas clases de utilidad. Ejemplo:

```jsx
// Antes
<h1 className="text-2xl md:text-4xl font-bold">Título Principal</h1>

// Después
<h1 className="heading-1">Título Principal</h1>
```

### Componentes Actualizados

Los siguientes componentes han sido actualizados para utilizar estas nuevas clases y pueden servir como referencia:

- **Página de Nosotros** (`src/pages/Nosotros.jsx`): Implementación completa de la guía
- **PageBanner** (`src/components/PageBanner.jsx`): Encabezados y texto responsivo
- **Navbar** (`src/components/Navbar/Navbar.jsx`): Implementación de iconos y texto
- **Footer** (`src/components/Footer/Footer.jsx`): Implementación completa

## Componentes Reutilizables

### Botón

Se ha creado un componente de botón reutilizable (`src/components/shared/Button.jsx`) que implementa las clases de utilidad responsiva. Este componente ofrece:

- **Variantes**: `primary`, `secondary`, `outline`, `ghost`, `danger`, `success`
- **Tamaños**: `small`, `medium`, `large`
- **Con iconos**: Izquierda o derecha
- **Formas**: Estándar o redondeado
- **Ancho**: Normal o completo (`fullWidth`)
- **Estados**: Normal o deshabilitado

Ejemplo de uso:

```jsx
import Button from '../components/shared/Button';

// Botón básico
<Button>Botón Estándar</Button>

// Botón con variante y tamaño
<Button variant="secondary" size="large">Botón Grande</Button>

// Botón con icono
<Button icon="fas fa-download" variant="primary">Descargar</Button>

// Botón con icono a la derecha
<Button icon="fas fa-arrow-right" iconPosition="right">Siguiente</Button>

// Botón redondeado
<Button rounded variant="outline">Botón Redondeado</Button>

// Botón de ancho completo
<Button fullWidth variant="success">Guardar Cambios</Button>

// Botón deshabilitado
<Button disabled>No Disponible</Button>
```

Para ver ejemplos de todas las variantes, consulta el componente `ButtonExample` (`src/components/shared/ButtonExample.jsx`).

## Beneficios

- **Consistencia**: Mantiene una apariencia visual coherente en toda la aplicación
- **Mantenibilidad**: Facilita cambios globales de estilo desde un único lugar
- **Responsividad**: Garantiza que todos los textos y espaciados se adapten correctamente a diferentes tamaños de pantalla
- **Desarrollo más rápido**: Reduce la repetición de código y simplifica la implementación de estilos 
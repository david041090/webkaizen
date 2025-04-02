# Documentación de Componentes

## Componentes Base

### WhatsAppButton
Botón de WhatsApp reutilizable con diferentes variantes.

```jsx
<WhatsAppButton 
  phoneNumber="51999393895"
  text="Escribir a WhatsApp"
  variant="default" // default | inline
/>
```

### ActionButton
Botón de acción versátil que soporta Link, anchor y button.

```jsx
<ActionButton
  to="/ruta"              // Para Link
  href="https://..."      // Para anchor
  text="Texto del botón"
  icon="fa-solid fa-icon"
  variant="primary"       // primary | secondary | outline
/>
```

### Card
Componente de tarjeta para mostrar información.

```jsx
<Card
  title="Título"
  description="Descripción"
  icon="fa-solid fa-icon"
  variant="default"       // default | benefit | feature
/>
```

### FeatureSection
Sección para mostrar características o beneficios.

```jsx
<FeatureSection
  title="Título de la sección"
  icon="fa-solid fa-icon"
  items={[
    {
      title: "Título",
      description: "Descripción",
      icon: "fa-solid fa-icon"
    }
  ]}
  columns={2}
  variant="default"       // default | benefit
/>
```

### SectionTitle
Título de sección con soporte para subtítulos e iconos.

```jsx
<SectionTitle
  title="Título principal"
  subtitle="Subtítulo opcional"
  icon="fa-solid fa-icon"
  align="left"           // left | center
  variant="default"      // default | large
/>
```

### IconText
Componente para mostrar icono con texto.

```jsx
<IconText
  icon="fa-solid fa-icon"
  text="Texto a mostrar"
  variant="default"      // default | list | feature
/>
```

## Sistema de Temas

El sistema de temas está definido en `src/styles/theme.js` y proporciona:

- Colores consistentes
- Tipografía
- Espaciado
- Bordes redondeados
- Sombras
- Transiciones

## Buenas Prácticas

1. Usar componentes base en lugar de repetir código
2. Mantener consistencia en el diseño usando el sistema de temas
3. Documentar nuevos componentes
4. Validar props con PropTypes
5. Mantener los componentes pequeños y enfocados
6. Usar nombres descriptivos y consistentes 
# twin-ui

Accessible React components for creating beautiful UIs. Built with Tailwind CSS, Radix UI, TypeScript, and React, this library provides simple, lightweight and easy-to-use components for building stunning UIs that are both beautiful and accessible.

Furthermore, it comes with pre-configured animations and offers pre-designed components, layouts, and pages, making it an ideal choice for getting your project up and running quickly.

## Images

<p align="center">
<img width="100" alt="button-preview-1" src="docs/button-preview-1.png">
<img width="100" alt="button-preview-2" src="docs/button-preview-2.png">
<img width="100" alt="checkbox-preview-1" src="docs/checkbox-preview-1.png">
<img width="100" alt="tooltip-preview-1" src="docs/tooltip-preview-1.png">
<img width="300" alt="input-preview-1" src="docs/input-preview-1.png">
<img width="400" alt="sign-in-preview-1" src="docs/sign-in-preview-1.png">
<img width="400" alt="toasts-preview-1" src="docs/toasts-preview-1.png">
<img width="200" alt="dropdown-preview-1" src="docs/dropdown-preview-1.png">
<img width="500" alt="dialog-preview-1" src="docs/dialog-preview-1.png">
</p>

## Contents

**Components**

- Button
- Checkbox
- Dialog
- Drawer
- Dropdown
- Input
- Label
- Link
- Nav
- Spinner
- Text
- Title
- Toast
- Tooltip

**Layouts**

- Center

**Pages**

- SignIn
- NotFound
- Error

## Installation

To use `twin-ui`, install the package via npm.

```shell
npm install twin-ui

# or install a specific version
npm install twin-ui@x.x.x
```

## Customization

This component library is built with Tailwind CSS and supports full customization through CSS variables. You can override theme values globally using either the Tailwind specific `@theme` directive or the CSS `:root` selector in your `index.css`.

**Note**: [Theme variables](https://tailwindcss.com/docs/theme) aren't just CSS variables — they also instruct Tailwind to create new utility classes that you can use in your HTML.

```css
/* Using the @theme directive */
@theme {
  --color-primary-50: #eef2ff;
  --color-primary-100: #e0e7ff;
  --color-primary-200: #c7d2fe;
  --color-primary-300: #a5b4fc;
  --color-primary-400: #818cf8;
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --color-primary-700: #4338ca;
  --color-primary-800: #3730a3;
  --color-primary-900: #312e81;
  --color-primary-950: #1e1b4b;
}

/* Or via the :root pseudo-class */
:root {
  --color-primary-50: #eef2ff;
  --color-primary-100: #e0e7ff;
  --color-primary-200: #c7d2fe;
  --color-primary-300: #a5b4fc;
  --color-primary-400: #818cf8;
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --color-primary-700: #4338ca;
  --color-primary-800: #3730a3;
  --color-primary-900: #312e81;
  --color-primary-950: #1e1b4b;
}
```

## Examples

**Button**

```jsx
import { Button } from 'twin-ui';

const Component = () => (
  <Button color='primary' onClick={() => {...}}>
    Click
  </Button>
);
```

**Dialog**

```jsx
import { Dialogs, useDialog } from 'twin-ui';

const Component = () => {
  const dialog = useDialog();

  return (
    <Button onClick={() => dialog.open({...}))}>
      Click
    </Button>
  );
};

const App = () => {
  return (
    <>
      <Component />
      <Dialogs />
    </>
  );
}
```

**Center Layout**

```jsx
import { CenterLayout } from 'twin-ui';

const Component = () => (
  <CenterLayout>
    <div>Centered</div>
  </CenterLayout>
);
```

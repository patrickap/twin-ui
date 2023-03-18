# twin-ui

Accessible React components for creating beautiful UIs. Built with Tailwind CSS, Radix UI, TypeScript, and React, this library provides simple, lightweight and easy-to-use components for building stunning UIs that are both beautiful and accessible.

Furthermore, it comes with pre-configured animations and offers pre-designed components, layouts, and pages, making it an ideal choice for getting your project up and running quickly.

## Installation

To use `twin-ui`, install the package via npm.

```shell
npm install twin-ui

# or install a specific version
npm install twin-ui@x.x.x
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
import { Dialog, Dialogs, useDialog } from 'twin-ui';

const Component = () => {
  const dialog = useDialog();

  return (
    <Button color='primary' onClick={() => dialog.open({...}))}>
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

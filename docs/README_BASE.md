# Piwik PRO Library for React

Dedicated Piwik PRO library that helps with implementing Piwik PRO Tag Manager and the Piwik PRO tracking client in React applications.


## Installation

### NPM

To use this package in your project, run the following command.

```
npm install @piwikpro/react-piwik-pro
```


### Basic setup

In your React Project, include the default `PiwikPro` in the highest level application module. ie `index`. To set up the Piwik PRO Tag Manager container in the app, the easiest way is to call the `PiwikPro.initialize()` method. `PiwikPro.initialize()` must be initialized using this function before any of the other tracking functions will record any data.

In the arguments, pass your app ID and your account URL as parameters (marked 'container-id' and 'container-url' in the example below).

```ts
import PiwikPro from '@piwikpro/react-piwik-pro';

PiwikPro.initialize('container-id', 'container-url');

ReactDOM.render(<App />, document.getElementById('root'))
```

### Setup with nonce

The nonce attribute is useful to allow-list specific elements, such as a particular inline script or style elements. It can help you to avoid using the CSP unsafe-inline directive, which would allow-list all inline scripts or styles.

If you want your nonce to be passed to the script, pass it as the third argument when calling the script initialization method.

```ts
import PiwikPro from '@piwikpro/react-piwik-pro';

PiwikPro.initialize('container-id', 'container-url', 'nonce-string');

ReactDOM.render(<App />, document.getElementById('root'))
```

## Piwik PRO Services

### Send Custom Events

```ts
import { CustomEvent } from '@piwikpro/react-piwik-pro'

export class TestFormComponent {

  onUserInputName() {
    ...
    CustomEvent.trackEvent('user_register_form', 'enter_name', 'Name', 'Value');
  }

  onUserInputEmail() {
    ...
    CustomEvent.trackEvent('user_register_form', 'enter_email', 'Email', 'Value');
  }

  onSubmit() {
    ...
    CustomEvent.trackEvent('user_register_form', 'submit', 'Sent');
  }
}

```

### Send page views and virtual page views

```ts
import { PageViews } from '@piwikpro/react-piwik-pro';
...

const App = () => {

  PageViews.trackPageView('optional title');

  return ...;
}

export default App
```

### Send an event with Data Layer

```ts
import { DataLayer } from '@piwikpro/react-piwik-pro';
...

const App = () => {

  DataLayer.push({ event: 'test-event' });

  return ...;
}

export default App
```
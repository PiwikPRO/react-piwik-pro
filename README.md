# Piwik PRO Library for React

Dedicated Piwik PRO library that helps with implementing Piwik PRO Tag Manager and the Piwik PRO tracking client in React applications.

* [Installation](#installation)
  * [NPM](#npm)
  * [Basic setup](#basic-setup)

[comment]: <> (  * [Routing setup]&#40;#set-up-the-pageviews&#41;)
* [Piwik PRO Services](#piwik-pro-services)
  * [Custom Events](#send-custom-events)
  * [Page Views](#send-page-views-and-virtual-page-views)
* [API](#api)
  * [Page Views Service](#page-views-service)
  * [User Management](#user-management)
  * [Custom Event](#custom-event)
  * [Site search Service](#site-search-service)
  * [E-Commerce Service](#e-commerce-service)
  * [Content Tracking Service](#content-tracking-service)
  * [Download and outlink Service](#download-and-outlink-service)
  * [Goal Conversions](#goal-conversions)
  * [Custom Dimensions](#custom-dimensions)
  * [DataLayer Service](#data-layer)

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


[comment]: <> (### Set up the PageViews)

[comment]: <> (Page view is the most basic type of the tracked event. It represents a single page viewing action. We provide a hooks perform automatic page views every time your application navigates to another page.)

[comment]: <> (Add ```useTrackPageViews&#40;&#41;``` to the component of your application.)

[comment]: <> (```ts)

[comment]: <> (import { useTrackPageViews } from '@piwikpro/react-piwik-pro';)

[comment]: <> (...)

[comment]: <> (const App = &#40;&#41; => {)

[comment]: <> (  useTrackPageViews&#40;&#41;;)

[comment]: <> (  return ...;)

[comment]: <> (})

[comment]: <> (export default App)

[comment]: <> (```)

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

## API

### Initialize

```ts
import PiwikPro from '@piwikpro/react-piwik-pro';
```
#### Methods
* initialize(containerId: string, containerUrl:string, nonce?: string) - initialisation of the library

### Page Views Service
A page view is the most basic type of a tracked event. It represents a single page viewing action.
#### Import
```ts
import { PageViews } from '@piwikpro/react-piwik-pro'
```
#### Methods
* `trackPageView(customPageTitle?: string)` - Tracks a visit on the page that the function was run on.

### User Management
#### Import
```ts
import { UserManagement } from '@piwikpro/react-piwik-pro'
```
#### Methods
* `getUserId()` - The function that will return user ID.
* `setUserId(userId: string)` - user ID is an additional parameter that allows you to aggregate data. When set up, you will be able to search through sessions by this parameter, filter reports through it or create Multi attribution reports using User ID.
* `resetUserId()` - Clears previously set `userID`, e.g. when visitor logs out.
* `getVisitorId()`  - Returns 16-character hex ID of the visitor.
* `getVisitorInfo()` - Returns visitor information in an array:
  * new visitor flag indicating new (1) or returning (0) visitor
  * visitor ID (UUID)
  * first visit timestamp (Unix epoch time)
  * previous visit count (0 for first visit)
  * current visit timestamp (Unix epoch time)
  * last visit timestamp (Unix epoch time or '' if N/A)
  * last e-commerce order timestamp (Unix epoch time or '' if N/A)

### Custom Event
Custom events enable tracking visitor actions that are not predefined in the existing [JavaScript Tracking Client API](https://developers.piwik.pro/en/latest/data_collection/web/javascript_tracking_client/api.html), allowing web analysts to accurately measure and analyze any domain.
#### Import
```ts
import { CustomEvent } from '@piwikpro/react-piwik-pro'
```
#### Methods
* `trackEvent(category: string, action: string, name?: string, value?: number) ` - Tracks a custom event, e.g. when a visitor interacts with the page.

### Site search Service
Site search tracking gives you insights into how visitors interact with the search engine on your website - what they search for and how many results they get back.
#### Import
```ts
import { SiteSearch } from '@piwikpro/react-piwik-pro'
```
#### Methods
* `trackSiteSearch(keyword: string, category?: string, searchCount?: number, dimensions?: Object)` - Tracks search requests on a website.

### E-Commerce Service
#### Import
```ts
import { eCommerce } from '@piwikpro/react-piwik-pro'
```
#### Methods
* `ecommerceAddToCart(products: Product[])` - Tracks action of adding products to a cart.
* `ecommerceRemoveFromCart(products: Product[])` - Tracks action of removing a products from a cart.
* `ecommerceOrder(products: Product[], paymentInformation: PaymentInformation)` - Tracks conversion (including products and payment details).
* `ecommerceCartUpdate(products: Product[], grandTotal: PaymentInformation['grandTotal'])` - Tracks current state of a cart.
* `ecommerceProductDetailView(products: Product[])` - Tracks product or category view. Must be followed by a page view.

### Content Tracking Service
Content Tracking lets you track what content is visible on your site and how users interact with it.
#### Import
```ts
import { ContentTracking } from '@piwikpro/react-piwik-pro'
```
### Methods
* `trackContentImpression(contentName: string, contentPiece: string, contentTarget: string)` - Tracks manual content impression event.
* `trackContentInteraction(contentInteraction: string, contentName: string, contentPiece: string, contentTarget: string)` - Tracks manual content interaction event.

### Download and outlink Service
#### Import
```ts
import { DownloadAndOutlink } from '@piwikpro/react-piwik-pro'
```
#### Methods
* `trackLink(url: string, linkType: string, customData?: object, callback?: (params: any) => void)` - Manually tracks outlink or download event with provided values.
* `enableLinkTracking(enable: boolean)`  - Enables or disables automatic link tracking. If enabled, left, right and middle clicks on links will be treated as opening a link. Opening a links to an external site (different domain) creates an outlink event. Opening a link to a downloadable file creates a download event.
* `setLinkClasses(classes: string[])`  - Sets a list of class names that indicate whether a link is an outlink and not download.
* `setDownloadClasses(classes: string[])`  - Sets a list of class names that indicate whether a list is a download and not an outlink.
* `setDownloadExtensions(extensions: string[])`  - Overwrites the list of file extensions indicating that a link is a download.
* `addDownloadExtensions(extensions: string[])`  - Adds new extensions to the download extensions list.
* `removeDownloadExtensions(extensions: string[])`  - Removes extensions from the download extensions list.
* `setLinkTrackingTimer(time: number)`  - When a visitor produces an events and closes the page immediately afterwards, e.g. when opening a link, the request might get cancelled. To avoid loosing the last event this way, JavaScript Tracking Client will lock the page for a fraction of a second (if wait time hasn’t passed), giving the request time to reach the Collecting & Processing Pipeline.
* `getLinkTrackingTimer()`  - Returns lock/wait time after a request set by setLinkTrackingTimer.
* `setIgnoreClasses(classes: string[])` - Set a list of class names that indicate a link should not be tracked.

### Goal Conversions
Goals let you define important actions registered in your application and track conversions when the conditions for the action are fulfilled.
#### Import
```ts
import { GoalConversions } from '@piwikpro/react-piwik-pro'
```
#### Methods
* `trackGoal(goalId: number | string, conversionValue: number, dimensions?: Object)` - Tracks manual goal conversion.

### Custom Dimensions
#### Import
```ts
import { CustomDimensions } from '@piwikpro/react-piwik-pro'
```
#### Methods
* `setCustomDimensionValue(customDimensionId: string | number, customDimensionValue: string)`  - Sets a custom dimension value to be used later.
* `deleteCustomDimension(customDimensionId: string)` - Removes a custom dimension with the specified ID.
* `getCustomDimensionValue(customDimensionId: string | number)` - Returns the value of a custom dimension with the specified ID.

### Data Layer
A data layer is a data structure on your site or app where you can store data and access it with tools like Tag Manager. You can include any data you want in your data layer.
#### Import
```ts
import { DataLayer } from '@piwikpro/react-piwik-pro';
```
#### Methods
* `push(dataLayerObject: Object)`  - Adds an event to a data layer.


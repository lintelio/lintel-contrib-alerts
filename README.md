lintel-contrib-alerts
=====================

> Alerts for lintel.

[![npm](https://img.shields.io/npm/v/lintel-contrib-alerts.svg)](https://www.npmjs.com/package/lintel-contrib-alerts)
[![Bower](https://img.shields.io/bower/v/lintel-contrib-alerts.svg)](https://github.com/lintelio/lintel-contrib-alerts)


## Getting Started
This module requires Lintel.

If you haven't used [Lintel](http://lintel.io/) before, be sure to check out the [Getting Started](http://lintel.io/getting-started) guide, as it explains how to install and use this module. Once you're familiar with that process, you may install this module with this command:

```shell
bower install lintel-contrib-alerts --save
```

Once the module has been installed, you will have to load it in your main SASS file:

```scss
@import "bower_components/lintel-contrib-alerts/sass/alerts.scss"
```

This module also includes a javascript component, which you will have to load separately.

```html
<script src="bower_components/lintel-contrib-alerts/dist/alerts.min.js" type="text/javascript"></script>
```

You can use [wiredep](https://github.com/taptapship/wiredep) or [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep) to automatically inject files in your build process.


## Variables
Check the vars file in the `sass` folder to see the full list of variables you can customize.

#### $alert-padding-y
Default value: `$cushion-y-md`  

Change the alert padding-top and padding-bottom.

#### $alert-padding-x
Default value: `$cushion-x-md`  

Change the alert padding-left and padding-right.

#### $alert-margin-y
Default value: `$cushion-y-lg`  

Change the alert margin-bottom.

#### $alert-border-radius
Default value: `$border-radius-base`  

Change the alert border-radius.

#### $alert-close-*
Change the alert close-button vars.

#### $alert-*-bg
Change the background for a specific state. Use `base` for default style.

#### $alert-*-border
Change the border for a specific state. Use `base` for default style.

#### $alert-*-text
Change the text color for a specific state. Use `base` for default style.


## Mixins
Check the mixins file in the `sass` folder to see how you can extend this module.

#### make-alert($bg, $border, $text)
Use this mixin to create a new alert state.

```scss
.alert-bacon {
  @include make-alert(#f00, #fff, #fff);
}
```


## JavaScript

### Options

Name      | Type                           | Default             | Description
--------- | ------------------------------ | ------------------- | -----------
onHide    | function                       |                     | Callback function to execute when alert is closed.


### Methods

Name      | Description
--------- | -----------
close     | Close alert.


### Events

Event                | Description
-------------------- | ------------------------------
close.lt.alert       | Fires immediately before alert is hidden. Can prevent alert from hiding here.
closed.lt.alert      | Fires immediately after alert is hidden.


### Data-attr
Add `data-toggle="alert-close"` to the `.alert-close` button.
You can add additional options as data-attributes.

```html
<div class="alert alert-error">
  <button type="button" class="alert-close" data-toggle="alert-close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Error!</strong> It’s toe-tappingly tragic!
</div>
```


### jQuery
Call the jQuery plugin on the alert, passing in any options.

```js
var options = {
  onHide: function(alert, closeBtn) {
    console.log('onHide', this, alert, closeBtn);
  }
};

$('#myAlert').alert(options);
```

Alternatively, you can use the default options:
```js
$('#myAlert').alert('close');
```


## Examples

#### Base Alert
```html
<div class="alert">
  Hello world!
</div>
```

#### Error Alert
```html
<div class="alert alert-error">
  <strong>Error!</strong> It’s toe-tappingly tragic!
</div>
```

#### Dismissable Alert
```html
<div class="alert alert-primary">
  <button type="button" class="alert-close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Welcome!</strong> If for any reason you’re not completely satisfied, I hate you.
</div>
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## License
Copyright (c) 2014 Marius Craciunoiu. Licensed under the MIT license.

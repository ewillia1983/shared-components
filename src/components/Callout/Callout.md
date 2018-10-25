Renders a flyout on hover which can display helpful contextual information to the user.

```js
<Callout content="description">
  Simple callout
</Callout>
```

Uses Icon as callout

```js
const Icon = require('../Icon').default;

<Callout content="description">
  <Icon name="exclamationMarkFilled" />
</Callout>
```

Uses button as callout and show callout on the right side

```js
const Button = require('../Button').default;

<Callout content="hi there" placement="right">
    <Button>
        Hover me
    </Button>
</Callout>
```

Uses custom callout

```js
<Callout content={<i>Hi there</i>}>
    Hover me
</Callout>
```
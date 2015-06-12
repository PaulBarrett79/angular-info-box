# angular-info-box


An angular directive to allow a simple help mechanism, with an "info" icon and a basic ui-bootstrap tooltip.

You can use free text or configure the directive to use a "lookup" object - keys representing a message.

You can use the directive either as an attribute, element or class. The directive positions an info glyphicon where you use the directice, with a ui-bootstrap tooltip displaying a supplied message.

```<info-box></info-box>```

You can use inline text:

```<info-box freetext="Your help text, here!"></info-box>```

You can use a lookup from a key-value based object containing system messages:

```<info-box lookup="message1" lookupitems="messages"></info-box>```

where messages looks something like:

```
var messages = {
        "message1": "Message 1 Help Text",
        "message2": "Message 2 Help Text",
    }
```
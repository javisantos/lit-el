# lit-el

The most amazing literal layout framework to manage micro frontends never created.

## Getting Started

Be ready for the most amazing framework to create progressively ambitious and brilliant web and mobile applications and rich UIs.

### Prerequisites

Be the best.

### Installing

Copy & Paste

```
Example:

Ctrl+c and Ctr+v
```

### Basic usage

```javascript

import { el, r} from './el.mjs'

var body = el('div', {}, 'Hello world')
var layout = el('MyLayout', {id: 'layout'}, body, text, footer)
console.log(r(layout))

```

### Advance usage (with loops!)

```javascript

import { el, r} from './el.mjs'

var body = el('main', {style:"color:blue"}, 'Hello world<br>') 
var lis = (item) => el('item', {}, `<li>${item}</li>`)
var text = el('text', {}, `<ul>${["item1", "item2", "item3"].map((item)=>lis(item))}</ul>`)
var footer = el('footer', {}, 'Amazing!')
var page = el('my-app', {id: 'app'}, body, text, footer)
console.log(r(page))

```

## Built With

* [Javascript](hhttps://developer.mozilla.org/bm/docs/Web/JavaScript) - Tiny library to do things.


## Authors

* **Javi Santos** - *Developer Superstar* 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

---

Was fun, at least the name is pretty cool...
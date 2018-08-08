import { el, r} from './el.mjs'

var body = el('main', {}, 'Hello world<br>')
var lis = (item) => el('item', {}, `<li>${item}</li>`)
var text = el('text', {}, `<ul>${["item1", "item2", "item3"].map((item)=>lis(item)).join('')}</ul>`)
var footer = el('footer', {}, 'Amazing!')

var page = el('my-app', {id: '1'}, body, text, footer)

console.log(r(page))

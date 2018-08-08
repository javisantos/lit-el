const el = (tag, attributes, ...content) => `<${tag.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()} ${ Object.keys(attributes).map(k => `${k}="${attributes[k]}"`).join(' ')}>${content.join('')} </${tag.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}>`
const r = (t) => (typeof process === 'object' ? t : (document.body.innerHTML = t))

export { el, r }
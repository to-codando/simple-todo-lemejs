export default ({ state, props, html }) => {
    
    return html`
        <li class="${props.selected ? 'ctx-selected' : ''}">
            <slot></slot>
        </li>
    `
}
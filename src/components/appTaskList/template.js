import { repeat } from "../../assets/utils"

export default ({ state,  html }) => {
    return html`
        <app-create-task></app-create-task>
        <ul>
            ${
                repeat(state.tasks, (task) => html`
                <app-task 
                    data-id=${task.id}
                    data-selected=${task.selected}
                >
                    ${task.title}
                </app-task>
                `)
            }
        </ul>
        <app-remove-task></app-remove-task>
    `
}
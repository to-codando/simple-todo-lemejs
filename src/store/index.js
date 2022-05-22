import { observerFactory } from "lemejs"

export const store = observerFactory({
    tasks: [
        {id: 1, title: 'Fazer um bolo'},
        {id: 2, title: 'Comer um bolo'},
        {id: 3, title: 'Beber um suco'},
    ]
})



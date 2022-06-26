//OBSERVER PATTERN

export class ToolsUI
{ // tworzenie reprezentacji poszczególnych narzędzi w interfejsie użytkownika

    constructor(container)
    {
        const root = this.createRoot()
        this.createButtons(root) // dodanie przycisków
        this.attachToContainer(container, root)
        this.subscribers = [] // subscribers = funkcja nasluchująca na zmianę narzędzi
    }

    createRoot()
    {
        const root = document.createElement('div')
        root.classList.add('flex', 'flex-column') // pozycja przycisku
        return root
    }

    createButtons(root)
    {
        root.appendChild(this.createButton('Pencil', 'pencil'))
        root.appendChild(this.createButton('Brush', 'brush'))
        root.appendChild(this.createButton('Shape', 'shape'))
    }

    attachToContainer(container, root)
    {
        document.querySelector(container).appendChild(root)
    }

    createButton(name, selector)
    {
        const btn = document.createElement('button'); // tworzenie elementu przycisk
        btn.setAttribute('data-tool', selector); //ustawienie atrybutów z selektorem
        btn.textContent = name; // nazwa przycisku
        btn.addEventListener('click', () =>
        {
            this.subscribers.forEach(s => s(selector)) // informacja o kliknieciu na przycisk 
        })
        return btn
    }

    subscribe(subscriber)
    {
        this.subscribers.push(subscriber)
    }

}
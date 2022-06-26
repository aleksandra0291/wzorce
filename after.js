import { ToolsUI } from './after/ToolsUI.js'
import { ToolsFactory } from './after/ToolsFactory.js'
import { DrawingBoardUI } from './after/DrawingBoardUI.js'
import { DrawingContextUI } from './after/DrawingContextUI.js'

const factory = new ToolsFactory() //utworzenie instancji -> tworzenie narzędzi do rysowania//
const tools = new ToolsUI('.js-tools') // tols ui reprezentuje interfejs do pracy z narzędziami//
const board = new DrawingBoardUI('.js-canvas', 500, 300)
const context = new DrawingContextUI('.js-context') // informacja dla użytkownika  z jakim narzędziem pracuje

tools.subscribe(selectedTool =>
{ //zwrócenie informacji z argumentem, którym będzie aktualnie wybrany przez użytkownika narzędzie
    const tool = factory.getTool(selectedTool) 
    board.changeTool(tool) // na elemencie drawing board wskazuje, że zmieniło się narzędzie rysowania
})
tools.subscribe(selectedTool =>
{
    context.updateContext(selectedTool) // na kontekscie powiadomienie interfejsu, ze narzedzie uległo zmianie
})

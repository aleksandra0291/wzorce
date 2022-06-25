import { ToolsUI } from './after/ToolsUI.js'
import { ToolsFactory } from './after/ToolsFactory.js'
import { DrawingBoardUI } from './after/DrawingBoardUI.js'
import { DrawingContextUI } from './after/DrawingContextUI.js'

const factory = new ToolsFactory() //utworzenie instancji -> tworzenie narzędzi do rysowania//
const tools = new ToolsUI('.js-tools') // tols ui reprezentuje interfejs do pracy z narzędziami//
const board = new DrawingBoardUI('.js-canvas', 500, 300)
const context = new DrawingContextUI('.js-context') // informacja dla użytkownika  z jakim narzędziem pracuje

tools.subscribe(selectedTool =>
{ //interfejs związany z narzedziami to coś co możeby subskrybowac-> obserwowac zmiany w tych narzędziach. 
    //Jeśli zarejestujrmy nowy handler na ten nasz subscribe 
    //to dostaneimy ewywolanie tej wlasnie funkcji z argumentem, którym będzie aktualnie wybrany przez użytkownika narzędzie
    const tool = factory.getTool(selectedTool) // fabryka produkuje instancje takiego narzędzia 
    board.changeTool(tool) // na naszym elemencie drawing board wskazujemy, że zmieniło się narzędzie którym rysujemy
})
tools.subscribe(selectedTool =>
{
    context.updateContext(selectedTool) // na kontekscie powiadamiamy interfejs, że to narzędzie uległo zmianie
})

//tools factory = fabryka = jeden ze wzorców, który pomaga nam tworzyc obiekty w kontrolowany przez nas sposób, gromadzi wszystkie obiekty, które będa tworzonne w ramach danej aplikacji
//czy tez obiekty podobnej klasy, w którym to miejscu te obiekty mają działać 
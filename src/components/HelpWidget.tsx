import { useState } from "react"

export const HelpWidget = () => {
    const [ isChatPanelDisplayed, setIsChatPanelDisplayed ] = useState(false)
    const [ messages, setMessages ] = useState<string[]>([
        'Hello, how can we help?',
        'I need help',
    ]);
    
    return isChatPanelDisplayed ? (
        <div className="
        flex flex-col
        fixed bottom-10 justify-between
        right-10 h-96 w-72 bg-white p-6 rounded-md"> 
            <button className="absolute  top-4 right-4 hover:text-red-500d"
            onClick={() => setIsChatPanelDisplayed(false)}
            >X</button>
            <div>
                <ul>
                    <li>Hello, How can we Help</li>
                    <li>Hi Im having some trouble</li>
                </ul>
            </div>
            <form className="flex ">
            <input type="text" className="border border-gray-800 rounded h-17 p-1 px-2" ></input>
            <button className="
                    right-10 bg-blue-400 p-2 px-3 text-white hover:bg-blue-500 cursor-pointer rounded">Send</button>
            </form>
        </div>
    ) : (
     <button 
        onClick={() => setIsChatPanelDisplayed(true)}
        className="
        fixed bottom-10 right-10 bg-blue-400 p-2 px-3 text-white hover:bg-blue-500 cursor-pointer rounded">
        Get Help
    </button>
    )
} 
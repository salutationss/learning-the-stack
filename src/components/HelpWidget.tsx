import { useState } from "react"

type Tmessage ={ 
    message: string;
    id: string;
    sender: string
}

export const HelpWidget = () => {
    const [ isChatPanelDisplayed, setIsChatPanelDisplayed ] = useState(false)
    const [ senderId, setSenderId ] = useState("0")
    const [ messages, setMessages ] = useState<Tmessage[]>([
        { message:'Hello, how can we help?', 
        id:"sdfsa8ewq4r23", 
        sender: "1" 
    },
        { message:'I need help', 
        id: "asdaf24323as32", 
        sender: "0"
     },
        { message:'Hello, how can we help?', 
        id:"wqerasfsdg", 
        sender: "1" 
    },
        { message:'I need help', 
        id: "wefrwer43252345", 
        sender: "0" 
    },
   
    ]);
    
    return isChatPanelDisplayed ? (
        <div className="
        flex flex-col
        fixed bottom-10 justify-between
        right-10 h-96 w-72 bg-white p-8 rounded"> 
            <button className="absolute  top-4 right-4 hover:text-red-500d"
            onClick={() => setIsChatPanelDisplayed(false)}
            >X</button>
            <div>
                <ul>
                    {messages.map(({message, id, sender}) => (
                        <li
                        className={` rounded p-1 mb-2 ${sender === senderId ? 'bg-gray-100' : 'bg-blue-300'}`}
                        key={id}>{message}</li>
                    
                    ))}
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
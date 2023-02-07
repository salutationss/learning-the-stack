import AgoraRTM from "agora-rtm-sdk"; 
import { RtmChannel, RtmMessage } from "agora-rtm-sdk";
import { useEffect, useRef, useState } from "react"
import { api } from "../utils/api"


type TMessage ={ 
    message: string;
    id: string;
    sender: string
}

export const HelpWidget = () => {
    const createHelpRequestMutation = api.helpRequest.createHelpRequest.useMutation()


    const [ text, setText ] = useState('')
    const [ isChatPanelDisplayed, setIsChatPanelDisplayed ] = useState(false)
    const [ senderId, setSenderId ] = useState("0")
    const [ messages, setMessages ] = useState<TMessage[]>([
        { message:'Hello, how can we help?', 
        id:"sdfsa8ewq4r23", 
        sender: "1" 
    },
    ]);
    const channelRef = useRef<RtmChannel | null>(null);

    const handleOpenSupportWidget = async () => {
        setIsChatPanelDisplayed(true)
        const helpRequest = await createHelpRequestMutation.mutateAsync();
        const { default: AgoraRTM } = await import("agora-rtm-sdk");
        const client = AgoraRTM.createInstance(process.env.NEXT_PUBLIC_AGORA_ID!)
        await client.login({
            uid: `${Math.floor(Math.random() * 250)}`,
            token: "",
        })
        const channel = await client.createChannel(helpRequest.id)
        channelRef.current = channel;
        await channel.join()
        channel.on('ChannelMessage', (message: RtmMessage) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { 
                message: message.text ?? "",
                id: Math.random() + "",
                sender: "1"
                },
            ]);
        });
    };

    const handleSendMessage = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
     const channel = channelRef.current;
        channel?.sendMessage({ text })
        setMessages((prevMessages) => [
            ...prevMessages,
            {
                message: text,
                id: Math.random() + "",
                sender: senderId,
            },
        ]);
        setText("");
    }

   
    return isChatPanelDisplayed ? (
        <div className="
        flex flex-col
        fixed bottom-10 justify-between
        right-10 h-96 w-72 bg-white p-8 rounded"> 
            <button className="absolute  top-4 right-4 hover:text-red-500" onClick={() => setIsChatPanelDisplayed(false)}>X</button>
            
                <ul>
                    {messages.map(({message, id, sender}) => (
                        <li
                        className={`rounded p-1 mb-2 ${sender === senderId ? 'bg-gray-100' : 'bg-blue-300'}`}
                        key={id}>{message}</li>
                    
                    ))}
                </ul>
        
            <form onSubmit={handleSendMessage} className="flex ">
            <input onChange={e => setText(e.target.value)} value={text} className="border border-gray-800 rounded h-17 p-1 px-2" ></input>
            <button className="
                    right-10 bg-blue-400 p-2 px-3 text-white hover:bg-blue-500 cursor-pointer rounded">Send</button>
            </form>
        </div>
    ) : (
     <button 
        onClick={handleOpenSupportWidget}
        className="
        fixed bottom-10 right-10 bg-blue-400 p-2 px-3 text-white hover:bg-blue-500 cursor-pointer rounded">
        Get Help
    </button>
    )
} 
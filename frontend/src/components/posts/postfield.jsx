import { useEffect, useRef, useState } from "react";

const Postfield = () => {
    const [content, setContent] = useState('');
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }, [content])
    
    return (
        <div className="p-5">
            <div className="flex gap-4 items-center">
                <img
                    src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png"
                    alt="user"
                    className="w-10 h-10 rounded-full"
                />
                <textarea
                    ref={textareaRef}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What is happening?!"
                    className="focus:outline-none bg-transparent w-full text-xl max-h-80 text-white overflow-y-auto resize-none"
                    style={{ caretColor: 'white' }}
                />
            </div>
            <div className="border-b w-full h-2"></div>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full">Post</button>
        </div>
    )
}

export default Postfield
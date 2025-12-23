import React, { useState, useRef, useEffect } from 'react';
import { generateChefAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Bot, Loader2, Sparkles } from 'lucide-react';

interface ChefAssistantProps {
  initialPrompt?: string;
}

const ChefAssistant: React.FC<ChefAssistantProps> = ({ initialPrompt }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy tu Chef Virtual De Green. ¿Buscas inspiración para usar nuestras conservas? Pregúntame lo que quieras.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Use a ref for the container instead of a dummy element
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      // Manually set scrollTop to avoid triggering window scroll
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialPrompt) {
      handleSend(initialPrompt);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPrompt]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const advice = await generateChefAdvice(text);
    
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      <div className="bg-neutral-800 p-4 border-b border-neutral-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-brand flex items-center justify-center">
            <Bot className="text-black w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-white">Chef De Green</h3>
            <p className="text-xs text-green-brand uppercase tracking-wider">IA Culinaria</p>
          </div>
        </div>
        <Sparkles className="text-yellow-500 animate-pulse" />
      </div>

      <div 
        ref={chatContainerRef}
        className="h-96 overflow-y-auto p-6 space-y-4 bg-black/50 scrollbar-hide"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                msg.role === 'user'
                  ? 'bg-neutral-800 text-white rounded-tr-none'
                  : 'bg-green-brand text-black rounded-tl-none font-medium'
              }`}
            >
              <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-neutral-800 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
              <Loader2 className="animate-spin text-green-brand w-4 h-4" />
              <span className="text-neutral-400 text-sm">Cocinando respuesta...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-neutral-800 border-t border-neutral-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
            placeholder="Ej: ¿Con qué puedo comer el Pesto?"
            className="flex-1 bg-black border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-brand transition-colors"
          />
          <button
            onClick={() => handleSend(input)}
            disabled={isLoading || !input.trim()}
            className="bg-green-brand hover:bg-white text-black p-3 rounded-lg transition-colors disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefAssistant;
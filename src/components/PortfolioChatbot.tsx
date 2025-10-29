import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "👋 Hi! I'm here to help you learn more about Shiva Kumar's portfolio. Feel free to ask me about his skills, projects, education, or experience!"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/portfolio-chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            messages: [...messages, userMessage].map(m => ({
              role: m.role,
              content: m.content
            }))
          }),
        }
      );

      if (!response.ok) {
        if (response.status === 429 || response.status === 402) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Service temporarily unavailable');
        }
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';
      let buffer = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.trim() === '' || line.startsWith(':')) continue;
          if (!line.startsWith('data: ')) continue;

          const data = line.slice(6);
          if (data === '[DONE]') continue;

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantMessage += content;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: 'assistant',
                  content: assistantMessage
                };
                return newMessages;
              });
            }
          } catch (e) {
            console.error('Error parsing SSE:', e);
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send message',
        variant: 'destructive'
      });
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="relative h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-tech-purple via-tech-accent to-tech-purple hover:shadow-tech-purple/50 transition-all duration-300 hover:scale-110 animate-pulse group overflow-hidden"
            aria-label="Open chat"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-tech-purple to-tech-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            
            {/* Icon container with sparkle effect */}
            <div className="relative flex items-center justify-center">
              <Bot size={28} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <Sparkles size={16} className="absolute -top-1 -right-1 text-yellow-300 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
            </div>
          </Button>
          
          {/* Ripple effect rings */}
          <div className="absolute inset-0 rounded-full border-2 border-tech-purple/30 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-0 rounded-full border-2 border-tech-accent/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-5 zoom-in-95 duration-300 border-2 border-tech-purple/20">
          {/* Header */}
          <div className="bg-gradient-to-br from-tech-purple via-purple-600 to-tech-accent text-white p-5 rounded-t-lg flex items-center justify-between relative overflow-hidden shadow-lg">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent animate-pulse" />
            </div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="bg-white/30 backdrop-blur-sm p-2.5 rounded-full shadow-lg border border-white/20 animate-pulse">
                <Bot size={26} className="drop-shadow-lg" />
              </div>
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  Portfolio Assistant
                  <Sparkles size={16} className="text-yellow-300 animate-pulse" />
                </h3>
                <p className="text-xs text-white/90 font-medium">Powered by AI • Ask me anything!</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/30 hover:scale-110 transition-all duration-200 rounded-full relative z-10 backdrop-blur-sm"
            >
              <X size={20} />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="bg-gradient-to-br from-tech-purple to-purple-600 text-white p-2 rounded-full h-9 w-9 flex items-center justify-center flex-shrink-0 shadow-lg border border-purple-400/30 animate-pulse">
                    <Bot size={18} />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 transition-all duration-200 hover:scale-[1.02] ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-tech-purple to-purple-600 text-white rounded-br-none shadow-lg border border-purple-400/30'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-md border border-gray-200 hover:shadow-lg'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <div className="bg-gradient-to-br from-tech-accent to-blue-500 text-white p-2 rounded-full h-9 w-9 flex items-center justify-center flex-shrink-0 shadow-lg border border-blue-400/30">
                    <User size={18} />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start animate-in fade-in duration-300">
                <div className="bg-gradient-to-br from-tech-purple to-purple-600 text-white p-2 rounded-full h-9 w-9 flex items-center justify-center flex-shrink-0 shadow-lg border border-purple-400/30 animate-pulse">
                  <Bot size={18} />
                </div>
                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-md border border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-gradient-to-br from-tech-purple to-purple-500 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0ms' }} />
                    <div className="w-2.5 h-2.5 bg-gradient-to-br from-tech-purple to-purple-500 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '150ms' }} />
                    <div className="w-2.5 h-2.5 bg-gradient-to-br from-tech-purple to-purple-500 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-b-lg shadow-inner">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 border-2 border-gray-200 focus:border-tech-purple transition-all duration-200 rounded-xl shadow-sm"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-br from-tech-purple to-purple-600 hover:from-tech-accent hover:to-blue-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-xl px-4"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default PortfolioChatbot;
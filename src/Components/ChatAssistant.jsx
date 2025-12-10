import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Minimize2 } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const ChatAssistant = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Initial greeting based on language
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetings = {
        en: "Hello! I'm your GovAssist AI helper. I can help you navigate government services, answer questions about documents, and guide you through various procedures. How can I assist you today?",
        hi: "नमस्ते! मैं आपका GovAssist AI सहायक हूं। मैं सरकारी सेवाओं में मदद कर सकता हूं, दस्तावेजों के बारे में सवालों का जवाब दे सकता हूं, और विभिन्न प्रक्रियाओं में मार्गदर्शन कर सकता हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
        te: "నమస్కారం! నేను మీ GovAssist AI సహాయకుడిని. నేను ప్రభుత్వ సేవలలో సహాయం చేయగలను, పత్రాల గురించి ప్రశ్నలకు సమాధానం ఇవ్వగలను, మరియు వివిధ విధానాలలో మార్గదర్శకత్వం అందించగలను. ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?",
        bn: "নমস্কার! আমি আপনার GovAssist AI সহায়ক। আমি সরকারি সেবাগুলিতে সাহায্য করতে পারি, নথিপত্র সম্পর্কে প্রশ্নের উত্তর দিতে পারি, এবং বিভিন্ন পদ্ধতিতে গাইড করতে পারি। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
        ta: "வணக்கம்! நான் உங்கள் GovAssist AI உதவியாளர். அரசு சேவைகளில் உதவ முடியும், ஆவணங்கள் பற்றிய கேள்விகளுக்கு பதிலளிக்க முடியும். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
        mr: "नमस्कार! मी तुमचा GovAssist AI सहाय्यक आहे. मी शासकीय सेवांमध्ये मदत करू शकतो, कागदपत्रांबद्दल प्रश्नांची उत्तरे देऊ शकतो. आज मी तुम्हाला कशी मदत करू शकतो?",
        gu: "નમસ્તે! હું તમારો GovAssist AI સહાયક છું. હું સરકારી સેવાઓમાં મદદ કરી શકું છું, દસ્તાવેજો વિશે પ્રશ્નોના જવાબ આપી શકું છું. આજે હું તમને કેવી રીતે મદદ કરી શકું?",
        kn: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ GovAssist AI ಸಹಾಯಕ. ಸರ್ಕಾರಿ ಸೇವೆಗಳಲ್ಲಿ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ, ದಾಖಲೆಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಬಲ್ಲೆ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?"
      };
      
      setMessages([{
        role: 'assistant',
        content: greetings[language] || greetings.en
      }]);
    }
  }, [isOpen, language]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Create context for the AI about government services
      const systemContext = `You are a helpful AI assistant for GovAssist, an Indian government services navigation platform. 
You help users with:
- DigiLocker registration and document access
- Aadhaar card services (update, download, verification)
- PAN card applications
- Passport applications
- Educational certificates (10th, 12th, degree)
- Health insurance schemes (Ayushman Bharat)
- Caste certificates
- And other government services

Respond in the same language the user writes in. Be helpful, concise, and accurate.
If you don't know something specific, suggest visiting the official government website.
Current user language preference: ${language}`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: systemContext },
                  ...messages.map(msg => ({ text: `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}` })),
                  { text: `User: ${userMessage}` }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1024,
            }
          })
        }
      );

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const assistantMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || 
        "I'm sorry, I couldn't process your request. Please try again.";

      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessages = {
        en: "I'm having trouble connecting right now. Please check if the API key is configured or try again later.",
        hi: "मुझे अभी कनेक्ट करने में समस्या हो रही है। कृपया बाद में पुनः प्रयास करें।",
        te: "నేను ఇప్పుడు కనెక్ట్ అవడంలో సమస్య ఉంది. దయచేసి తర్వాత మళ్ళీ ప్రయత్నించండి.",
        bn: "এই মুহূর্তে সংযোগ করতে সমস্যা হচ্ছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।"
      };
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: errorMessages[language] || errorMessages.en
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const placeholders = {
    en: "Ask about government services...",
    hi: "सरकारी सेवाओं के बारे में पूछें...",
    te: "ప్రభుత్వ సేవల గురించి అడగండి...",
    bn: "সরকারি সেবা সম্পর্কে জিজ্ঞাসা করুন...",
    ta: "அரசு சேவைகளைப் பற்றி கேளுங்கள்...",
    mr: "शासकीय सेवांबद्दल विचारा...",
    gu: "સરકારી સેવાઓ વિશે પૂછો...",
    kn: "ಸರ್ಕಾರಿ ಸೇವೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ..."
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open AI assistant'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">GovAssist AI</h3>
                <p className="text-orange-100 text-xs">
                  {language === 'hi' ? 'आपका सरकारी सेवा सहायक' : 
                   language === 'te' ? 'మీ ప్రభుత్వ సేవా సహాయకుడు' :
                   'Your Government Service Helper'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user' 
                    ? 'bg-green-500' 
                    : 'bg-gradient-to-r from-orange-500 to-orange-600'
                }`}>
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-green-500 text-white rounded-tr-sm'
                    : 'bg-white text-gray-800 rounded-tl-sm shadow-sm border border-gray-100'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100">
                  <Loader2 className="w-5 h-5 text-orange-500 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholders[language] || placeholders.en}
                className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Powered by Gemini AI
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;

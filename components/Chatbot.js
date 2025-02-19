"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, Loader2 } from "lucide-react";

export default function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "👋 Hi! I'm your AI assistant. How can I help?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (chatOpen) {
      inputRef.current?.focus();
      scrollToBottom();
    }
  }, [chatOpen, messages]);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = { type: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const botMessage = {
        type: "bot",
        content: data.reply || "⚠️ I couldn't process that. Try again!",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content:
            "❌ Oops! I'm having trouble responding. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = (content) => {
    // Match links and render them as clickable <a> tags
    const regex = /(https?:\/\/[^\s]+)/g;
    return content.split(regex).map((part, index) =>
      part.match(regex) ? (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center
          ${
            chatOpen
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gradient-to-br from-blue-500 to-purple-500 hover:scale-110"
          }`}
      >
        {chatOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>

      {/* Chatbox UI */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 bg-gray-900 rounded-2xl shadow-xl w-[400px] h-[550px] z-40 flex flex-col border border-gray-800 overflow-hidden animate-fade-in">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-700 flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-blue-400" />
              <h2 className="font-semibold text-lg">Chat Assistant</h2>
            </div>
            <button
              onClick={toggleChat}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  msg.type === "user" ? "justify-end" : ""
                }`}
              >
                {msg.type === "bot" && (
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-blue-400" />
                  </div>
                )}
                <div
                  className={`p-4 max-w-[80%] rounded-xl shadow-md text-sm ${
                    msg.type === "user"
                      ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-br-none"
                      : "bg-gray-800 text-gray-300 rounded-bl-none"
                  }`}
                >
                  {renderContent(msg.content)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center items-center">
                <Loader2
                  className="w-5 h-5 text-gray-400"
                  style={{ animation: "spin 1s linear infinite" }}
                />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-gray-700 bg-gray-800"
          >
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 rounded-full px-4 py-2 bg-gray-700 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
                disabled={isLoading}
              />
              <button
                type="submit"
                className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white shadow-md hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

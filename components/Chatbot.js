"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, Loader2, Sparkles } from "lucide-react";
import Image from "next/image";
import chatbot from "../public/chatbot.gif";

export default function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "👋 Hi! I'm your AI assistant. Ask me anything about Sarthak's skills, experience, or projects!",
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

  const renderMarkdownContent = (content) => {
    // Handle links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let processedContent = content.replace(
      linkRegex,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">$1</a>'
    );

    // Handle standalone URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    processedContent = processedContent.replace(urlRegex, (url) => {
      // Don't replace URLs that are already part of markdown links
      if (!content.includes(`(${url})`)) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">${url}</a>`;
      }
      return url;
    });

    // Handle bold text
    processedContent = processedContent.replace(
      /\*\*([^*]+)\*\*/g,
      '<strong class="font-bold">$1</strong>'
    );

    // Handle italic text
    processedContent = processedContent.replace(
      /\*([^*]+)\*/g,
      '<em class="italic">$1</em>'
    );

    // Handle inline code
    processedContent = processedContent.replace(
      /`([^`]+)`/g,
      '<code class="bg-gray-700/50 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>'
    );

    // Handle code blocks
    processedContent = processedContent.replace(
      /```([\s\S]*?)```/g,
      '<pre class="bg-gray-700/50 p-3 rounded-lg my-2 overflow-x-auto"><code class="text-sm font-mono">$1</code></pre>'
    );

    // Handle line breaks
    processedContent = processedContent.replace(/\n/g, "<br/>");

    // Handle lists
    processedContent = processedContent.replace(
      /^\s*-\s+(.+)$/gm,
      '<li class="ml-4">$1</li>'
    );
    processedContent = processedContent.replace(
      /(<li.*<\/li>(\s*<br\/>)*)+/g,
      '<ul class="list-disc pl-5 my-2">$&</ul>'
    );

    // Handle numbered lists
    processedContent = processedContent.replace(
      /^\s*\d+\.\s+(.+)$/gm,
      '<li class="ml-4">$1</li>'
    );
    processedContent = processedContent.replace(
      /(<li.*<\/li>(\s*<br\/>)*)+/g,
      (match) => {
        if (match.includes('class="ml-4"')) {
          return `<ol class="list-decimal pl-5 my-2">${match}</ol>`;
        }
        return match;
      }
    );

    // Handle quotes
    processedContent = processedContent.replace(
      /^>\s+(.+)$/gm,
      '<blockquote class="border-l-4 border-gray-600 pl-4 my-2 italic">$1</blockquote>'
    );

    return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
  };

  // Enhanced Loading Indicator Component
  const LoadingIndicator = () => (
    <div className="flex items-center justify-center py-4">
      <div className="flex items-center gap-3">
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
              style={{
                animation: "pulse 1.5s ease-in-out infinite",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
        <div className="relative">
          <div className="h-4 w-32 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full w-8 bg-gradient-to-r from-transparent via-gray-500 to-transparent"
              style={{
                animation: "shimmer 1.5s infinite linear",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Floating Chat Button with GIF */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group
          ${chatOpen ? "animate-pulse-subtle" : "animate-pulse-subtle"}`}
      >
        {chatOpen ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={chatbot}
              alt="Chatbot"
              className="w-20 h-20 object-contain"
              width={48}
              height={48}
            />
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={chatbot}
              alt="Chatbot"
              className="w-20 h-20 object-contain"
              width={48}
              height={48}
            />
          </div>
        )}
      </button>

      {/* Enhanced Chatbox UI */}
      {chatOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-24 sm:right-6 rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:w-[380px] md:w-[420px] h-[85vh] sm:h-[600px] z-40 flex flex-col overflow-hidden animate-slide-up backdrop-blur-lg bg-gradient-to-b from-gray-900/95 to-gray-800/95 border border-gray-700/50">
          {/* Enhanced Chat Header */}
          <div className="p-4 border-b border-gray-700/50 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src={chatbot}
                    alt="Chatbot"
                    className="w-10 h-10 object-contain"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg text-white">
                    Chat Assistant
                  </h2>
                  <p className="text-xs text-gray-400">
                    {isLoading ? "Thinking..." : "Always here to help"}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* Enhanced Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  msg.type === "user" ? "justify-end" : ""
                }`}
              >
                {msg.type === "bot" && (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <Image
                      src={chatbot}
                      alt="Chatbot"
                      className="w-8 h-8 object-contain"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                <div
                  className={`relative group px-4 py-3 max-w-[80%] rounded-2xl text-sm transition-all duration-200 ${
                    msg.type === "user"
                      ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-sm shadow-lg"
                      : "bg-gradient-to-br from-gray-800 to-gray-750 text-gray-100 rounded-bl-sm border border-gray-700/50 shadow-md"
                  }`}
                >
                  {msg.type === "bot"
                    ? renderMarkdownContent(msg.content)
                    : msg.content}
                </div>
              </div>
            ))}
            {isLoading && <LoadingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Chat Input */}
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-gray-700/50 bg-gray-800/50 backdrop-blur-sm"
          >
            <div className="flex gap-3 items-center">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-full px-5 py-3 bg-gray-700/50 text-gray-100 text-sm outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-600/30 placeholder-gray-500 transition-all"
                  placeholder={
                    isLoading
                      ? "AI is thinking..."
                      : "Ask about skills, projects, or experience..."
                  }
                  disabled={isLoading}
                />
                {message && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                    {message.length}/500
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading || !message.trim()}
                className={`p-3 rounded-full transition-all duration-200 ${
                  isLoading || !message.trim()
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 active:scale-95"
                }`}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 text-white animate-spin" />
                ) : (
                  <Send className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

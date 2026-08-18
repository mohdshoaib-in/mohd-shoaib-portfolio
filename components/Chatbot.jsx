"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  MessageCircle,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

const initialMessage = {
  role: "assistant",
  content:
    "Hi! I'm Mohd Shoaib's portfolio assistant. Ask me about his experience, skills, projects, or availability.",
};

const suggestions = [
  "Tell me about Mohd Shoaib",
  "What are his main skills?",
  "What projects has he worked on?",
  "Is Mohd Shoaib available?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    initialMessage,
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to latest message
  useEffect(() => {
    if (!isOpen) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isOpen]);

  // Focus input when chatbot opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const sendMessage = async (messageText = input) => {
    const text = messageText.trim();

    if (!text || isLoading) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to get response."
        );
      }

      const assistantMessage = {
        role: "assistant",
        content:
          data?.message ||
          "Sorry, I couldn't generate a response.",
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting to the AI right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([initialMessage]);
    setInput("");
  };

  return (
    <>
      {/* =====================================================
          CHAT WINDOW
      ===================================================== */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-[90] w-[calc(100vw-2rem)] max-w-[390px] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0c0f] shadow-[0_25px_80px_rgba(0,0,0,0.6)] sm:right-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#0d0e11]/95 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <Bot size={18} />

                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0d0e11] bg-emerald-400" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Mohd Shoaib AI
                </p>

                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-[10px] text-zinc-500">
                    Portfolio Assistant
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={clearChat}
                className="rounded-lg px-2.5 py-1.5 text-[10px] text-zinc-600 transition hover:bg-white/[0.04] hover:text-zinc-300"
              >
                Clear
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-white/[0.05] hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[390px] overflow-y-auto px-4 py-4">
            {messages.length === 1 && (
              <div className="mb-4">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles
                    size={13}
                    className="text-violet-400"
                  />

                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-600">
                    Ask me
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-2 text-left text-[10px] text-zinc-500 transition hover:border-violet-400/20 hover:bg-violet-400/[0.04] hover:text-violet-300"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {messages.map((message, index) => {
                const isUser =
                  message.role === "user";

                return (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex gap-2.5 ${
                      isUser
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {/* Assistant Icon */}
                    {!isUser && (
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-violet-400/15 bg-violet-500/[0.08] text-violet-300">
                        <Bot size={13} />
                      </div>
                    )}

                    {/* Message */}
                    <div
                      className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 ${
                        isUser
                          ? "rounded-br-md border border-violet-400/20 bg-violet-500/10 text-violet-100"
                          : "rounded-bl-md border border-white/[0.06] bg-white/[0.025] text-zinc-400"
                      }`}
                    >
                     <div className="text-xs leading-5 text-zinc-400">
                        <ReactMarkdown
                            components={{
                            p: ({ children }) => (
                                <p className="mb-2 last:mb-0">
                                {children}
                                </p>
                            ),

                            strong: ({ children }) => (
                                <strong className="font-semibold text-zinc-200">
                                {children}
                                </strong>
                            ),

                            ul: ({ children }) => (
                                <ul className="mb-2 ml-4 list-disc space-y-1">
                                {children}
                                </ul>
                            ),

                            ol: ({ children }) => (
                                <ol className="mb-2 ml-4 list-decimal space-y-1">
                                {children}
                                </ol>
                            ),

                            li: ({ children }) => (
                                <li className="pl-1">
                                {children}
                                </li>
                            ),

                            h1: ({ children }) => (
                                <p className="mb-2 font-semibold text-white">
                                {children}
                                </p>
                            ),

                            h2: ({ children }) => (
                                <p className="mb-2 font-semibold text-white">
                                {children}
                                </p>
                            ),

                            h3: ({ children }) => (
                                <p className="mb-2 font-medium text-zinc-200">
                                {children}
                                </p>
                            ),
                            }}
                        >
                            {message.content}
                        </ReactMarkdown>
                        </div>
                    </div>

                    {/* User Icon */}
                    {isUser && (
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-zinc-500">
                        <User size={13} />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Loading */}
              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-violet-400/15 bg-violet-500/[0.08] text-violet-300">
                    <Bot size={13} />
                  </div>

                  <div className="rounded-2xl rounded-bl-md border border-white/[0.06] bg-white/[0.025] px-4 py-3">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.3s]" />

                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.15s]" />

                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-500" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-white/[0.07] bg-[#0d0e11] p-3">
            <form
              onSubmit={handleSubmit}
              className="flex items-end gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] p-1.5 transition focus-within:border-violet-400/20"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask about Mohd Shoaib's experience..."
                rows={1}
                disabled={isLoading}
                className="max-h-20 min-h-[36px] flex-1 resize-none bg-transparent px-2.5 py-2 text-xs text-white outline-none placeholder:text-zinc-700 disabled:cursor-not-allowed"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300 transition hover:border-violet-400/30 hover:bg-violet-500/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <Send size={14} />
              </button>
            </form>

            <p className="mt-2 text-center text-[9px] text-zinc-700">
              AI-powered portfolio assistant
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          FLOATING CHAT BUTTON
      ===================================================== */}
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={
          isOpen
            ? "Close portfolio chatbot"
            : "Open portfolio chatbot"
        }
        className="fixed bottom-5 right-5 z-[91] flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/25 bg-[#0c0d10]/95 text-violet-300 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white sm:right-6"
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <>
            <MessageCircle size={21} />

            {/* Notification Dot */}
            <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#0c0d10] bg-violet-400" />
          </>
        )}
      </button>
    </>
  );
}
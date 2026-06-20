import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
console.log(import.meta.env.VITE_GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Welcome to Bawani Estates. How can I help you find your ideal property today?",
    },
  ]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setIsTyping(true);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const prompt = `
You are a professional luxury real estate advisor for Bawani Estates.

Rules:
- Help clients find luxury properties.
- Ask about city, budget, and property type.
- Recommend scheduling a consultation when appropriate.
- Keep responses concise and professional.
- Focus only on real estate and investments.

User: ${userMessage}
`;

      const result = await model.generateContent(prompt);
      const reply = result.response.text();

      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I am currently unavailable. Please try again later.",
        },
      ]);
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-7 z-50 rounded-full bg-white px-10 py-2 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:scale-105"
      >
        AI Chat
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-32 right-4 z-50 h-[380px] w-[350px] rounded-2xl border border-white/20 bg-black p-4 text-white shadow-2xl">

          <h3 className="mb-4 text-lg font-semibold">
            Bawani Estates AI
          </h3>

          {/* Messages */}
          <div className="mb-4 h-[240px] overflow-y-auto space-y-3">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "user"
                    ? "text-right"
                    : "text-left"
                }
              >
                <div className="inline-block max-w-[90%] rounded-xl bg-white/10 px-3 py-2 text-sm">
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="text-left">
                <div className="inline-block rounded-xl bg-white/10 px-3 py-2 text-sm">
                  <span className="typing-dots">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask about properties..."
              className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-sm outline-none"
            />

            <button
              onClick={sendMessage}
              className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-black"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
}
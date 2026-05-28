import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://mental-backend-n3sp.onrender.com");

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // const roomId = "room1";

  // // 🔥 get role from URL
  // const query = new URLSearchParams(window.location.search);
  // const role = query.get("role") || "patient";
const query = new URLSearchParams(window.location.search);

const role = query.get("role") || "patient";
// const roomId = query.get("room");
const roomId = "room1";
  useEffect(() => {
    socket.emit("joinRoom", roomId);

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

 
  useEffect(() => {
    const chatBox = document.getElementById("chat-box");
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const msgData = {
      roomId,
      message,
      sender: role  
    };

    socket.emit("sendMessage", msgData);
    setMessages((prev) => [...prev, msgData]);

    setMessage("");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">

     
      <div className="bg-indigo-500 text-white p-4 text-lg font-semibold shadow">
        {role === "doctor" ? "Chat with Patient" : "Chat with Therapist"}
      </div>

     
      <div
        id="chat-box"
        className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-100 to-gray-200"
      >
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">
            No messages yet...
          </p>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "doctor"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl shadow max-w-xs ${
                  msg.sender === "doctor"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {msg.message}
              </div>
            </div>
          ))
        )}
      </div>

    
      <div className="p-3 bg-white flex gap-2 border-t">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
          className="flex-1 border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={sendMessage}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-full transition"
        >
          Send
        </button>
      </div>

    </div>
  );
}

export default Chat;
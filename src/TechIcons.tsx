import React from 'react'

interface TechIconProps {
  name: string
  className?: string
}

export function TechIcon({ name, className = 'w-3.5 h-3.5' }: TechIconProps) {
  const norm = name.toLowerCase().trim()

  // React / React Native
  if (norm.includes('react') || norm === 'react native') {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  }

  // Next.js
  if (norm.includes('next.js') || norm === 'nextjs') {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none">
        <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
          <circle cx="90" cy="90" fill="#000" r="90" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" fill="#000" r="90" />
          <path d="M149.508 157.538L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.176 149.508 157.538Z" fill="#FFF" />
          <rect fill="#FFF" height="72" width="12" x="115" y="54" />
        </g>
      </svg>
    )
  }

  // Python
  if (norm.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 110 110" fill="none">
        <path d="M54.2 2C26.5 2 28.2 14 28.2 14L28.3 26.4H55.4V30.2H17.4C17.4 30.2 2 28.5 2 56.1C2 83.7 15.6 82.2 15.6 82.2H23.8V70.6C23.8 70.6 23.3 56.8 37.4 56.8H64.3C64.3 56.8 77.4 57.3 77.4 44.4V14.1C77.4 14.1 79.5 2 54.2 2ZM40.9 9.8C44.3 9.8 47.1 12.6 47.1 16C47.1 19.4 44.3 22.2 40.9 22.2C37.5 22.2 34.7 19.4 34.7 16C34.7 12.6 37.5 9.8 40.9 9.8Z" fill="#387EB8" />
        <path d="M55.8 108C83.5 108 81.8 96 81.8 96L81.7 83.6H54.6V79.8H92.6C92.6 79.8 108 81.5 108 53.9C108 26.3 94.4 27.8 94.4 27.8H86.2V39.4C86.2 39.4 86.7 53.2 72.6 53.2H45.7C45.7 53.2 32.6 52.7 32.6 65.6V95.9C32.6 95.9 30.5 108 55.8 108ZM69.1 100.2C65.7 100.2 62.9 97.4 62.9 94C62.9 90.6 65.7 87.8 69.1 87.8C72.5 87.8 75.3 90.6 75.3 94C75.3 97.4 72.5 100.2 69.1 100.2Z" fill="#FFE052" />
      </svg>
    )
  }

  // TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path d="M72.2 81.5c2.4 3.7 6.3 6.1 11.7 6.1 4.9 0 8.5-2.5 8.5-6.1 0-3.9-3.4-5.3-9.5-8-8.1-3.6-13.8-7.8-13.8-16.5 0-8.8 6.9-15.4 17.6-15.4 7.6 0 13.1 2.8 16.8 8.6l-6.8 4.4c-2.1-3.5-5.1-5-9.9-5-4.4 0-7.3 2.3-7.3 5.4 0 3.3 2.7 4.8 8.5 7.3 9 3.9 14.8 7.7 14.8 17.1 0 10.3-8.2 16.5-19.1 16.5-9.5 0-16.5-3.8-20.2-10.7l8.7-4.7zM24 51.9h40.4v10.6h-14.7v45.1H38.7V62.5H24V51.9z" fill="#FFF" />
      </svg>
    )
  }

  // JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path d="M67.3 84.1c1.8 3.1 4.2 5.4 8.5 5.4 4.3 0 7-2.1 7-5 0-3.5-2.8-4.7-7.7-6.8-7-3-11.4-6.3-11.4-14.2 0-8 6.2-14 15.9-14 6.9 0 11.9 2.5 15.2 7.7l-6.3 4c-1.8-2.9-3.9-4.2-8.7-4.2-3.8 0-6.1 2-6.1 4.5 0 2.8 2.2 4.1 6.8 6.1 8 3.5 12.5 6.6 12.5 14.9 0 9.5-7.4 15.2-17.7 15.2-9.6 0-15.8-4.5-18.7-10.4l8.7-4.7zM33 50h11.2v39.7c0 5.4 2.8 7.7 7 7.7 2.3 0 4.1-.4 5.3-.9v9.7c-2.3.9-5.7 1.4-9.3 1.4-9.4 0-14.2-5.4-14.2-15.8V50z" fill="#000" />
      </svg>
    )
  }

  // Node.js
  if (norm.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M16 2.5L3.5 9.7V24.1L16 31.3L28.5 24.1V9.7L16 2.5Z" fill="#5FA04E" />
        <path d="M16 4.8L26.5 10.9V23.1L16 29.2L5.5 23.1V10.9L16 4.8Z" fill="#333333" />
        <path d="M16 7L24.5 11.9V21.7L16 26.6L7.5 21.7V11.9L16 7Z" fill="#5FA04E" />
      </svg>
    )
  }

  // FastAPI
  if (norm.includes('fastapi') || norm.includes('fastmcp')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#009688" />
        <path d="M68 24L36 72H60L56 104L88 56H64L68 24Z" fill="#FFF" />
      </svg>
    )
  }

  // Express
  if (norm.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" stroke="#000" />
        <path d="M8 8l8 8M16 8l-8 8" stroke="#000" strokeLinecap="round" />
      </svg>
    )
  }

  // MongoDB
  if (norm.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M16 2C15.8 2 15.6 2.1 15.4 2.3C14.2 4.1 7 14.5 7 21C7 26.5 11 30 16 30C21 30 25 26.5 25 21C25 14.5 17.8 4.1 16.6 2.3C16.4 2.1 16.2 2 16 2Z" fill="#47A248" />
        <path d="M16 2.5V29.5C15.7 29.5 15.3 29.4 15 29.3C11 28 8.5 24.5 8.5 21C8.5 15.5 14.5 6 16 2.5Z" fill="#4CAF50" />
      </svg>
    )
  }

  // SQL / PostgreSQL / MySQL
  if (norm.includes('sql') || norm.includes('postgres') || norm.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="#E0F2FE" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    )
  }

  // Supabase
  if (norm.includes('supabase')) {
    return (
      <svg className={className} viewBox="0 0 109 113" fill="none">
        <path d="M63.7 110.3C59.5 115.5 51 112.4 51.3 105.7L54 53.3H6.8C1.5 53.3 -1.6 47.3 1.3 42.9L44.8 2.2C49 -1.7 56 1.4 55.7 7.7L53 60.1H100.2C105.5 60.1 108.6 66.1 105.7 70.5L63.7 110.3Z" fill="#3ECF8E" />
      </svg>
    )
  }

  // Firebase
  if (norm.includes('firebase')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M5.5 24.5L14 3.5L18.5 12L5.5 24.5Z" fill="#FFC107" />
        <path d="M26.5 24.5L20 7.5L5.5 24.5H26.5Z" fill="#FFA000" />
        <path d="M16 28.5L26.5 24.5L18.5 12L5.5 24.5L16 28.5Z" fill="#FF5722" />
      </svg>
    )
  }

  // Docker
  if (norm.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.12a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zM23.77 9.89c-.44-.316-1.554-.374-2.392-.178-.17-.79-1.026-1.3-1.637-1.37-.123-.015-.246-.015-.37-.015a4.838 4.838 0 00-3.328 1.455h-2.02v2.715h5.053c.123 0 .23-.062.308-.154.555-.662 1.417-.678 1.772-.678.077 0 .154.015.215.015.694.062 1.157.37 1.342.925.077.23.108.493.108.77 0 1.835-1.125 3.39-2.914 4.084a14.28 14.28 0 01-6.198 1.187c-5.83 0-10.748-3.33-12.87-8.31a.48.48 0 00-.432-.293H.185A.186.186 0 000 10.74v.832c0 6.643 5.378 12.028 12.02 12.028 7.37 0 11.758-5.74 11.758-11.45 0-.756-.077-1.51-.232-2.26z" />
      </svg>
    )
  }

  // Git & GitHub
  if (norm.includes('git') || norm.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    )
  }

  // Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    )
  }

  // OpenAI
  if (norm.includes('openai') || norm.includes('gpt')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="3" fill="#10A37F" />
      </svg>
    )
  }

  // LangChain / LangGraph
  if (norm.includes('langchain') || norm.includes('langgraph')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" fill="#10B981" />
        <circle cx="18" cy="6" r="3" fill="#059669" />
        <circle cx="12" cy="18" r="3" fill="#34D399" />
        <path d="M8.5 7.5L15.5 7.5M7.5 8.5L10.5 15.5M16.5 8.5L13.5 15.5" stroke="#059669" />
      </svg>
    )
  }

  // PyTorch
  if (norm.includes('pytorch')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#EE4C2C">
        <path d="M13.2 2.3l-1.4 1.4c3.4 3.4 3.4 9 0 12.4l-6.2-6.2c-1.7-1.7-4.5-1.7-6.2 0s-1.7 4.5 0 6.2l6.2 6.2c4.2 4.2 11 4.2 15.2 0 4.2-4.2 4.2-11 0-15.2l-7.6-4.8zm-4.8 12.4l-1.4 1.4c-1 1-2.5 1-3.4 0s-1-2.5 0-3.4l1.4-1.4 3.4 3.4z" />
      </svg>
    )
  }

  // Hugging Face
  if (norm.includes('hugging')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FFAA00">
        <circle cx="12" cy="12" r="10" fill="#FFD21E" />
        <circle cx="8" cy="10" r="1.5" fill="#000" />
        <circle cx="16" cy="10" r="1.5" fill="#000" />
        <path d="M8 15c1 1.5 2.5 2 4 2s3-.5 4-2" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    )
  }

  // C / C++
  if (norm === 'c' || norm.includes('c++')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#00599C">
        <path d="M11.5 3.5L3 8.5v7l8.5 5 8.5-5v-7l-8.5-5zm-1 11.2c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.2 0 2.2.6 2.7 1.6l-1.3.8c-.3-.5-.8-.8-1.4-.8-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c.6 0 1.1-.3 1.4-.8l1.3.8c-.5 1-1.5 1.6-2.7 1.6zm5-2.2h-1v-1h1v-1h1v1h1v1h-1v1h-1v-1z" />
      </svg>
    )
  }

  // Redis
  if (norm.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#DC382D">
        <path d="M1.5 7.5L12 2l10.5 5.5v9L12 22 1.5 16.5v-9zm10.5-3.3L4.2 8 12 12.1 19.8 8 12 4.2zM3.5 9.8v5.4l7.5 4v-5.4l-7.5-4zm17 0l-7.5 4v5.4l7.5-4V9.8z" />
      </svg>
    )
  }

  // Postman
  if (norm.includes('postman')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF6C37">
        <circle cx="12" cy="12" r="10" />
        <path d="M14 8l-6 4 6 4V8z" fill="#FFF" />
      </svg>
    )
  }

  // Vercel
  if (norm.includes('vercel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#000">
        <path d="M12 2L24 22H0L12 2Z" />
      </svg>
    )
  }

  // Render
  if (norm.includes('render')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#46E3B7">
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M8 8h8v8H8z" fill="#000" />
      </svg>
    )
  }

  // Groq / Gemini / LLMs / AI
  if (norm.includes('groq') || norm.includes('gemini') || norm.includes('llm') || norm.includes('ai') || norm.includes('agent')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" fill="#DDD6FE" stroke="#7C3AED" />
      </svg>
    )
  }

  // RAG / Vector Databases / Qdrant
  if (norm.includes('rag') || norm.includes('vector') || norm.includes('qdrant')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" fill="#FEF3C7" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  }

  // Default recognizable coding pill icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

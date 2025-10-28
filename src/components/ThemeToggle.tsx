import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const themes = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'system', label: 'System', icon: '💻' },
  ]

  const currentTheme = themes.find(t => t.value === theme) || themes[0]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-1 rounded-lg bg-accent text-primary transition-colors text-white"
        title="Select theme"
      >
        <span className="text-lg">{currentTheme.icon}</span>
        <span className="text-sm font-medium">{currentTheme.label}</span>
        <span className="text-xs">▼</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-secondary border border-border-primary overflow-hidden z-50">
          {themes.map((themeOption) => (
            <button
              key={themeOption.value}
              onClick={() => {
                setTheme(themeOption.value as 'light' | 'dark' | 'system')
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                theme === themeOption.value
                  ? 'bg-accent text-primary'
                  : 'text-primary hover:bg-tertiary'
              }`}
            >
              <span className="text-lg">{themeOption.icon}</span>
              <span className="font-medium">{themeOption.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ThemeToggle
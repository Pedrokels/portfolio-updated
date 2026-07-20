// src/composables/useDarkMode.js
import { ref, onMounted } from 'vue'

export function useDarkMode () {
  // Initialize dark mode from localStorage, default to false if not set
  const isDarkMode = ref(localStorage.getItem('theme') === 'dark' || false)

  // Function to apply the dark mode class to the document
  const applyDarkMode = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Toggle dark mode
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    applyDarkMode()
  }

  // Apply the theme on mount
  onMounted(() => {
    applyDarkMode()
  })

  return {
    isDarkMode,
    toggleDarkMode
  }
}

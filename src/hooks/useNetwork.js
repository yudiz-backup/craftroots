import { useEffect, useState } from 'react'

export const useNetwork = () => {
  const [isOnline, setNetwork] = useState(window.navigator.onLine)
  useEffect(() => {
    window.addEventListener('offline', () =>
      setNetwork(window.navigator.onLine)
    )
    window.addEventListener('online', () => setNetwork(window.navigator.onLine))
  })
  return isOnline
}

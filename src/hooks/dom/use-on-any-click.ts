import { useEffect } from 'react'

export const useOnAnyClick = (onClick: () => void) => {
  useEffect(() => {
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [onClick])
}

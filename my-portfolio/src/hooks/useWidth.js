import { useState } from 'react'

export const useWidth = () => {

const [width, setWidth] = useState(window.innerWidth);
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  setWidth(width);
})

return{width}
}


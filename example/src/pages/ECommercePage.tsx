import React, { useEffect } from "react"
import { Checkout } from "../components/Checkout"

export const ECommercePage: React.FC = () => {

  useEffect(() => {
    document.title = 'eCommerce Page';
  })

  return <Checkout />
}

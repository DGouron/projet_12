import React from 'react'
import Header from '../components/navbar/Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default Layout
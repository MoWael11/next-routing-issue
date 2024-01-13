import { Suspense } from 'react'
import Header from './page'

const Default = async () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Header />
    </Suspense>
  )
}

export default Default

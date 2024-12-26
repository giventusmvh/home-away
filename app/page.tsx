import React from 'react'
import { Button } from '@/components/ui/button'

function HomePage() {
  return (
    <div>
      <p className='text-3xl'>Home Page</p>
      <Button variant={'outline'} size={'lg'} className='capitalize m-8'>Click Me</Button>
    </div>
  )
}

export default HomePage

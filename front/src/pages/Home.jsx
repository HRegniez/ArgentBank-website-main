import React from 'react'
import Hero from '../components/Hero'
import FeaturesItem from '../components/FeaturesItem'
import iconChat from '../assets/icon-chat.png'
import iconMoney from '../assets/icon-money.png'
import iconSecurity from '../assets/icon-security.png'
import '../sass/components/features.scss'


function Home() {
  return (
    <main>                                        
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeaturesItem 
          img={iconChat} 
          alt="Chat Icon" 
          title="You are our #1 priority" 
          content="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeaturesItem 
          img={iconMoney}
          alt="Chat Icon" 
          title="More savings means higher rates" 
          content="The more you save with us, the higher your interest rate will be!"
        />
        <FeaturesItem 
          img={iconSecurity}
          alt="Chat Icon" 
          title="Security you can trust" 
          content="We use top of the line encryption to make sure your data and money
          is always safe."
        />
      </section>
    </main>
  )
}

export default Home

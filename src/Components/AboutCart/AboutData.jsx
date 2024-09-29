import React from 'react'

const AboutData = ({curElm}) => {
    const{name, email, avatar,role} = curElm
  return (
    <main>
         <div className="team__container" >
            <div className="team__image">
                <figure>
                    <img src={avatar} alt={name} />
                </figure>
            </div>
            <div className="team__heading">
            <p>{name}</p>
            <p>{role}</p>
            <p>{email}</p>
            </div>
            
            <p>With 26 years experience working on both sides of the fence for clients and construction companies</p>
        </div>
    </main>
  )
}

export default AboutData
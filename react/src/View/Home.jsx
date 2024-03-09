import React from 'react'
import { useStateContext } from '../contexts/Context'
import { Navigate } from 'react-router-dom';

export default function Home() {
    const {userToken} = useStateContext();

    if(!userToken) {
        return <Navigate to='/login'/>
    }

  return (
    <>
       <div className="container mx-auto my-12 lg:px-16">
      <div className="grid grid-cols-2 gap-7">
        <div  style={{ animationDelay: "0.2s" }} className="text  fade-right text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab
          repellendus corrupti debitis officiis, temporibus laudantium pariatur
          quod beatae aliquam molestiae a blanditiis porro provident in harum
          soluta impedit? Hic, laborum obcaecati dignissimos in qui culpa vel et
          provident, ipsa quos quibusdam, repellat praesentium rerum dicta
          impedit quidem autem excepturi facilis nobis! Necessitatibus facilis
          ad quod dolores ipsam eaque natus temporibus corporis iste repellendus
          odit doloribus, magni veritatis vitae similique eligendi, consequatur
          harum provident recusandae quibusdam velit laboriosam placeat neque.
          Obcaecati modi veritatis nisi, neque repellendus sequi nulla accusamus
          et odit, vel animi labore voluptatibus adipisci earum laboriosam?
          Architecto, excepturi?
        </div>
        <div style={{ animationDelay: "0.2s" }} className="fade-left image place-self-center">
          <img
            className=" h-96 w-96  rounded-md"
            src="https://i.pinimg.com/564x/8f/59/da/8f59dac8bc35de4bd853599308ef1177.jpg"
            alt=""
          />
        </div>
        <div style={{ animationDelay: "0.4s" }} className="fade-right image place-self-center">
          <img
            className= " h-96 w-96  rounded-md"
            src="https://i.pinimg.com/564x/8f/59/da/8f59dac8bc35de4bd853599308ef1177.jpg"
            alt=""
          />
        </div>
        <div  style={{ animationDelay: "0.4s" }} className="text fade-left text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab
          repellendus corrupti debitis officiis, temporibus laudantium pariatur
          quod beatae aliquam molestiae a blanditiis porro provident in harum
          soluta impedit? Hic, laborum obcaecati dignissimos in qui culpa vel et
          provident, ipsa quos quibusdam, repellat praesentium rerum dicta
          impedit quidem autem excepturi facilis nobis! Necessitatibus facilis
          ad quod dolores ipsam eaque natus temporibus corporis iste repellendus
          odit doloribus, magni veritatis vitae similique eligendi, consequatur
          harum provident recusandae quibusdam velit laboriosam placeat neque.
          Obcaecati modi veritatis nisi, neque repellendus sequi nulla accusamus
          et odit, vel animi labore voluptatibus adipisci earum laboriosam?
          Architecto, excepturi?
        </div>
        <div style={{ animationDelay: "0.6s" }} className="text fade-right text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab
          repellendus corrupti debitis officiis, temporibus laudantium pariatur
          quod beatae aliquam molestiae a blanditiis porro provident in harum
          soluta impedit? Hic, laborum obcaecati dignissimos in qui culpa vel et
          provident, ipsa quos quibusdam, repellat praesentium rerum dicta
          impedit quidem autem excepturi facilis nobis! Necessitatibus facilis
          ad quod dolores ipsam eaque natus temporibus corporis iste repellendus
          odit doloribus, magni veritatis vitae similique eligendi, consequatur
          harum provident recusandae quibusdam velit laboriosam placeat neque.
          Obcaecati modi veritatis nisi, neque repellendus sequi nulla accusamus
          et odit, vel animi labore voluptatibus adipisci earum laboriosam?
          Architecto, excepturi?
        </div>
        <div style={{ animationDelay: "0.6s" }} className=" fade-left image place-self-center">
          <img
            className=" h-96 w-96 rounded-md"
            src="https://i.pinimg.com/564x/f3/f5/88/f3f5881c42cd165756e055b968f553c5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    
    
    </>
  )
}

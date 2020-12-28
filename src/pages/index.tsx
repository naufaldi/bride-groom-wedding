import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Button } from '../components'
import '../styles/global.css'
import GroomsBride from '../images/groomsbride.png'
import { Player } from '@lottiefiles/react-lottie-player'
import Butterfly from '../images/butterfly.json'

const App = () => (
  <Layout css={tw`min-h-screen bg-gold-100 overflow-hidden`}>
    <div tw="main-container mx-auto flex flex-col items-center relative">
      <div tw="p-5 block mt-24">
        <Logo />
      </div>
      <div tw="w-full sm:w-3/5  flex justify-center items-center">
        <img src={GroomsBride} />
      </div>
      <div tw="absolute sm:-left-32 sm:h-80 sm:w-80 -bottom-24 -left-24 w-64 h-64 bg-contain bg-gingko z-10" />
      <div tw="absolute sm:-right-20 sm:h-64 sm:w-64 -top-24 -right-24 w-56 h-56 bg-contain transform rotate-180 bg-gingko z-10" />
      <div tw="w-20 h-20 absolute sm:bottom-64 sm:left-10 left-0 bottom-48">
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src={Butterfly}
          style={{ height: '100%', width: '100%' }}
        ></Player>
      </div>
    </div>
    <div tw="py-24 bg-white relative">
      <div tw="absolute left-0 right-0 h-10 bg-white" style={{ top: -40 }} />
      <div tw="main-container mx-auto items-center pb-12 px-4 sm:px-0">
        <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
          Wedding Schedule
        </div>
        <div tw="grid grid-cols-2 gap-4 text-center font-times text-gold-900 py-20">
          <div tw="col-span-full sm:col-span-1 flex items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12">
            HOLY
            <br />
            MATRIMONY
          </div>
          <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest">
            <div tw="">SATURDAY</div>
            <div tw="font-bold">XX.XX.XXXX</div>
            <div tw="mb-8">XX.XX WIB</div>
            <div tw="px-12">
              <Button isPrimary={true}>Live Stream</Button>
            </div>
          </div>
        </div>
        <div tw="grid grid-cols-2 gap-4 text-center font-times text-gold-900 py-20">
          <div tw="col-span-full sm:col-span-1 flex items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12">
            WEDDING
            <br />
            RECEPTION
          </div>
          <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest">
            <div tw="font-brittany text-4xl mb-8">Invitation Only</div>
            <div tw="px-12">
              <Button isSecondary={true}>RSVP</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div tw="py-24 bg-gold-100 relative">
      <div tw="main-container mx-auto items-center pb-12 px-4 sm:px-0 relative">
        <div tw="absolute sm:-right-20 sm:h-64 sm:w-64 -top-64 -right-32 w-64 h-64 bg-contain transform rotate-180 bg-gingko z-10" />
        <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-24 mt-12">
          Our Sweet Little Story
        </div>
        <div
          tw="mx-auto w-full p-4 leading-loose font-sans"
          style={{ maxWidth: 640 }}
        >
          <p tw="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a
            scelerisque purus semper eget duis at tellus at. Nisi est sit amet
            facilisis magna etiam. Auctor eu augue ut lectus arcu bibendum at
            varius. Congue eu consequat ac felis donec et. orper morbi tincidunt
            ornare. Eu feugiat pretium nibh ipsum
          </p>

          <p tw="mb-6">
            Sit amet volutpat consequat mauris nunc congue nisi vitae. Orci
            nulla pellentesque dignissim enim sit amet venenatis urna.
          </p>

          <p tw="mb-6">
            Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Velit
            dignissim sodales ut eu. Tempor orci dapibus ultrices in iaculis
            nunc sed. Vestibulum rhoncus est pellentesque elit ullamcorper.
            Risus feugiat in ante metus dictum at. scelerisque. Suscipit
            adipiscing bibendum est ultricies integer quis auctor elit. Dictumst
            vestibulum rhoncus est pellentesque. Molestie ac feugiat sed lectus
            vestibulum.
          </p>
        </div>
      </div>
    </div>
    <div tw="py-24 bg-white relative text-center font-sans">
      © 2020 by{' '}
      <a href="https://sonnylab.com" tw="font-semibold">
        sonnylab
      </a>
    </div>
  </Layout>
)

export default App

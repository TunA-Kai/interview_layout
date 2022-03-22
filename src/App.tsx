import { ReactComponent as Logo } from './assests/logo.svg'
import InfoBox from './components/InfoBox'
import Sidebar from './components/Sidebar'
import htmlImg from './assests/html.png'
import cssImg from './assests/css.png'
import urlImg from './assests/url.png'

function App() {
  return (
    <div className='flex min-h-screen flex-col lg:flex-row'>
      <Sidebar additionalStyles='flex lg:flex-col lg:basis-2/12' />
      <div className='flex flex-col lg:basis-10/12'>
        <Logo className='mx-auto my-8 lg:mt-5' />

        <section className='mx-8 mb-10 bg-[#efefef] px-4 py-8 text-center lg:mx-12'>
          <h2 className='mb-3 text-lg font-bold'>Lorem ipsum dolor sit amet.</h2>
          <p className='mx-auto max-w-xl lg:max-w-3xl xl:max-w-5xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit ab delectus,
            alias harum laborum illo nemo. Ut est magnam cumque ducimus, possimus ipsa sapiente
            consequuntur non, esse pariatur rem, mollitia consectetur voluptatibus quaerat dolorum
            enim laudantium? Dolorum commodi, repellendus accusantium molestiae et dicta, laboriosam
            aperiam quae, aliquam voluptates obcaecati.
          </p>
        </section>

        <section className='mx-8 mb-8 grid grid-cols-1 gap-6 lg:mx-12 lg:mb-16 lg:grid-cols-2 xl:grid-cols-3'>
          <InfoBox img={cssImg} />
          <InfoBox img={htmlImg} />
          <InfoBox img={urlImg} />
        </section>

        <footer className='mt-auto border-t border-[#dedede] py-8 pl-8 lg:pl-12'>
          Copyright &copy; 2021
        </footer>
      </div>
    </div>
  )
}

export default App

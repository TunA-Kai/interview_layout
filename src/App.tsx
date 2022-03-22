import { ReactComponent as Logo } from './assests/logo.svg'
import InfoBox from './components/InfoBox'
import Sidebar from './components/Sidebar'
import htmlImg from './assests/html.png'
import cssImg from './assests/css.png'
import urlImg from './assests/url.png'

function App() {
  return (
    <div className='flex min-h-screen flex-col lg:flex-row'>
      <Sidebar additionalStyles='flex lg:flex-col lg:basis-4/12' />
      <div className='flex flex-col'>
        <Logo className='mx-auto mt-5' />

        <div className='mx-8 mt-8 mb-10 bg-[#efefef] px-4 py-8 text-center'>
          <h2 className='mb-3 text-lg font-bold'>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit ab delectus,
            alias harum laborum illo nemo. Ut est magnam cumque ducimus, possimus ipsa sapiente
            consequuntur non, esse pariatur rem, mollitia consectetur voluptatibus quaerat dolorum
            enim laudantium? Dolorum commodi, repellendus accusantium molestiae et dicta, laboriosam
            aperiam quae, aliquam voluptates obcaecati.
          </p>
        </div>

        <div className='mx-8 mb-5 grid grid-cols-1 gap-6 lg:grid-cols-3'>
          <InfoBox img={cssImg} />
          <InfoBox img={htmlImg} />
          <InfoBox img={urlImg} />
        </div>

        <footer className='mt-auto border-t border-[#dedede] py-8 pl-8'>
          Copyright &copy; 2021
        </footer>
      </div>
    </div>
  )
}

export default App

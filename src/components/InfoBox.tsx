import { ReactComponent as SVG } from '../assests/css.svg'

interface InfoBoxProps {
  img: string
}

function InfoBox({ img }: InfoBoxProps) {
  return (
    <div>
      <h2 className='mb-4 text-2xl font-bold'>Lorem ipsum dolor sit amet.</h2>
      <img src={img} alt={img} className='float-left mr-4' />
      <p className='-mt-1'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis repellat libero nam aut
        distinctio, blanditiis deserunt animi ipsa modi vel, enim voluptate dignissimos nesciunt
        nisi, dolor suscipit aspernatur voluptates ipsam ducimus. At delectus libero a reiciendis
        incidunt, quasi officia hic non nobis, ex, tenetur nisi neque quia commodi vitae est.
      </p>
    </div>
  )
}

export default InfoBox

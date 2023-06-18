import Image from 'next/image'

export default function Home() {
  return (
    <section>
      <Image src="/bg.jpg" alt="" fill={true} className='-z-10'/>
    </section>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      Root
      <br />
      <Link href='/dashboard'>Go to dashboard</Link>
      <br />
      <a href='/dashboard'>Go to dashboard with a normal anchor</a>
    </main>
  )
}

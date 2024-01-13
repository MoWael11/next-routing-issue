import Link from 'next/link'

export default function Home() {
  return (
    <main>
      Root
      <Link href='/dashboard'>Go to dashboard (soft navigation)</Link>
      <br />
      <a href='/dashboard'>Go to dashboard with a normal anchor</a>
    </main>
  )
}

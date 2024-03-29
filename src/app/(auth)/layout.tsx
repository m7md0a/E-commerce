import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <Image width={700} height={700}
                alt="Night"
                src="/images/background-auth.avif"
                className="absolute inset-0 h-full w-full object-cover"
            />
        </aside>

        <div
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
            {children}
        </div>
    </div>
    </section>
  )
}


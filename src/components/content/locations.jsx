export default function locations({ title = '', ...props }) {
  return (
    <section className={`${className}`}> 
      <div>       
        {title && <h2>{title}</h2>}
      </div>
      {links && links.map((link, index) => ( 
        <ul className="grid grid-cols-2   sm:grid-cols-3  lg:grid-cols-4 gap-2 mb-32 overflow-auto max-h-full">
          <li className="aspect-video overflow-hidden" key={index} >                                            
            <Link className="hover:opacity-100 opacity-60 duration-100 transition-all" href={`/locations/${link.slug}`}>
              <Image className="object-cover aspect-video w-full" alt={link.slug} height={400} width={1000} src={`/locations/${link.slug}/cover.jpg`} />
              <p class="font-medium font-sans text-lg xl:text-xl -mt-10 ml-4 text-white">
                {link.data.title}
              </p>
            </Link>
          </li>
        </ul>
      ))}
    </section>
  )
}
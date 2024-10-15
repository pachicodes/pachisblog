import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Pachi's Blog
      </h1>
      <p className="mb-4">
        {`
        Hi, I'm Pachi, a dedicated DevRel professional specializing in building engaging developer communities. 
        With a passion for technology and people, I have spent years fostering connections within the tech community. 
        Join me as I share my insights, experiences, and learnings around developer communities, devrel and more. 
        
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

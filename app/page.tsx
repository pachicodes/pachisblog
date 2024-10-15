import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Pachi's Blog
      </h1>
      <p className="mb-4">
        {`Hi, I am Pachi. A Developer's Relation professional that specializes in communities and is passionate about connecting people, cats and anime. I create this blog to share my ideas, opnions, experiences and learnings around DevRel and Tech Communities `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

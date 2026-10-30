export default async function BlogContent({ blogId }: { blogId: string }) {
    return (
      <div>
        <h1>Blog Page</h1>
        <p>{blogId}</p>
      </div>
    )
}
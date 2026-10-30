import { Suspense } from "react"
import BlogContent from "@/component/templates/BlogContent"

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>
}) {
    const { blogId } = await params
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BlogContent blogId={blogId} />
    </Suspense>
  )
}


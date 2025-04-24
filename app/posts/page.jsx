import Link from 'next/link'

const Posts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return (
    <div className="space-y-4 p-4">
      {posts?.map((post) => (
        <Link key={post?.id} href={`/posts/${post?.id}`}>
         <div  className="border p-2 rounded shadow" >
          <h3 className="text-lg font-semibold">{post?.title}</h3>
        </div>
        </Link>  
      ))}
    </div>
  )
}


export default Posts
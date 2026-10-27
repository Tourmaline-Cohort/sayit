import PostCard from "./PostCard"



const PostList = ({posts}) => {
  return (
      <div className="grid grid-cols-1 ">
          {posts.map(post => (
                <PostCard
                    key={post.id}
                    post={post}
                />
            ))}
    </div>
  )
}
export default PostList
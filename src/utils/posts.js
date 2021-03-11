export const getTagCountsByLabel = (posts = []) => {
  return posts.reduce((tagCounts, post) => {
    post.tags.map(tag => {
      // assuming tags casing is consistent
      if (!tagCounts.hasOwnProperty(tag)) {
        tagCounts[tag] = 0
      }
  
      tagCounts[tag]++
    })
  
    return tagCounts
  }, {})
}

export const getPopularTags = (posts = []) => {
  const tagCountsByLabel = getTagCountsByLabel(posts)

  return Object.keys(tagCountsByLabel).map(tag => ({
    tag,
    count: tagCountsByLabel[tag]
  })).sort((a, b) => b.count - a.count)
}
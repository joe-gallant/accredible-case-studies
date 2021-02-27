/** This filter mechanism is for the case study library */
export const filterCaseStudies = (posts, filters) => {

  let results = posts;

  // Step 1 - Search
  const searchTerm = filters.searchTerm.toLowerCase();
  if (searchTerm) {
    results = results.filter(post => {

      // First search the title
      if (post.node.frontmatter.title.toLowerCase().includes(searchTerm)) return true;

      // Next if the term in an industry
      if (post.node.frontmatter.industry) {
        const indArray = post.node.frontmatter.industry.filter(ind => {
          return ind.toLowerCase().includes((searchTerm));
        })

        if (indArray.length > 0) return true
      }

      // Next if the term in an topics
      if (post.node.frontmatter.topics) {
        const topicsArray = post.node.frontmatter.topics.filter(ind => {
          return ind.toLowerCase().includes((searchTerm));
        })

        if (topicsArray.length > 0) return true
      }
        // return post.node.frontmatter.industry?.includes(searchTerm)
    })
  }

  // Step 2 - Industries


  // Step 3 - Topics


  // Step 4 - Platform


  // Step 5 - Date ranges


  console.log(results);
}
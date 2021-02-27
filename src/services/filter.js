/** This filter mechanism is for the case study library */
export const filterCaseStudies = (posts, filters) => {

  let results = posts;

  // Step 1 - Search
  const searchTerm = filters.searchTerm.toLowerCase();
  if (searchTerm) {
    results = results.filter(post => {

      // First search the title
      if (post.node.frontmatter.title.toLowerCase().includes(searchTerm)) return true;

      // Next if the search term is in an industry
      if (post.node.frontmatter.industry) {
        const indArray = post.node.frontmatter.industry.filter(ind => {
          return ind.toLowerCase().includes((searchTerm));
        })

        if (indArray.length > 0) return true
      }

      // Next if the search term is in topics
      if (post.node.frontmatter.topics) {
        const topicsArray = post.node.frontmatter.topics.filter(ind => {
          return ind.toLowerCase().includes((searchTerm));
        })

        if (topicsArray.length > 0) return true
      }

      // Next if the search term is in platform
      if (post.node.frontmatter.platform) {
        return post.node.frontmatter.platform.toLowerCase().includes(searchTerm)
      }      
    })
  }

  // Step 2 - Industries
  if (filters.filters.activeIndustryTags.length > 0) {
    results = results.filter(post => {

      if (post.node.frontmatter.industry) {
        const array = post.node.frontmatter.industry.filter(element => filters.filters.activeIndustryTags.includes(element));
        if (array.length === filters.filters.activeIndustryTags.length) return true;
      }
    })
  }

  // Step 3 - Topics
  if (filters.filters.activeTopicTags.length > 0) {
    results = results.filter(post => {

      if (post.node.frontmatter.topics) {
        const array = post.node.frontmatter.topics.filter(element => filters.filters.activeTopicTags.includes(element));
        if (array.length === filters.filters.activeTopicTags.length) return true;
      }
    })
  }


  // Step 4 - Platform
  if (filters.filters.activePlatformTags.length > 0) {
    results = results.filter(post => {

      if (post.node.frontmatter.platform) {
        return filters.filters.activePlatformTags.includes(post.node.frontmatter.platform);
      }
    })
  }

  // Step 5 - Date ranges


  return results;
}
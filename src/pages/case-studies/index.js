import React from 'react'
import Layout from '../../components/Layout'
import { FilterBar } from '../../components/FilterBar/FilterBar'
import { Banner } from '../../components/Banner'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import { Card } from '../../components/Card'
import { filterCaseStudies } from '../../services/filter'
import { addTagToURL } from '../../services/tagClick'
import { Helmet } from "react-helmet";

const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 600px;
`;

const SingleCard = styled.div`
  flex: 0 0 calc(50% - 12px);

  @media (max-width: 1000px) {
    flex: 0 0 100%;
  }
`;

const NoResults = styled.div`
  padding: 48px;
  text-align: center;
  width: 100%;
  min-height: 600px;
`;
class CaseStudyIndexPage extends React.Component {
  constructor(props) {
    super(props);

    const { data } = this.props
    let { edges: posts } = data.caseStudies
    const pageData = data.caseStudyParent.frontmatter

    this.state = { 
      searchTerm: '', 
      originalResults: posts,
      filteredResults: posts,
      topics: this.getArraysFromPosts(posts, 'topics'),
      industries: this.getArraysFromPosts(posts, 'industry'),
      platforms: this.getPlatformsFromPosts(posts),
      dates: this.getAvailableYears(posts),
      pageData: pageData,
      tagsGotAdded: new Date(),
    };

    this.resultRef = React.createRef();
  }
  
  getAvailableYears(posts) {
    let earliestDate = posts[posts.length - 1].node.frontmatter.date;
    earliestDate = new Date(earliestDate);
    let earliestYear = earliestDate.getFullYear();
    const currentYear = new Date().getFullYear();
    const years = [];
    while ( earliestYear <= currentYear ) {
      years.push(earliestYear++);
    }
    return years;
  }

  getArraysFromPosts(posts, type) {
    let array = posts.map(post => post.node.frontmatter[type])
    array = [].concat.apply([], array);
    array = array.filter(topic => topic !== null)
    return Array.from(new Set(array))
  }

  getPlatformsFromPosts(posts) {
    let array = posts.map(post => post.node.frontmatter.platform);
    array = array.filter(topic => topic !== null)
    return Array.from(new Set(array))
  }

  setSearch(search) {
    this.setState({
      searchTerm: search
    });

    this.resultRef.current.scrollIntoView();
  }

  clickOnTag(tag) {
    this.setState({
      tagsGotAdded: new Date()
    });

    addTagToURL(tag, 'topics');
    this.resultRef.current.scrollIntoView();
  }

  filter(filters) {
    const results = filterCaseStudies(this.state.originalResults, { searchTerm: this.state.searchTerm, filters });
    this.setState({
      filteredResults: results
    });
  }

  render() {

    return (
      <Layout>
        <Helmet>
          <title>{this.state.pageData.pageMeta.metaTitle}</title>
          <meta name="description" content={this.state.pageData.pageMeta.metaDescription} />
          <meta property="og:image" content={this.state.pageData.pageMeta.OGImage.publicURL} />
        </Helmet>
        <Banner overlayColor={this.state.pageData.bannerColor} overlay={this.state.pageData.bannerOverlay} title={this.state.pageData.title} image={this.state.pageData.bannerImage.publicURL} search searchValue={this.state.searchTerm} placeholder="Search for a case study" submitSearch={(searchTerm) => this.setSearch(searchTerm)}></Banner>
        <section ref={this.resultRef} className="section">
          <div className="container">
            <FilterBar
              addedTags={this.state.tagsGotAdded}
              resultCount={this.state.filteredResults.length}
              searchTerm={this.state.searchTerm}
              clearSearch={() => this.setState({ searchTerm: ''})}
              industries={this.state.industries}
              topics={this.state.topics}
              platforms={this.state.platforms}
              dates={this.state.dates}
              updateToFilters={(filters) => this.filter(filters)}
            />
            <Cards>
              {this.state.filteredResults.map((post, index) => (
                <SingleCard key={index}>
                  <Card
                    tagClick={tag => this.clickOnTag(tag)}
                    title={post.node.frontmatter.title}
                    image={post.node.frontmatter.featuredimage?.childImageSharp.fluid.src}
                    slug={post.node.fields.slug} 
                    author={post.node.frontmatter.author} 
                    date={post.node.frontmatter.date} 
                    topics={post.node.frontmatter.topics} 
                    />
                </SingleCard>
              ))}

              {this.state.filteredResults.length === 0 && (
                <NoResults>
                  <h2>Oops, looks like there are no results.</h2>
                  <p>Please clear the filters or try another search term.</p>
                </NoResults>
              )}
            </Cards>
          </div>
        </section>
      </Layout>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query CaseStudyQuery {
      caseStudies: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "case-study" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              author
              topics
              industry
              company_name
              publishing_company_name
              synopsis
              platform
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }

      caseStudyParent: markdownRemark(fields: {slug: {in: "/case-study-parent/"}}) {
        frontmatter {
          title
          bannerImage {
            publicURL
          }
          bannerOverlay
          bannerColor
          pageMeta {
            metaDescription
            metaTitle
            OGImage {
              publicURL
            }
          }
        }
      }
    }
    
  `}
    render={(data, count) => <CaseStudyIndexPage data={data} count={count} />}
  />
)

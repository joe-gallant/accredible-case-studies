import { navigate } from "gatsby";

export const addTagToURL = (tag, type) => {
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let topics = urlParams.get('topics')
  let industries = urlParams.get('industries')

  if (type === 'topics') {
    if (topics && !topics.includes(tag)) {
      topics = topics + ',' + tag;
    } else if (!topics) {
      topics = tag;
    }
  }

  if (type === 'industries') {
    if (industries && !industries.includes(tag)) {
      industries = industries + ',' + tag;
    } else if (!industries) {
      industries = tag;
    }
  }

  const url = `/case-studies?${topics ? 'topics=' + topics + '&' : ''}${industries ? 'industries=' + industries : ''}`;

  if (window.location.pathname === '/case-studies') {
    window.history.pushState("Case studies library", 'Case studies library', url);
  } else {
    navigate(url);
  }
}
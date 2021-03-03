import { navigate } from "gatsby";

export const addTagToURL = (tag, type) => {
  const url = `/case-studies?${type === 'topics' ? 'topics=' + tag : 'industries=' + tag}#search-results`;
  navigate(url);
}
import { useEffect } from 'react';

/**
 * Custom hook to dynamically manage page-specific SEO meta tags, title, and canonical links.
 */
export function useSEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/assets/pankaj_logo_white.png'
}) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title.includes('Pankaj Overseas')
        ? title
        : `${title} | Pankaj Overseas - Global Import & Export Solutions`;
    }

    // Helper to update or create meta tags
    const setMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Update Meta Description
    if (description) {
      setMetaTag('meta[name="description"]', 'name', 'description', description);
      setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
      setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    // 3. Update Meta Keywords
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    // 4. Update OpenGraph and Twitter Title
    if (title) {
      setMetaTag('meta[property="og:title"]', 'property', 'og:title', document.title);
      setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', document.title);
    }

    // 5. Update OpenGraph Type & Image
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    if (ogImage) {
      setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
      setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    }

    // 6. Update Canonical Link
    const fullCanonical = canonicalUrl || window.location.href;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullCanonical);

  }, [title, description, keywords, canonicalUrl, ogType, ogImage]);
}

export default useSEO;

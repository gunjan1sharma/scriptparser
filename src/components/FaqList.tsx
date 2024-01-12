import FaqComponent from "./FaqComponent";

function FaqList(props: any) {
  return (
    <div className="p-4 mt-20 lg:mx-20">
      <h1>FAQ (How it works)</h1>
      <div
        className="mt-3 mb-3"
        style={{ borderBottomWidth: "1px", borderBottomColor: "lightgray" }}
      />
      <FaqComponent
        faq="What types of URLs can I scrape with your tool?"
        answer="Our tool handles a wide range of URLs, including websites, blog posts, articles, social media pages, and more! We handle most common web formats and protocols, from HTTP and HTTPS to dynamic pages and JavaScript-rendered content."
      />
      <FaqComponent
        faq="Can I set any limits on the scraping?"
        answer="Yes, you can! We offer flexible options to tailor the scrape depth and scope. You can limit the number of links retrieved, set a maximum crawl depth, exclude specific domains or paths, and even focus on specific link types like internal or external links."
      />
      <FaqComponent
        faq="What formats do I receive the scraped links in?"
        answer="We provide multiple output options for your convenience. You can get a simple list of URLs in plain text, a structured spreadsheet format like CSV or XLSX, or even integrate the data directly into your own platform via API access."
      />
      <FaqComponent
        faq="Are there any restrictions on how I can use the scraped data?"
        answer="While we encourage responsible and ethical use, you are generally free to utilize the scraped data for your own purposes. However, please be mindful of respecting robots.txt files and terms of service of the websites you scrape."
      />
      <FaqComponent
        faq="Is your tool safe and secure?"
        answer="We take security and privacy seriously. Our tool adheres to industry best practices for data protection and follows responsible scraping principles. We do not store any of your scraped data or user information beyond necessary processing."
      />
      <FaqComponent
        faq="How much does your tool cost?"
        answer="We offer flexible pricing plans to suit your needs. We have a free tier for basic use, affordable paid plans with increased limits and features, and even custom enterprise solutions for high-volume needs."
      />
    </div>
  );
}

export default FaqList;

import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./BlogSection.module.css";

const defaultBlogData = [
  {
    id: 1,
    image: "/images/industries/blog-1.png",
    category: "App Development",
    date: "July 29, 2025",
    imageOverlayTitle: "How to Increase App Downloads - 6 Powerful Strategies for Mobile Apps",
    title: "How to Increase App Downloads - 6 Powerful Strategies for Mobile Apps",
    excerpt: "Building an app isn't enough anymore, you could create something incredible, an app that helps people save money, learn new skills, or even improve the...",
    link: "#",
  },
  {
    id: 2,
    image: "/images/industries/blog-2.png",
    category: "Tech Stacks",
    date: "July 29, 2025",
    imageOverlayTitle: "What is AngularJS?",
    title: "What is AngularJS?",
    excerpt: "Building an app isn't enough anymore, you could create something incredible, an app that helps people save money, learn new skills, or even improve the...",
    link: "#",
  },
  {
    id: 3,
    image: "/images/industries/blog-3.png",
    category: "App Development",
    date: "July 29, 2025",
    imageOverlayTitle: "Why ERP Integration Is Essential for Modern Businesses Across Industries.",
    title: "Why ERP Integration Is Essential for Modern Businesses Across Industries.",
    excerpt: "Building an app isn't enough anymore, you could create something incredible, an app that helps people save money, learn new skills, or even improve the...",
    link: "#",
  },
];

export default function BlogSection({ data = {} }) {
  const mainTitle = data.mainTitle || "OUR RELATED BLOG POSTS";
  const subTitle = data.subTitle || "Stay ahead of the curve with our latest insights, trends, and expert opinions on mobile app development, AI integration, and digital transformation.";
  const blogs = data.blogs || defaultBlogData;

  return (
    <section className={styles.blogSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.titleWrap}>
          <h2 className={styles.mainTitle}>{mainTitle}</h2>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>

        {/* Blog Cards Grid */}
        <div className="row g-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-12 col-md-6 col-lg-4">
              <div className={styles.blogCard}>
                {/* Image Container with Dark Overlay & Text */}
                <div className={styles.imageWrap}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.blogImg}
                  />
                  <div className={styles.imageOverlay}>
                    <h4 className={styles.overlayTitle}>{blog.imageOverlayTitle}</h4>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className={styles.cardBody}>
                  {/* Category & Date Row */}
                  <div className={styles.metaRow}>
                    <span className={styles.category}>{blog.category}</span>
                    <span className={styles.date}>{blog.date}</span>
                  </div>

                  {/* Main Title */}
                  <h3 className={styles.cardTitle}>{blog.title}</h3>

                  {/* Excerpt */}
                  <p className={styles.excerpt}>{blog.excerpt}</p>

                  {/* Action Button */}
                  <div className={styles.btnRow}>
                    <ActionButtons
                      text="Read More"
                      href={blog.link}
                      textClassName={styles.readMoreText}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

(async () => {
  console.info(chalk.cyan('info'), ` - Generating RSS feed`);

  const root = process.cwd();

  function getPosts() {
    const files = fs
      .readdirSync(path.join(root, 'content'))
      .filter((name) => name !== 'img');

    const posts = files.reduce((allPosts, postSlug) => {
      const fullPath = path.join(root, 'content', postSlug);
      const stats = fs.statSync(fullPath);

      if (stats.isFile()) {
        const source = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(source);

        return [
          {
            ...data,
            slug: postSlug.replace('.mdx', ''),
          },
          ...allPosts,
        ];
      } else {
        return allPosts;
      }
    }, []);

    return posts;
  }

  try {
    const feed = new RSS({
      title: "Mustafa Saraç's Blog",
      description: "Hi I'm Mustafa, and this is my blog.",
      site_url: 'https://www.mustafasarac.com',
      feed_url: 'https://www.mustafasarac.com/rss.xml',
      image_url: 'https://www.mustafasarac.com/static/og/main-og-image.png',
      language: 'en',
    });

    const content = [...getPosts()].sort((post1, post2) =>
      post1.date > post2.date ? -1 : 1
    );

    content.forEach((post) => {
      const url = `https://blog.mustafasarac.com/posts/${post.slug}`;

      feed.item({
        title: post.title,
        description: post.subtitle,
        date: new Date(post.date),
        author: 'Mustafa Saraç',
        url,
        guid: url,
      });
    });

    const rss = feed.xml({ indent: true });
    fs.writeFileSync(path.join(__dirname, '../public/rss.xml'), rss);
  } catch (error) {
    console.error(
      chalk.red('error'),
      ` - An error occurred while generating the RSS feed`
    );
    console.error(error);
    process.exit(1);
  }
})();

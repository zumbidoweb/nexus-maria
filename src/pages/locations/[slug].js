import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Link from "next/link";
import Layout from "@/components/layouts/location";
import { components } from "@/components/content/prose"
import { postFilePaths, POSTS_PATH } from "../../utils/api-server";
import { AnimatePresence } from 'framer-motion'

export default function Location({ content, data, posts, slug }) {
  return (
    <Layout posts={posts} data={data} slug={slug}>  
      <AnimatePresence mode="wait" initial={false}>  
        <MDXRemote {...content} components={components} />      
      </AnimatePresence>    
    </Layout>
  );
}


export const getStaticProps = async ({ params }) => {

  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const { content, data } = matter(fs.readFileSync(postFilePath));
  const post = await serialize(content, {
    mdxOptions: { remarkPlugins: [] },
    scope: data,
    slug: params.slug
   
  });
  const posts = postFilePaths.map((filePath) => {
    const { content, data } = matter(fs.readFileSync(path.join(POSTS_PATH, filePath)));
    return {
      content,
      data,
      slug: filePath.replace(/\.[^/.]+$/, ""),
      filePath,
    };
  });

  return {
    props: {
      content: post,
      posts: posts,
      data: data,
      slug: params.slug
    },

  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

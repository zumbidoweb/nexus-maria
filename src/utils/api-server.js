import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";


// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "content");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    .filter((path) => ! /\intro.mdx?$/.test(path));


export async function getPosts() {

    return postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
        const { content, data } = matter(source);
        return {
            content,
            data,
            filePath,
        };
    });
}


export async function getPost(slug) {

    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postFilePath);
    const { content, data } = matter(source);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    });

    return {
        source: mdxSource,
        frontMatter: data,
    }
}
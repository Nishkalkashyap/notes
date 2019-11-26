import fetch from 'node-fetch';
import * as fs from 'fs-extra';
import * as path from 'path';

const FETCH_BASE_URL = 'https://terriblefootballanalysis.com/wp-json/wp/v2';

fetchPosts().catch(console.error);

async function fetchPosts() {
    const response = await fetch(`${FETCH_BASE_URL}/post`);
    const posts: IPost[] = await response.json();

    posts.map((post) => {
        let str = '';

        str = str.concat('---', '\n');
        str = str.concat(`title : "${post.title.rendered.replace(/["]+/g, "'")}"`, '\n');
        str = str.concat(`description : "${post.excerpt.rendered.replace(/["]+/g, "'")}"`, '\n');
        str = str.concat('---', '\n\n');


        // str = str.concat(`Author: ${post.author}`, '\n\n');
        // str = str.concat(`Date: ${post.date}`, '\n\n');
        // str = str.concat(`${post.content.rendered}`);
        const filteredText = filterText(post.content.rendered);
        str = str.concat(filteredText);

        const filepath = path.join('./blog', post.slug + '.md');
        fs.ensureDirSync(path.dirname(filepath));
        fs.writeFileSync(filepath, str);
    });

}

function filterText(baseString: string): string {
    let str = baseString;


    // replace p tags
    str = str.replace(/<p.*?>([\w\W]*?)<[\/]p>/g, '\n$1\n');

    // replace img tags
    // str = filterImageTag(str);


    return str;

    function filterImageTag(baseString: string): string {
        let filtered_str = baseString;
        // filtered_str = filtered_str.replace(/<img.+src=([\w\W]+?)[\/]?>/g, '![]($1)');
        // filtered_str = filtered_str.replace(/<img.+src=([\w\W]+?)[\/]?>/g, '![]($1)');
        filtered_str = filtered_str.replace(/<img.+?src=['"](htt.+?)['"].+?[\/]?>/g, '\n![]($1)\n');
        return filtered_str;
    }
}

interface IPost {
    author: number;
    categories: number[];
    content: {
        protected: boolean;
        rendered: string;
    }
    date: string;
    date_gmt: string;
    excerpt: {
        protected: boolean;
        rendered: string;
    }
    modified: string;
    modified_gmt: string;
    title: {
        rendered: string;
    }
    slug: string;
    link: string;
    type: 'post';
}
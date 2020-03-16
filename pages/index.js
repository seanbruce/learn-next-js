import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

export default function Index() {
    return (
        <Layout>
            <p>Hello Next.js</p>
            <ul>
                <PostLink id="Hello Next.js" />
                <PostLink id="Learn Next.js is awesome" />
                <PostLink id="Deploy apps with Zeit" />
            </ul>
        </Layout>
    );
}
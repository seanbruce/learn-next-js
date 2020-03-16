import Link from 'next/link';

const PostLink = props => {
    return (
        <li>
            <Link href="/p/[id]" as={`/p/${props.id}`}>
                <a>{props.id}</a>
            </Link>
        </li>
    )
}

export default PostLink;
import { useParams } from 'react-router-dom';
import PostHeader from '../components/Layout/post-components/PostHeader';
import getRollingData from '../api/getRollingdata';

const data = await getRollingData();

const PostPage = () => {
	const { id } = useParams();
	const [result] = data.results.filter((user) => user.id === Number(id));

	const { name, backgroundColor, backgroundImageURL, messageCount, recentMessages, topReactions } = result;
	return (
		<>
			<PostHeader
				userName={name}
				messageCount={messageCount}
				recentMessage={recentMessages}
				topReactions={topReactions}
			/>
			<div>Post Page</div>
		</>
	);
};

export default PostPage;

import Component from '../../core/Component';
import Comments from '../Comments';
import { html } from '../../helper';
import data from '../../../data.json';
import CommentForm from '../CommentForm/CommentForm';
import './App.css';

export default class App extends Component {
	setup() {
		this.state = {
			currentUser: data.currentUser,
			comments: data.comments,
			id: 5,
		};
	}

	template() {
		return html`
			<div class="app">
				<div class="comments-wrapper"></div>
				<div class="comments-form-wrapper"></div>
			</div>
		`;
	}

	mounted() {
		const $commentsWrapper = document.querySelector('.comments-wrapper');
		const $commentsFormWrapper = document.querySelector('.comments-form-wrapper');

		new Comments($commentsWrapper, { comments: this.state.comments, username: this.state.currentUser.username });
		new CommentForm($commentsFormWrapper, {
			currentUser: this.state.currentUser,
			addComment: this.addComment.bind(this),
		});
	}

	addComment(newComment) {
		this.setState({
			comments: [
				...this.state.comments,
				{
					id: this.state.id++,
					content: newComment,
					createdAt: 'now',
					score: 0,
					user: this.state.currentUser,
					replies: [],
				},
			],
		});
	}
}

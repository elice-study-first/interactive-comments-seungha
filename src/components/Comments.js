import Component from '../core/Component';
import { html } from '../helper';
import Comment from './Comment/Comment';

export default class Comments extends Component {
	template() {
		return html` <ul class="comments-list"></ul> `;
	}

	mounted() {
		const $commentsList = document.querySelector('.comments-list');

		const $comments = this.props.comments.map((comment) => {
			const $li = document.createElement('li');

			new Comment($li, {
				comment,
				isCurrentUser: comment.user.username === this.props.username,
				showModal: this.props.showModal,
			});

			return $li;
		});

		$comments.forEach(($comment) => {
			$commentsList.appendChild($comment);
		});
	}
}

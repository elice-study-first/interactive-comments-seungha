import Component from '../core/Component';
import data from '../../data.json';
import { html } from '../helper';
import Comment from './Comment';

export default class Comments extends Component {
	setup() {
		this.state = {
			comments: data.comments,
		};
	}

	template() {
		return html` <ul class="comments-list"></ul> `;
	}

	mounted() {
		const $commentsList = document.querySelector('.comments-list');

		const $comments = this.state.comments.map((comment) => {
			const $li = document.createElement('li');

			new Comment($li, comment);

			return $li;
		});

		$comments.forEach(($comment) => {
			$commentsList.appendChild($comment);
		});
	}
}

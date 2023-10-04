import Component from '../../core/Component';
import { html } from '../../helper';
import './CommentForm.css';

export default class CommentForm extends Component {
	template() {
		return html`
			<form class="comment-form">
				<div class="comment-form-left">
					<img
						class="user-avatar"
						src="${this.props.currentUser.image.png}"
						alt="user avatar"
					/>
					<textarea
						name="content"
						class="comment-form--content"
					></textarea>
				</div>
				<button
					class="comment-form--button"
					type="submit"
				>
					SEND
				</button>
			</form>
		`;
	}

	setEvent() {
		this.addEvent('submit', '.comment-form', (event) => {
			event.preventDefault();
			const newComment = event.target.elements.content.value;
			this.props.addComment(newComment);
		});

		this.addEvent('keydown', '.comment-form--content', (event) => {
			if (event.key === 'Enter' && !event.shiftKey) {
				const newComment = event.target.value;
				this.props.addComment(newComment);
			}
		});
	}
}

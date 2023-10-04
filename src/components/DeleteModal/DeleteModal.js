import { html } from '../../helper';
import Component from '../../core/Component';
import './DeleteModal.css';

export default class DeleteModal extends Component {
	template() {
		return html`
			<div class="delete-modal--container">
				<div class="delete-modal">
					<h1 class="delete-modal--title">Delete comment</h1>
					<p class="delete-modal--text">
						Are you sure you want to delete this comment? This will remove the comment and can't be undone.
					</p>
					<div class="delete-modal-button--wrapper">
						<button class="delete-modal-button no">NO, CANCEL</button>
						<button class="delete-modal-button yes">YES, DELETE</button>
					</div>
				</div>
			</div>
		`;
	}

	setEvent() {
		this.addEvent('click', '.no', () => {
			this.props.closeModal();
		});

		this.addEvent('click', '.yes', () => {
			this.props.deleteComment(this.props.commentId);
		});
	}
}

import React from "react";
import { Icon } from "@iconify/react";
import { ModalStyles, ModalContent } from "../Styles/Components/ModalStyles";

const Modal = ({
	modal,
	setModal,
	position,
	description,
	stack,
	githubLink,
	site,
}) => {
	return (
		<ModalStyles
			className={modal ? "modal open" : "modal"}
			onClick={() => setModal(false)}
		>
			<ModalContent
				className="modal-content"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div
					className="icon-container"
					style={{ display: "flex", justifyContent: "right" }}
				>
					<Icon
						icon="ci:close-small"
						onClick={() => setModal(false)}
						width={38}
					/>
				</div>
				<h3>{position}</h3>
				<p>{description}</p>
				<h4>{stack}</h4>
				<div className="icons">
					<a href={githubLink}>
						<Icon
							icon="codicon:github-alt"
							style={{ color: "#FAFBF5", marginRight: "1rem" }}
							className="icon"
							width={25}
						/>
					</a>
					<a href={site}>
						<Icon
							icon="foundation:page-export"
							style={{ color: "#FAFBF5" }}
							className="icon"
							width={25}
						/>
					</a>
				</div>
			</ModalContent>
		</ModalStyles>
	);
};

export default Modal;

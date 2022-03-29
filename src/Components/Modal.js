import React from "react";
import { Icon } from "@iconify/react";
import Title from "./Title";

const Modal = ({
	modal,
	setModal,
	title,
	position,
	description,
	stack,
	githubLink,
	site,
}) => {
	return (
		<div
			className={modal ? "modal open" : "modal"}
			onClick={() => setModal(false)}
		>
			<div
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
						width={35}
					/>
				</div>
				<Title title={title}></Title>
				<h3>{position}</h3>
				<p>{description}</p>
				<h4>{stack}</h4>
				<div className="icons">
					<a href={githubLink}>
						<Icon
							icon="codicon:github-alt"
							style={{ color: "#3f3565", marginRight: "1rem" }}
							className="icon"
							width={25}
						/>
					</a>
					<a href={site}>
						<Icon
							icon="foundation:page-export"
							style={{ color: "#3f3565" }}
							className="icon"
							width={25}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Modal;

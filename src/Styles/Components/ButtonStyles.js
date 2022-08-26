import styled from "styled-components";

const ButtonStyles = styled.div`
	a {
		background: ${(props) => props.theme.main};
		color: ${(props) => props.theme.fg};
		border: 1px solid ${(props) => props.theme.fg};
		padding: 15px 25px;
		border-radius: 10px;
		font-size: 16px;
		text-align: center;
		text-decoration: none;
	}
`;

const theme = {
	main: "#678ADB",
	fg: "#FAFAFA",
};

const invertTheme = ({ main, fg }) => ({
	main: fg,
	fg: main,
});

export { ButtonStyles, invertTheme, theme };

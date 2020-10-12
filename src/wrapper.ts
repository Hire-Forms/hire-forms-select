import styled from 'styled-components'

export const Wrapper = styled.div`
	cursor: pointer;
	position: relative;

	& > .input-container {
    	border-bottom: 1px solid #444;
	}

	button {
		background: none;
		border: none;
		width: 10%;
	}

	.input,
	button {
		box-sizing: border-box;
		display: inline-block;
		font-size: 16px;
		height: 24px;
		padding: 0.2em 0;
	}

	.input {
		padding-left: 0.2em;
		width: 90%;
	}

	.hire-options {
		background: #EEE;
		border: 1px solid #CCC;
		box-sizing: border-box;
		list-style: none;
		margin: 0;
		max-height: 20em;
		overflow: auto;
		padding: 0;
		position: absolute;
		width: 100%;
	}

	.hire-options li {
		border-bottom: 2px solid white;
		padding: 0.2em;
	}

	.hire-options li:hover {
		background: #DDD;
		border-bottom: 2px solid #CCC;
	}
`

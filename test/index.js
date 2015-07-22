require('testdom')('<html><body></body></html>');

let React = require("react/addons");
let should = require("should");
let Select = require("../build");

let TestUtils = React.addons.TestUtils;

describe("Hire Forms Select", function() {
	it("Should be a ReactElement", function() {
		TestUtils.isElement(<Select />).should.be.ok();
	});

	it("Should render <Options /> on click", function() {
		let renderedComponent = TestUtils.renderIntoDocument(
			<Select
				options={["monad", "monoid", "functor"]}
				onChange={function() {}}
				/>
		);

		let inputContainer = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			'input-container'
		);

		TestUtils.scryRenderedDOMComponentsWithClass(
			renderedComponent,
			'hire-options'
		).length.should.equal(0);

		TestUtils.Simulate.click(inputContainer);

		TestUtils.scryRenderedDOMComponentsWithClass(
			renderedComponent,
			'hire-options'
		).length.should.equal(1);
	});

	it("Should show a placeholder when value prop is empty", function() {
		let renderedComponent = TestUtils.renderIntoDocument(
			<Select
				options={["monad", "monoid", "functor"]}
				onChange={function() {}}
				placeholder="Select value..."
				/>
		);

		let input = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			'input'
		);

		input.props.className.should.equal("input placeholder");
		input.props.children.should.equal("Select value...")
	});

	it("Should remove the placeholder when a value is selected", function() {
		let renderedComponent = TestUtils.renderIntoDocument(
			<Select
				options={["monad", "monoid", "functor"]}
				onChange={function() {}}
				placeholder="Select value..."
				value="Selected value"
				/>
		);

		let input = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			'input'
		);

		input.props.className.should.equal("input");
		input.props.children.should.equal("Selected value")
	});
});
var jsdom = require("jsdom").jsdom
global.document = jsdom("<html><head><script></script></head><body></body></html>");
global.window = document.defaultView;
global.navigator = window.navigator
global.HTMLElement = window.HTMLElement

require("classlist-polyfill");

let should = require("should");
let Select = require("../build");
let React = require("react/addons");
let TestUtils = React.addons.TestUtils;

describe("Hire Forms Select", function() {
	it("Should be a ReactElement", function() {
		TestUtils.isElement(<Select onChange={function() {}} />).should.be.ok();
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

	it("Should load options from async func", function(done) {
		let getOptions = function(done) {
			done(["monad", "monoid", "functor"]);
		}

		let renderedComponent = TestUtils.renderIntoDocument(
			<Select
				async={getOptions}
				onChange={function() {}}
				/>
		);

		let inputContainer = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			'input-container'
		);

		setTimeout(function() {
			TestUtils.Simulate.click(inputContainer);

			TestUtils.scryRenderedDOMComponentsWithClass(
				renderedComponent,
				'hire-forms-option'
			).length.should.equal(3);

			done();
		}, 50);
	});
});
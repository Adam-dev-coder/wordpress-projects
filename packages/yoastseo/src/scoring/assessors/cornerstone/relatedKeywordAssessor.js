import { inherits } from "util";
import Assessor from "../assessor.js";
import IntroductionKeyword from "../../assessments/seo/IntroductionKeywordAssessment.js";
import KeyphraseLength from "../../assessments/seo/KeyphraseLengthAssessment.js";
import KeyphraseDensityAssessment from "../../assessments/seo/KeywordDensityAssessment.js";
import MetaDescriptionKeyword from "../../assessments/seo/MetaDescriptionKeywordAssessment.js";
import TextCompetingLinks from "../../assessments/seo/TextCompetingLinksAssessment.js";
import FunctionWordsInKeyphrase from "../../assessments/seo/FunctionWordsInKeyphraseAssessment.js";
import ImageKeyphrase from "../../assessments/seo/KeyphraseInImageTextAssessment.js";

/**
 * Creates the Assessor
 *
 * @param {Researcher} researcher    The researcher used for the analysis.
 * @param {Object?} options          The options for this assessor.
 * @param {Function} options.marker  The marker to pass the list of marks to.
 *
 * @constructor
 */
const relatedKeywordAssessor = function( researcher, options ) {
	Assessor.call( this, researcher, options );
	this.type = "cornerstoneRelatedKeywordAssessor";

	this._assessments = [
		new IntroductionKeyword(),
		new KeyphraseLength( { isRelatedKeyphrase: true } ),
		new KeyphraseDensityAssessment(),
		new MetaDescriptionKeyword(),
		new TextCompetingLinks(),
		new FunctionWordsInKeyphrase(),
		new ImageKeyphrase( {
			scores: {
				withAltNonKeyword: 3,
				withAlt: 3,
				noAlt: 3,
			},
		} ),
	];
};

inherits( relatedKeywordAssessor, Assessor );

export default relatedKeywordAssessor;

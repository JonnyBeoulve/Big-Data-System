import React, { Component } from 'react';

import Widget04 from './Widget04';

/*= =====================================================================
// This will display a list of keywords that the user has input in the
// Add Keyword section.
====================================================================== */
class AnalysisKeywords extends Component {

  /*= =====================================================================
  // Placeholder function.
  ====================================================================== */
  hello() {
    console.log("Hello!");
  }

  render() {
    const keywords = this.props.allKeywords;

    return (
      <div className="animated fadeIn">
        <div className="keywords-flexbox">
            { keywords.map((keyword) => (<Widget04
                className="widget-button"
                icon="icon-speedometer"
                color="info"
                header={keyword.keyword}
                value="25"
                invert
                onClick={this.hello}
              >
              Keyword
              </Widget04>
            ))}
        </div>
      </div>
    );
  }
}

export default AnalysisKeywords;

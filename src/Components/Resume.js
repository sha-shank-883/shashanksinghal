// import React, { Component } from 'react';
// import { logger } from 'logging-library';
// import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';

// const file = 'my-resume-shashank_singhal.docx'
// const type = 'docx'

// class MyComponent extends Component {
//   render() {
//     return (
//       <FileViewer
//         fileType={type}
//         filePath={file}
//         errorComponent={CustomErrorComponent}
//         onError={this.onError}/>
    
//     );
//   }

//   onError(e) {
//     logger.logError(e, 'error in file-viewer');
//   }
// }

// export default  MyComponent;
import { DocViewerRenderers } from "react-doc-viewer";
import DocViewer from "react-doc-viewer";
 
function Resume() {
  const docs = [
    { uri: "https://docs.google.com/document/d/1NPdMTcOUUJR7eQCqnnlJ4BFIP4wSk-JE/edit" },
    { uri: require("../Resume.docx") }, // Local File
  ];
 
  return <DocViewer documents={docs} 
  pluginRenderers={DocViewerRenderers}
  
  />;
}

export default  Resume 
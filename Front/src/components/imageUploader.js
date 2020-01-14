
// import React from "react";
// import ReactDOM from "react-dom";

// class UploadPreview extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { file: 'http://nebula.wsimg.com/a15c5229c6837f9262fcf55dca3bed0c?AccessKeyId=3DE6952AFDB613E1FE46&disposition=0&alloworigin=1' };
//       this.onChange = this.onChange.bind(this);
//     //   this.resetFile = this.resetFile.bind(this);
//     }
//     onChange(event) {
//       const newURL=URL.createObjectURL(event.target.files[0]);
//       this.setState({
//         file: newURL
//       });
//     }
    
//     // componentDidMount() {
//     //     this.setState({
//     //       file:newURL 
//     //     })
//     //   }
//     // onChange = (event) => {
//     //     if (event.target.files && event.target.files[0]) {
//     //       let reader = new FileReader();
//     //       reader.onload = (e) => {
//     //         this.setState({file: e.target.result});
//     //       };
//     //       reader.readAsDataURL(event.target.files[0]);
//     //     }
//     //   }


//     // resetFile(event) {
//     //   event.preventDefault();
//     //   this.setState({ file: null });
//     // }
//     render() {
//       return (
// <div className="last-section-box">
//         <h2>Picture of the week</h2>
//         <img src={this.state.file} style={{borderRadius: '5px',height: '300px',width: '440px'}}/>
//         <div><p className='featuresdescription'>Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated. 
// </p></div>
//         <br/> <br/> <br/> <br/> <div style={{textAlign:'right'}}>

//           <input type="file" onChange={this.onChange} />
//           {/* {this.state.file && (
//             <div style={{ textAlign: "center" }}>
//               <button onClick={this.resetFile}>Remove File</button>
//             </div>
//           )} */}
        
        
//           </div>
// </div>




//       );
//     }
//   }
//   export default UploadPreview ;


import React from 'react';
const UploadPreview = () => {
  const [value, setValue] = React.useState(
    localStorage.getItem('myValueInLocalStorage') || ''
  );
  React.useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);


  const onChange = event => setValue(URL.createObjectURL(event.target.files[0]));
      return (
<div className="last-section-box">
        <h2>Picture of the week</h2>
        <img src={value} style={{borderRadius: '5px',height: '300px',width: '440px'}}/>
        <div><p className='featuresdescription'>Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated. 
</p></div>
        <br/> <br/> <br/> <br/> <div style={{textAlign:'right'}}>

          <input type="file" onChange={onChange} />
        
        
          </div>
</div>




      );
};
export default UploadPreview;
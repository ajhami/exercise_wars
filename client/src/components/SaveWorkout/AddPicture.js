
import { Container, Row, Col, Button } from "reactstrap";
import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';


class AddPicture extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile: null,
		}
		this.singleFileUploadHandler = this.singleFileUploadHandler.bind(this);
	}

	singleFileChangedHandler = (event) => {
		this.setState({
			selectedFile: event.target.files[0]
		});
	};

	singleFileUploadHandler = (event) => {
		event.stopPropagation();
		const data = new FormData();
		// If file selected
		if (this.state.selectedFile) {
			data.append('profileImage', this.state.selectedFile, this.state.selectedFile.name);
			axios.post('/api/profile/profile-img-upload', data, {
				headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				}
			})
				.then((response) => {
					if (200 === response.status) {
						// If file size is larger than expected.
						if (response.data.error) {
							if ('LIMIT_FILE_SIZE' === response.data.error.code) {
								this.ocShowAlert('Max size: 200MB', 'red');
							} else {
								console.log(response.data);
								// If not the given file type
								this.ocShowAlert(response.data.error, 'red');
							}
						} else {
							// Success
							let fileName = response.data;
							console.log('filedata', fileName);
							this.props.onImageChange(fileName.location)
							this.ocShowAlert('File Uploaded', '#3089cf');
						}
					}
				}).catch((error) => {
					// If another error
					console.log(error)
					this.ocShowAlert(error, 'red');
				});
		} else {
			// if file not selected throw error
			this.ocShowAlert('Please upload file', 'red');
		}
	};

	// ShowAlert Function
	ocShowAlert = (message, background = '#3089cf') => {
		let alertContainer = document.querySelector('#oc-alert-container'),
			alertEl = document.createElement('div'),
			textNode = document.createTextNode(message);
		alertEl.setAttribute('class', 'oc-alert-pop-up');
		$(alertEl).css('background', background);
		alertEl.appendChild(textNode);
		alertContainer.appendChild(alertEl);
		setTimeout(function () {
			$(alertEl).fadeOut('slow');
			$(alertEl).remove();
		}, 3000);
	};

	render() {
		return (
			<div className="container">
				{/* For Alert box*/}
				<div id="oc-alert-container"></div>
				{/* Single File Upload*/}
				<div className="card border-light mb-3 mt-5"
					style={{
						minHeight: "100px",
						minWidth: "200px",
						boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)'
					}}>
					<div className="card-header">
						<h5 className="text-muted" style={{ marginLeft: '12px' }}>Upload an image/video ( Max 200MB )</h5>
					</div>
					<Container>
						<div className="card-body">
							<Row>
								<Col sm={6}>
									<input
										type="file"
										onChange={this.singleFileChangedHandler}
										/*outline */color="secondary"
										style={{ color: "#D90429", borderColor: "#D90429", padding: "4px 8px", fontSize: "14px" }} />
								</Col>
								<Col sm={6}>
									<div className="">
										<Button
											className="btn btn-info float-right"
											outline color="secondary"
											style={{ color: "#D90429", borderColor: "#D90429", padding: "4px 8px", fontSize: "14px" }}
											id="imageUploadButton"
											onClick={this.singleFileUploadHandler}>Upload!</Button>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
			</div>
		);
	}
}

export default AddPicture;
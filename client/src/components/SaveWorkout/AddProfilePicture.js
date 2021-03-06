
import { Container, Row, Col, Button } from "reactstrap";
import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import "./style.css";


class AddProfilePicture extends Component {
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
								this.uploadAlert('Max size: 200MB', 'red');
							} else {
								// If not the given file type
								this.uploadAlert(response.data.error, 'red');
							}
						} else {
							// Success
							let fileName = response.data;
							this.props.onImageChange(fileName.location)
							this.uploadAlert('File Uploaded', '#3089cf');
						}
					}
				}).catch((error) => {
					// If another error
					console.log(error)
					this.uploadAlert(error, 'red');
				});
		} else {
			// if file not selected throw error
			this.uploadAlert('Please upload file', 'red');
		}
	};

	// ShowAlert Function
	uploadAlert = (message, background = '#3089cf') => {
		let alertContainer = document.querySelector('#alert-container'),
			alertEl = document.createElement('div'),
			textNode = document.createTextNode(message);
		alertEl.setAttribute('class', 'alert-pop-up');
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
				<div id="alert-container"></div>
				{/* Single File Upload*/}
				<div className="card border-light mb-3 mt-5"
					style={{
						minHeight: "100px",
						minWidth: "200px",
						boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)'
					}}>
					<div className="card-header">
						<h5 className="text-muted" style={{ marginLeft: '12px' }}>Upload a Profile Picture</h5>
					</div>
					<div className="img-container">
						<img id="profile_image_upload" value={this.props.value} src={this.props.value} />
					</div>
					<Container>
						<div className="card-body">
							<Row>
								<Col lg={6}>
									<input
                                        className="file_uploader"
										type="file"
										onChange={this.singleFileChangedHandler}
										/*outline */ color="secondary"
										style={{ color: "#D90429", borderColor: "#D90429", padding: "4px 8px", fontSize: "14px" }} />
								</Col>
								<Col lg={6}>
									<div className="">
										<Button
											className="btn btn-info save_img_btn"
											outline color="secondary"
											style={{ color: "#D90429", borderColor: "#D90429", padding: "4px 8px", fontSize: "14px" }}
											id="imageUploadButton"
											onClick={this.singleFileUploadHandler}>Save Image</Button>
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

export default AddProfilePicture;

//reference Imran Sayed for AWS post validation and adapted https://medium.com/@imranhsayed/how-to-create-a-user-and-bucket-amazon-web-services-aws-40631416e65
import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';




class MultipleImagesShow extends React.Component{

    constructor(props){
        super()
        this.state = {
            name : '',
            description : '',
            image : '',
            id : ''
        }
    }

handleImage = (id) => {
    console.log(id)
    this.setState({
        image : this.props.images.find(img => img.id == id),
        id : id
    })
}

handleForm = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
        name : this.state.name,
        description : this.state.description
    }
    console.log(formData, this.state.id)
    this.props.handleSubmit(this.state.id, formData)
    // const redirect = () => this.props.history.push('/images-without-data')
    // redirect()
    this.setState({
        name : '',
        description : '',
        image : '',
        id : ''
    })
}

    render(){
        return(
            <div>{console.log(this.props.image)}
                <div className = "container" >
                    {
                        this.props.images && this.props.images.map(img => {
                            return (
                                <div>
                                   <div className = "card" >
                                   <img src = {img.download_url} onClick = {() => this.handleImage(img.id)} key = {img.id}  data-toggle="modal"  data-target=".bd-example-modal-xl"  />
                                    {
                                        !this.props.handleSubmit && (
                                            <div className = "text" >
                                                {
                                                     img.name && <h3>{img.name}</h3>
                                                    //  img.description && <p>{img.name}</p>
                                                }
                                                {
                                                    img.description && <p>{img.description}</p>
                                                }
                                            </div>
                                        )
                                    }
                                   </div>
                                    {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Extra large modal</button> */}

                                {
                                    this.props.handleSubmit && (
                                        <div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-xl" role="document">
                                            <div className="modal-content">
                                                <div className = "row" > 
                                                        <div className = "col-md-8">
                                                        <img src = {this.state.image && this.state.image.download_url} ></img>
                                                        </div>
                                                        <div className = "col-md-4">
                                                        <Form>
                                                        <Label for="name">Email</Label>
                                                        <Input type="name" name="name" id="name" value = {this.state.name} onChange = {this.handleForm} placeholder="with a placeholder" />
                                                        <br></br>
                                                        <Label for="description">Email</Label>
                                                        <Input type="description" name="description" id="description" value = {this.state.description} onChange = {this.handleForm} placeholder="with a placeholder" />
                                                        <br></br>
                                                        <Button color = "primary" onClick = {this.handleSubmit} data-dismiss="modal" >Submit</Button>{' '}
                                                        </Form>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}



export default MultipleImagesShow
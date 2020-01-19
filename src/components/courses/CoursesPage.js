import React from 'react';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';
import {bindActionCreators} from 'redux';

import * as courseActions from '../../redux/actions/CourseActions'; 

class CoursesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            course: {
                title: ""
            }
        };
    }

    handleInput = (event)=>{
        const course = {...this.state.course, title: event.target.value};
        this.setState({course: course});
    }

    handleSubmit= (event)=>{
        event.preventDefault();
        //this.props.createCourse(this.state.course);
        this.props.actions.createCourse(this.state.course);
    }

    render(){
       return (
           <div>    
                <form onSubmit={this.handleSubmit}>
                    <h2>CoursesPage</h2>
                    <h4>Add Course</h4>
                    <input type="text" value={this.state.course.title} onChange={this.handleInput}/>
                    <input type="submit" value="Save"/>
                </form>
                { 
                    this.props.courses.map( course=>(
                        <div key={course.title}>{course.title}</div>
                    ))
                }
           </div>
        );
   }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    //createCourse : PropTypes.func.isRequired,
    actions : PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return{
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
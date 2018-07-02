import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import ErrorComponent from './ErrorComponent'
import NoResultsComponent from './NoResultsComponent'
import dummyImage from '../../images/dummyimage.png'

import moment from 'moment'

//Styling using material-ui and css
import Card, { CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import {withStyles} from 'material-ui/styles';
import '../css/SessionsOverview.css'

const styles = theme => ({
    nameStyle: {
      fontSize:'25px'
    },

    detailsStyle:{
      fontSize:'16px',
      margin:'10px',
      fontFamily:'Sans Serif'
    },

    nextDayButton:{
       marginLeft:'1100px'
    },

    prevDayButton:{
        marginLeft:'800px'
        
    },

    outerPaper:{
        backgroundColor:"#ffe9ec",
        textAlign: "center",
        minWidth:'100px',
        minHeight:'700px',
        maxWidth:'2000px',
        margin:'20px'
    }
})


class SessionsOverview extends Component {

     //setting initial values to component local state
     state={
             selectedDate:"2018-06-02",
             selectedGroup:"All"
           }
    
    
    //getting the props and calling the action creator in case of no sessionitems 
    componentDidMount() {

        const {sessionsItems, getSessions} = this.props;
        if (!sessionsItems) 
        {
            getSessions(this.state.selectedDate);
        }

    }


  // function to handle change made in selected date . It also calls the action creator with the selected date
    handleDateChange=(event)=>{
       
       this.setState({selectedDate:event.target.value})
       this.props.getSessions(event.target.value);
    }


   //function to handle changes in present status , gets event and id of the selected session as input arguements, dispatches an action to update the status
    handlePresentStatus=(event,sessionId)=>{

     let selectedIndex=0
     this.props.sessionItems.map((eachSession,index)=>{
         if(eachSession.id===sessionId)
         {
             selectedIndex=index;
         }
         return selectedIndex
      }
    )
     
    this.props.updatePresence(selectedIndex,event.currentTarget.value)
   }


    //function to get previous day and fetch sessions of that day
   getPrevDay=()=>{

        let currentSelectedDate = this.state.selectedDate;
        currentSelectedDate = moment(currentSelectedDate).add(-1, 'days').format("YYYY-MM-DD");
        this.setState({
            selectedDate:currentSelectedDate
        })
        this.props.getSessions(currentSelectedDate);
        
   }

    
   //function to get next day and fetch sessions of that day
   getNextDay=()=>{

      let currentSelectedDate = new Date(this.state.selectedDate);
      currentSelectedDate = moment(currentSelectedDate).add(+1, 'days').format("YYYY-MM-DD");
      this.setState({
          selectedDate:currentSelectedDate
        })
      this.props.getSessions(currentSelectedDate);
   }
   
   //function to set the selected group to filter in component local state defined earlier
   handleGroupChange=(event)=>{
      this.setState({
          selectedGroup:event.target.value
        })
   }
    

    //function to render each session, takes eachsession of a day as input 
    renderSession=(eachSession)=>{
         
        const {classes}=this.props;

        return(

                 <Card key={eachSession.id} className="each-session-card">
                  <CardContent className="session-content">
     
                         <Typography className={classes.nameStyle}>
                          {eachSession.child.name}
                          </Typography>
     
                          <Typography>
                          <img className="child-image" alt="child" src={eachSession.child.avatar?eachSession.child.avatar:dummyImage}/>
                          </Typography>
     
                         <Typography className={classes.detailsStyle}>
                         Start TIme: {eachSession.start_time}
                         </Typography>
     
                          <Typography className={classes.detailsStyle}>
                          End TIme: {eachSession.end_time}
                          </Typography>
     
                          <Typography className={classes.detailsStyle}>
                         Group Name: {eachSession.group.name}
                          </Typography>
     
                          <Typography className={classes.detailsStyle}>
                         Presence Status: {eachSession.presence}
                          </Typography>
     
                         <Button
                         variant="raised"
                         color="secondary"
                         type="submit"
                         value={eachSession.presence}
                         onClick={(event)=>this.handlePresentStatus(event,eachSession.id)}
                         className="presence-status">
                         Update Present Status
                         </Button>
     
                  </CardContent>
                 </Card>

            )
    }

    //renders all details to the screen
    render() {

        
        const {sessionItems,classes} = this.props;
  
        let {filteredSessions}=this.props

        //filtering the sessions based on group name
        if((this.state.selectedGroup!=="All")&&(sessionItems))
            filteredSessions=sessionItems.filter(eachSession=>{return(eachSession.group.name===this.state.selectedGroup)})
        
        else if((this.state.selectedGroup==="All")&&(sessionItems))
            filteredSessions=sessionItems  
        
        return (
                 <div>
                     <h1 className="sessions-overview">Sessions Overview</h1>
         
                     <Button
                       variant="raised"
                       color="secondary"
                       type="submit"
                       onClick={this.getPrevDay}
                       className={classes.prevDayButton}>
                       Previous Day
                     </Button>
         
                     <TextField
                       id="date"
                       label="Choose a date"
                       type="date"
                       value={this.state.selectedDate}
                       className={classes.button}
                       onChange={this.handleDateChange}/>
         
                     <Button
                       variant="raised"
                       color="secondary"
                       type="submit"
                       onClick={this.getNextDay}
                       className={classes.nextDayButton}>
                       Next Day
                     </Button>
     
                      <p className="filter-group">Select group:</p>
                      <select required
                               className="filter-group"  name="type" id="type"
                               onChange={ this.handleGroupChange }>
     
                               <option value="All">All</option>
                               <option value="Group 1">Group 1</option>
                               <option value="Group 2">Group 2</option>
                               <option value="Group 3">Group 3</option>
                               <option value="Group 4">Group 4</option>
                              
                     </select>
                      
                      {/* checking if filteredsessions has items in it, if no items , then call NoResultsComponent , if due to 
                      server error filteredsessions is undefined, then call ErrorComponent */}
                     <Paper className={classes.outerPaper}>
     
                      {(filteredSessions)?((filteredSessions.length!==0)?filteredSessions.map(eachSession=>this.renderSession(eachSession)):<NoResultsComponent/>): <ErrorComponent/>}
                     
                     <br/>
                     </Paper>
     
                 </div>
                )
        }
}

SessionsOverview.propTypes = {
    sessionsItems: PropTypes.array,
    getSessions: PropTypes.func.isRequired,
    updatePresence: PropTypes.func.isRequired
};

export default withStyles(styles)(SessionsOverview)
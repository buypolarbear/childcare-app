import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import ErrorComponent from './ErrorComponent'
import NoResultsComponent from './NoResultsComponent'
import dummyimage from '../../images/dummyimage.png'

import moment from 'moment'

//Styling using material-ui and css
import Card, { CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import '../css/SessionsOverview.css'

class SessionsOverview extends Component {

    constructor()
    {
        super()

        //setting initial values to component local state
        this.state={
                     selecteddate:"2018-06-02",
                     selectedgroup:"All"
                    }
    }
    
    //getting the props and calling the action creator in case of no sessionitems 
    componentDidMount() {

        const {sessionsItems, getSessions} = this.props;
        if (!sessionsItems) 
        {
            getSessions(this.state.selecteddate);
        }

    }


  // function to handle change made in selected date . It also calls the action creator with the selected date
    handleDateChange=(event)=>{
       
       this.setState({selecteddate:event.target.value})
       this.props.getSessions(event.target.value);
    }


   //function to handle changes in present status , gets event and id of the selected session as input arguements, dispatches an action to update the status
    handlePresentStatus=(event,sessionId)=>{

     let selectedindex=0
     this.props.sessionItems.map((eachsession,index)=>{
         if(eachsession.id===sessionId)
         {
             selectedindex=index;
         }
         return selectedindex
      }
    )
     
    this.props.updatePresence(selectedindex,event.currentTarget.value)
   }


    //function to get previous day and fetch sessions of that day
   getPrevDay=()=>{

        let currentSelectedDate = new Date(this.state.selecteddate);
        currentSelectedDate = moment(currentSelectedDate).add(-1, 'days').format("YYYY-MM-DD");
        this.setState({
            selecteddate:currentSelectedDate
        })
        this.props.getSessions(currentSelectedDate);
        
   }

    
   //function to get next day and fetch sessions of that day
   getNextDay=()=>{

      let currentSelectedDate = new Date(this.state.selecteddate);
      currentSelectedDate = moment(currentSelectedDate).add(+1, 'days').format("YYYY-MM-DD");
      this.setState({
          selecteddate:currentSelectedDate
        })
      this.props.getSessions(currentSelectedDate);
   }
   
   //function to set the selected group to filter in component local state defined earlier
   handleGroupChange=(event)=>{
      this.setState({
          selectedgroup:event.target.value
        })
   }
    

    //function to render each session, takes eachsession of a day as input 
    renderSession=(eachsession)=>{

        return(

                 <Card key={eachsession.id} className="each-session-card">
                  <CardContent className="session-content">
     
                         <Typography>
                          Name:{eachsession.child.name}
                          </Typography>
     
                          <Typography>
                          <img className="child-image" alt="child" src={eachsession.child.avatar?eachsession.child.avatar:dummyimage}/>
                          </Typography>
     
                         <Typography>
                         Start TIme: {eachsession.start_time}
                         </Typography>
     
                          <Typography>
                          End TIme: {eachsession.end_time}
                          </Typography>
     
                          <Typography>
                         Group Name: {eachsession.group.name}
                          </Typography>
     
                          <Typography>
                         Present Status: {eachsession.presence}
                          </Typography>
     
                         <Button
                         variant="raised"
                         color="secondary"
                         type="submit"
                         value={eachsession.presence}
                         onClick={(event)=>this.handlePresentStatus(event,eachsession.id)}
                         className="present-status">
                         Update Present Status
                         </Button>
     
                  </CardContent>
                 </Card>

            )
    }

    //renders all details to the screen
    render() {

        
        const {sessionItems} = this.props;
  
        let {filteredSessions}=this.props

        //filtering the sessions based on group name
        if((this.state.selectedgroup!=="All")&&(sessionItems))
            filteredSessions=sessionItems.filter(eachsession=>{return(eachsession.group.name===this.state.selectedgroup)})
        
        else if((this.state.selectedgroup==="All")&&(sessionItems))
            filteredSessions=sessionItems  
        
        return (
                 <div>
                     <h1 className="sessions-overview">Sessions Overview</h1>
         
                     <Button
                       variant="raised"
                       color="secondary"
                       type="submit"
                       onClick={this.getPrevDay}
                       className="previous-day">
                       Previous Day
                     </Button>
         
                     <TextField
                       id="date"
                       label="Choose a date"
                       type="date"
                       value={this.state.selecteddate}
                       onChange={this.handleDateChange}/>
         
                     <Button
                       variant="raised"
                       color="secondary"
                       type="submit"
                       onClick={this.getNextDay}
                       className="next-day">
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
                     <Paper className="outer-paper">
     
                      {(filteredSessions)?((filteredSessions.length!==0)?filteredSessions.map(eachsession=>this.renderSession(eachsession)):<NoResultsComponent/>): <ErrorComponent/>}
                     
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

export default SessionsOverview;
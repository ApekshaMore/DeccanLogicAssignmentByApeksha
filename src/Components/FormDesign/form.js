import React, { Component } from 'react';
import styles from './form.module.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import img from '../../Assets/upload.png'
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { FormControlLabel } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import HelpIcon from '@material-ui/icons/Help';
// import SelectBox from './Components/SelectBox/selectbox';

class formDesign extends Component {
    state = {
        EventOption: '',
        CategoriesOption:'',
        cities : ['Pune','Mumbai','Thane','Pimpri Chinchawad','Nashik','Banglore',
                   'Hyderabad','Kolkata','Indore','Lucknow','Jaipur','Agra', 'Patna'],
        // eventError : '',
        // titleError : '',
        // categoriesError : '',
        // summaryError  : '',
        // registrationError: '',
        // onlineLinkError : '',
        // startDateError : '',
        // startTimeError : '',
        // endDateError : '',
        // endTimeError : '',      
        // timezoneError : ''
        title:'',
        summary:'',
        registration:'',
        onlineLink:'',
        isValidTitle: true,
        isValidSummary: true,
        isValidReg: true,
        isValidLink: true,
    }
     

    validate = () => {
        let eventError = '';
        let titleError = '';
        let categoriesError = '';
        let summaryError  = '';
        let registrationError = '';
        let onlineLinkError = '';
        let startDateError = '';
        let startTimeError = '';
        let endDateError = '';
        let endTimeError = '';   
        let timezoneError = '';
        // console.log(this.state.title.value);
        // console.log(this.state.event);
        if (this.state.event == '' ||  this.state.event == null) {
            eventError = "Event cannot be blank";
        }
        if (this.state.title == '' ||  this.state.title == null)  {
            titleError = "Title cannot be blank";
            this.setState({isValid:false})
        }
        if (this.state.categories == '' ||  this.state.categories == null)  {
            categoriesError = "Categories cannot be blank";
        }
        if (this.state.summary == '' ||  this.state.summary == null)  {
            summaryError = "Summary cannot be blank";
        }
        if (this.state.registration == '' ||  this.state.registration == null)  {
            registrationError = "Registration cannot be blank";
        }
        if (this.state.onlineLink == '' ||  this.state.onlineLink == null)  {
            onlineLinkError = "Online Link cannot be blank";
        }
        if (this.state.startDate == '' ||  this.state.startDate == null)  {
            startDateError = "Start Date cannot be blank";
        }
        if (this.state.startTime == '' ||  this.state.startTime == null)  {
            startTimeError = "Start Time cannot be blank";
        }
        if (this.state.endDate == '' ||  this.state.endDate == null)  {
            endDateError = "End Date cannot be blank";
        }
        if (this.state.endTime == '' ||  this.state.endTime == null)  {
            endTimeError = "End Time cannot be blank";
        }
        if (this.state.timezone == '' ||  this.state.timezone == null)  {
            timezoneError = "Timezone cannot be blank";
        }
       
    
        if (eventError || titleError || categoriesError || titleError || summaryError || registrationError || onlineLinkError || startDateError || startTimeError || endDateError || endTimeError || timezoneError) {
          this.setState({ eventError,categoriesError,summaryError ,titleError, registrationError , onlineLinkError ,startDateError , startTimeError , endDateError , endTimeError , timezoneError});
          return false;
        }
    
        return true;
      };

      initialState = ()=>{
        let eventError = '';
        let titleError = '';
        let categoriesError = '';
        let summaryError  = '';
        let registrationError = '';
        let onlineLinkError = '';
        let startDateError = '';
        let startTimeError = '';
        let endDateError = '';
        let endTimeError = '';   
        let timezoneError = '';
        let event ='';
        let title= '';
        let summary= '';
        let registration= '';
        let onlineLink= '';
        let startDate= '';
        let startTime= '';
        let endDate= '';
        let endTime= '';
        let timezone= '';
        console.log("in intitialState");
        this.setState({ event ,title , summary ,registration , onlineLink , startTime, startDate , endTime , endDate, timezone, eventError, titleError,categoriesError,summaryError , registrationError , onlineLinkError ,startDateError , startTimeError , endDateError , endTimeError , timezoneError});

      }


    handleSubmit = event => {
        
        // const isValid = this.validate();
        // if (isValid) {
        //   console.log(this.state);
          // clear form
        // this.initialState();
        // if(!this.state.isValidTitle && !this.state.isValidSummary && !this.state.isValidReg && !this.state.isValidLink ){
        //     alert('Please enter all the required fields')
        // }
        if(this.state.title === '' || this.state.summary === '' || this.state.registration === '' || this.state.onlineLink === ''){
            this.setState({isValidTitle:false, isValidLink: false, isValidSummary: false, isValidReg:false})
        }else{
            this.setState({isValidTitle:true, isValidSummary:true, isValidLink:true, isValidReg:true})
            alert('Data Valid')
        }
        event.preventDefault();
        // }
      };

    handleChangeTitle = event => {
        if(event.target.value === ""){
            this.setState({isValidTitle:false});
        }
        else{
            this.setState({isValidTitle:true});
        }
        this.setState({
          [event.target.name]: event.target.value
        });
      };
      handleChangeSummary = event => {
        if(event.target.value === ""){
            this.setState({isValidSummary:false});
        }
        else{
            this.setState({isValidSummary:true});
        }
        this.setState({
          [event.target.name]: event.target.value
        });
      };
      handleChangeRegistration = event => {
        if(event.target.value === ""){
            this.setState({isValidReg:false});
        }
        else{
            this.setState({isValidReg:true});
        }
        this.setState({
          [event.target.name]: event.target.value
        });
      };
      handleChangeOnlineLink = event => {
        if(event.target.value === ""){
            this.setState({isValidLink:false});
        }
        else{
            this.setState({isValidLink:true});
        }
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    handleChangeCategories=(event)=>{
        this.setState({CategoriesOption:event.target.value});
    }

    handleChangeEvent=(event)=>{
        this.setState({EventOption:event.target.value});
    }
   

    render() { 
        console.log(this.state);
        return ( 
            <form onSubmit={this.handleSubmit}>
            <Container maxWidth="lg">
            <div className="row">
                <div className="col">
                    <h4 className={styles.heading}>Create Event</h4> 
                </div>
                <div className="col">
           
                    <button id={styles.btn1} type='submit' className="btn btn-sm m-10">Create</button>
                    <button id={styles.btn2} type='reset' className={"btn btn-light btn-sm"}>Cancel</button>
                </div>              
            </div>
            <hr/>
            </Container>
            <Container maxWidth="sm">

                <FormControl style={{width:'100%'}}>
                    <InputLabel id="demo-controlled-open-select-label">Add Event in*</InputLabel>
                    <Select placeholder="Select..."
                    labelId="demo-controlled-open-select-label"
                    id={styles.title}
                    name = "event"
                    // open={open}
                    // value={age}
                    onChange={this.handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'o1'}>Option 1</MenuItem>
                    <MenuItem value={'o2'}>Option 2</MenuItem>
                    <MenuItem value={'o3'}>Option 3</MenuItem>
                    </Select>
                </FormControl>
                <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.eventError}
                </div>

                <div style={{margin : '0 3%'}}>
                    <div className="row">
                    <div>
                    <label className={styles.newbtn}>
                        <img id={styles.blah} src={img} ></img>
                        <input id={styles.pic} className='pis' type="file"></input>
                    </label>    
                    </div>
                     </div>
                </div>

                <TextField id="standard-basic"  name="title" onChange={this.handleChangeTitle} style={ styles} label="Title *" helperText="(0/250)" style={{width:'100%', paddingTop:'2%'}} />
                  { !this.state.isValidTitle && 
                    <div style={{ fontSize: 12, color: "red" }}>
                        <p>Title should not be empty</p>
                    </div>
                   }                 
                
                <FormControl style={{width:'100%'}}>
                    <InputLabel id="demo-controlled-open-select-label">Categories*</InputLabel>
                    <Select placeholder="Select..."
                    labelId="demo-controlled-open-select-label"
                    id={styles.title}
                    name ="categories"
                    // open={open}
                    // value={age}
                    onChange={this.handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'o1'}>Option 1</MenuItem>
                    <MenuItem value={'o2'}>Option 2</MenuItem>
                    <MenuItem value={'o3'}>Option 3</MenuItem>
                    </Select>
                </FormControl>
                <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.categoriesError}
                </div>

                <TextField id="standard-basic"  name="summary" onChange={this.handleChangeSummary} style={ styles} label="Short Summary*" helperText="(0/500)" style={{width:'100%', paddingTop:'2%'}} />
                { !this.state.isValidSummary && 
                    <div style={{ fontSize: 12, color: "red" }}>
                        <p>summary should not be empty</p>
                    </div>
                   }

                <FormLabel style={{marginTop:'4%',color:'black'}}>Type : Public</FormLabel>

                <TextField id="standard-basic"  name="registration" onChange={this.handleChangeRegistration} style={ styles} label="Registration Site" helperText="(0/1024)" style={{width:'100%', paddingTop:'2%'}} />
                { !this.state.isValidReg && 
                    <div style={{ fontSize: 12, color: "red" }}>
                        <p>Registration should not be empty</p>
                    </div>
                   }

                <Grid container  style={{marginTop:'4%'}}>
                    <Grid item xs>
                    <FormLabel style={{color:'black'}}>Is this a virtual event?</FormLabel>
                    </Grid>
                    <Grid item xs>
                    <FormControlLabel control={<Switch // checked={state.checkedB} // onChange={handleChange}
                        name="virualEvent"
                        color="primary"
                        onChange={this.handleChange}
                        />
                        }                  
                     />
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
            
                <TextField id="standard-basic"  name="onlineLink" onChange={this.handleChangeOnlineLink} style={ styles} label="Online Link *" style={{width:'100%', paddingTop:'4%'}} />
                { !this.state.isValidLink && 
                    <div style={{ fontSize: 12, color: "red" }}>
                        <p>online Link should not be empty</p>
                    </div>
                   }

                <Grid container spacing={2}>             
                    <Grid item xs={8}>
                       
                         {/* <ul>{this.state.names.map(val=> <li key={val}>{val}</li>)}</ul> */}
                        <InputLabel id="demo-mutiple-name-label" style={{marginTop:'10%'}}>Select Timezone *</InputLabel>
                        <Select
                            labelId="demo-mutiple-name-label"
                            id="demo-mutiple-name"
                            onChange={this.handleChange}
                            name="timezone"
                            style={{width:'100%'}}
                            // multiple
                            // value={personName}
                            // onChange={handleChange}
                            // input={<Input />}
                            // MenuProps={MenuProps}
                        >
                        {this.state.cities.map((name) => (
                            <MenuItem key={name} value={name} >
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.timezoneError}
                        </div>
                    </Grid>
                    <Grid item xs>
                    <FormLabel  className="font-weight-bold" style={{marginTop:'38%',color:'black'}}>GMT +5:30 <HelpIcon/></FormLabel>
                    </Grid>
                </Grid>
              


                <Grid container spacing={3} style={{marginTop:'2%'}}>
                    <Grid item xs>
                    <TextField
                      id="startDate"
                      label="Start Date*"
                      type="date"
                      name="startDate"
                      defaultValue="2020-10-21"
                      onChange={this.handleChange}
                    />
                     <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.startDateError}
                    </div>
                    </Grid>                   

                    <Grid item xs>
                    <TextField
                        id="startTime"
                        label="Start Time*"
                        type="time"
                        name="startTime"
                        defaultValue="09:00"
                        style={{width:'100%'}}
                        onChange={this.handleChange}
                    />
                     <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.startTimeError}
                    </div>
                    </Grid>                 

                    <Grid item xs>
                    </Grid>
                </Grid>
                

                <Grid container spacing={3} style={{marginTop:'2%',marginBottom:'6%'}}>
                    <Grid item xs>
                    <TextField
                      id="endDate"
                      label="End Date*"
                      type="date"
                      name="endDate"
                      defaultValue="2020-10-21"
                      onChange={this.handleChange}
                    />
                     <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.endDateError}
                    </div>
                    </Grid>
        
                    <Grid item xs>
                    <TextField
                        id="endTime"
                        label="End Time*"
                        type="time"
                        name="endTime"
                        defaultValue="17:00"
                        style={{width:'100%'}}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.endTimeError}
                    </div>
                    </Grid>
                    

                    <Grid item xs>
                    </Grid>
                </Grid>

                <CKEditor                 
                    id={styles.ckeditor}
                    editor={ ClassicEditor }
                    data=''
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />

              <FormLabel style={{marginTop:'4%'}}>Attachments</FormLabel> <HelpIcon/>

                <div style={{marginTop: '3%', marginLeft:'2%'}}>
                    <div className="row">
                    <div>
                    <label className={styles.newbtn}>
                        <img id={styles.blah1} ></img>
                        {/* <span style={{top:'5rem'}}>Click here to Upload File(s)</span>                     */}
                        <input id={styles.pic1} className='pis' type="file"></input>
                    </label>    
                    </div>
                     </div>
                </div>
                <div className="text-center">
                    <FormLabel  style={{marginTop:'4%'}}>Use option on top right section on screen to save your changes</FormLabel>
                </div>

            </Container>
            {/* </div> */}
            </form>
         );
    }
}
 
export default formDesign;
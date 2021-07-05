//district_connection = require('assets/files/modules/district_connection.js')
class Scene_main extends Phaser.Scene {

  constructor() {
    super("main")
  }

  preload(){

    //----------------------Main Page----------------------//
    //Loading the map districts
    this.load.image("district1","assets/images/map/district1.png")
    this.load.image("district2","assets/images/map/district2.png")
    this.load.image("district3","assets/images/map/district3.png")
    this.load.image("district4","assets/images/map/district4.png")
    this.load.image("district5","assets/images/map/district5.png")
    this.load.image("district6","assets/images/map/district6.png")
    this.load.image("district7","assets/images/map/district7.png")
    this.load.image("district8","assets/images/map/district8.png")
    this.load.image("district9","assets/images/map/district9.png")
    this.load.image("district10","assets/images/map/district10.png")

    this.load.image("district1_selected","assets/images/map/district1_selected.png")
    this.load.image("district2_selected","assets/images/map/district2_selected.png")
    this.load.image("district3_selected","assets/images/map/district3_selected.png")
    this.load.image("district4_selected","assets/images/map/district4_selected.png")
    this.load.image("district5_selected","assets/images/map/district5_selected.png")
    this.load.image("district6_selected","assets/images/map/district6_selected.png")
    this.load.image("district7_selected","assets/images/map/district7_selected.png")
    this.load.image("district8_selected","assets/images/map/district8_selected.png")
    this.load.image("district9_selected","assets/images/map/district9_selected.png")
    this.load.image("district10_selected","assets/images/map/district10_selected.png")

    this.load.image("district1_red","assets/images/map_red/district1_red.png")
    this.load.image("district2_red","assets/images/map_red/district2_red.png")
    this.load.image("district3_red","assets/images/map_red/district3_red.png")
    this.load.image("district4_red","assets/images/map_red/district4_red.png")
    this.load.image("district5_red","assets/images/map_red/district5_red.png")
    this.load.image("district6_red","assets/images/map_red/district6_red.png")
    this.load.image("district7_red","assets/images/map_red/district7_red.png")
    this.load.image("district8_red","assets/images/map_red/district8_red.png")
    this.load.image("district9_red","assets/images/map_red/district9_red.png")
    this.load.image("district10_red","assets/images/map_red/district10_red.png")

    this.load.image("district1_red_selected","assets/images/map_red/district1_red_selected.png")
    this.load.image("district2_red_selected","assets/images/map_red/district2_red_selected.png")
    this.load.image("district3_red_selected","assets/images/map_red/district3_red_selected.png")
    this.load.image("district4_red_selected","assets/images/map_red/district4_red_selected.png")
    this.load.image("district5_red_selected","assets/images/map_red/district5_red_selected.png")
    this.load.image("district6_red_selected","assets/images/map_red/district6_red_selected.png")
    this.load.image("district7_red_selected","assets/images/map_red/district7_red_selected.png")
    this.load.image("district8_red_selected","assets/images/map_red/district8_red_selected.png")
    this.load.image("district9_red_selected","assets/images/map_red/district9_red_selected.png")
    this.load.image("district10_red_selected","assets/images/map_red/district10_red_selected.png")

    //Loading the area icons on the control panel
    this.load.image("censorship","assets/images/icons/censorship.png")
    this.load.image("infection_control","assets/images/icons/infection_control.png")
    this.load.image("judicial","assets/images/icons/judicial.png")
    this.load.image("stability","assets/images/icons/stability.png")
    this.load.image("publicity","assets/images/icons/publicity.png")

    //Loading the pause and play button
    this.load.image("play","assets/images/play_red.png")
    this.load.image("pause","assets/images/pause_red.png")

    //----------------------Control Panel----------------------//
    this.load.image("control_panel","assets/images/control_panel.png")
    this.load.image("close_button","assets/images/close_button.png")
    this.load.image("confirm_button","assets/images/confirm_button.png")

    this.load.image("control_panel_green","assets/images/control_panel_green.png")
    this.load.image("close_button_green","assets/images/close_button_green.png")
    this.load.image("control_panel_blue","assets/images/control_panel_blue.png")
    this.load.image("close_button_blue","assets/images/close_button_blue.png")
    this.load.image("control_panel_red","assets/images/control_panel_red.png")
    this.load.image("close_button_red","assets/images/close_button_red.png")

    //-------Infection Control-------//
    this.load.image("construction","assets/images/icons/infection_control/construction.png")
    this.load.image("hcw","assets/images/icons/infection_control/hcw.png")
    this.load.image("testing","assets/images/icons/infection_control/testing.png")
    this.load.image("lockdown","assets/images/icons/infection_control/lockdown.png")
    this.load.image("research","assets/images/icons/infection_control/research.png")

    this.load.image("construction_hospital","assets/images/icons/infection_control/construction_hospital.png")
    this.load.image("construction_quarantine","assets/images/icons/infection_control/construction_quarantine.png")
    this.load.image("hcw_pay","assets/images/icons/infection_control/hcw_pay.png")
    this.load.image("hcw_recruitment","assets/images/icons/infection_control/hcw_recruitment.png")
    this.load.image("hcw_transfer","assets/images/icons/infection_control/hcw_transfer.png")
    this.load.image("testing_improvement","assets/images/icons/infection_control/testing_improvement.png")
    this.load.image("testing_production","assets/images/icons/infection_control/testing_production.png")
    this.load.image("lockdown_city","assets/images/icons/infection_control/lockdown_city.png")
    this.load.image("lockdown_crowd","assets/images/icons/infection_control/lockdown_crowd.png")
    this.load.image("lockdown_mask","assets/images/icons/infection_control/lockdown_mask.png")
    this.load.image("lockdown_stayhome","assets/images/icons/infection_control/lockdown_stayhome.png")

    this.load.image("lockdown_city_red","assets/images/icons/infection_control/lockdown_city_red.png")
    this.load.image("lockdown_crowd_red","assets/images/icons/infection_control/lockdown_crowd_red.png")
    this.load.image("lockdown_mask_red","assets/images/icons/infection_control/lockdown_mask_red.png")
    this.load.image("lockdown_stayhome_red","assets/images/icons/infection_control/lockdown_stayhome_red.png")

    this.load.image("research_funding","assets/images/icons/infection_control/research_funding.png")
    this.load.image("research_researcher","assets/images/icons/infection_control/research_researcher.png")
    this.load.image("testing_import","assets/images/icons/infection_control/testing_import.png")


    //----------------------Bars----------------------//
    this.load.image("bar_background","assets/images/bars/bar_background.png")
    this.load.image("bar_black","assets/images/bars/color_bar_black.png")
    this.load.image("bar_blue","assets/images/bars/color_bar_blue.png")
    this.load.image("bar_green","assets/images/bars/color_bar_green.png")
    this.load.image("bar_red","assets/images/bars/color_bar_red.png")
    this.load.image("bar_orange","assets/images/bars/color_bar_orange.png")
    this.load.image("bar_pink","assets/images/bars/color_bar_pink.png")
    this.load.image("bar_yellow","assets/images/bars/color_bar_yellow.png")
    this.load.image("bar_deep_orange","assets/images/bars/color_bar_deep_orange.png")

    this.load.image("color_bar_cases","assets/images/bars/color_bar_cases.png")
    this.load.image("color_bar_deaths","assets/images/bars/color_bar_deaths.png")
    this.load.image("color_bar_healthy","assets/images/bars/color_bar_healthy.png")

    this.load.image("bar_progress","assets/images/bars/bar_progress.png")
    this.load.image("bar_completed","assets/images/bars/bar_completed.png")

    this.load.image("bar_cases_deaths","assets/images/bars/bar_cases_deaths.png")
    this.load.image("bar_economy","assets/images/bars/bar_economy.png")
    this.load.image("bar_reserves","assets/images/bars/bar_reserves.png")
    this.load.image("bar_sentiment","assets/images/bars/bar_sentiment.png")
    this.load.image("bar_competence","assets/images/bars/bar_sentiment_competence.png")
    this.load.image("bar_transparency","assets/images/bars/bar_sentiment_transparency.png")
    this.load.image("bar_humanity","assets/images/bars/bar_sentiment_humanity.png")


    this.load.image("bar_hospital_capacity","assets/images/bars/infection_control/bar_hospital_capacity.png")
    this.load.image("bar_quarantine_capacity","assets/images/bars/infection_control/bar_quarantine_capacity.png")
    this.load.image("bar_hcw_capacity","assets/images/bars/infection_control/bar_hcw_capacity.png")
    this.load.image("bar_lockdown_level","assets/images/bars/infection_control/bar_lockdown_level.png")
    this.load.image("bar_research_funding","assets/images/bars/infection_control/bar_research_funding.png")
    this.load.image("bar_testing_capacity","assets/images/bars/infection_control/bar_testing_capacity.png")

    this.load.json("action_instructions","assets/files/action_instructions.json")
    this.load.json("research_projects","assets/files/research_projects.json")
    this.load.json("alerts","assets/files/alerts.json")
    //this.load.json("district_connection","assets/files/district_connection.json")

  }

  //Function to shift the position of the map on the main page
  shift_map_position(x,y){
    for(var i = 0; i < this.districts.length; i++){
      this.districts[i].x += x
      this.districts[i].y += y
    }
    for(var i = 0; i < this.districts_red.length; i++){
      this.districts_red[i].x += x
      this.districts_red[i].y += y
    }
  }

  //Basic function to send an alert window
  send_alert_basic(string, color){

      //Get the texture key of the alert window and close button
      var button_key = ""
      var panel_key = ""

      if(color == "yellow"){
        panel_key = "control_panel"
        button_key = "close_alert_panel_button"

      } else {
        panel_key = "control_panel_" + color
        button_key = "close_button_" + color
      }

      //Create a list to store all the components of the alert panel
      this.alert_panel_components = []

      //Set open alert panel status to true
      this.open_alert_panel = 1

      //Pause the game
      this.paused = 1
      this.play_pause_button.setTexture("play")

      //Create the alert panel
      this.alert_panel = this.add.sprite(config.width/2, -720,panel_key)
      this.alert_panel.setScale(0.7)

      //Create the close button
      this.close_alert_panel_button = this.add.sprite(
        this.alert_panel.getTopRight().x-3,
        this.alert_panel.getTopRight().y+3,
        button_key)

      this.close_alert_panel_button.setScale(0.7)
      this.close_alert_panel_button.setOrigin(1,0)
      this.close_alert_panel_button.setData("type", "panel_icon")
      this.close_alert_panel_button.setData("id", "close_alert_panel_button")
      this.close_alert_panel_button.setInteractive()

      //Create the alert message
      this.alert_font_style = {
        fontFamily: "Trebuchet MS",
        fontSize: "30px",
        color: "#000000",
        align: "left",
        wordWrap: {width: 650},
        lineSpacing: 5
      }

      this.action_instruction_text = this.add.text(300, -900, string, this.alert_font_style)

      //Add all components to the alert panel component list
      this.alert_panel_components[this.alert_panel_components.length] = this.alert_panel
      this.alert_panel_components[this.alert_panel_components.length] = this.close_alert_panel_button
      this.alert_panel_components[this.alert_panel_components.length] = this.action_instruction_text


  }

  //Function to send an alert.
  //If an alert is currently opened, add new alert to queue to be shown later
  send_alert(string, color){
    if(this.open_alert_panel == 0 && this.opened_alert_panel == 0){
      //Send alert if no alert is currently open
      this.send_alert_basic(string, color)
    } else {
      //Add alert to queue to be displayed after the current alert is closed
      this.alert_queue[this.alert_queue.length] = [string, color]
    }



  }

  //Directly displays the project panel for construction, without the sliding effect. Used for refreshing the page
  show_project_panel_construction(){
    this.pull_project_panel_construction()
    var displacement = config.height - this.project_panel.y
    for(var i = 0; i < this.project_panel_components.length; i++){
      this.project_panel_components[i].y += displacement
    }
  }

  create_project_panel_basic(){
    //Disable all buttons in the control panel
    for(var i = 0; i < this.control_panel_components.length; i++){
      this.control_panel_components[i].disableInteractive()
    }

    //Create an array to store the components of the project panel
    this.project_panel_components = []

    //Create arrays to store the bars, for easy maneurvering in update()
    this.color_progress_bars = []
    this.progress_bars = []

    //Create an array to store info of the projects displayued
    this.selected_projects = []

    //Indicate that the project panel is currently opening
    this.open_project_panel = 1

    //Create the project panel
    this.project_panel = this.add.sprite(config.width/2, -720,"control_panel")

    //Create the close button
    this.close_project_panel_button = this.add.sprite(
      this.project_panel.getTopRight().x-3,
      this.project_panel.getTopRight().y+3,
      "close_button"
    )
    this.close_project_panel_button.setOrigin(1,0)
    this.close_project_panel_button.setInteractive()
    this.close_project_panel_button.setData("type","panel_icon")
    this.close_project_panel_button.setData("id","close_project_panel_button")

    //Add the two components to the project panel component list
    this.project_panel_components[this.project_panel_components.length] = this.project_panel
    this.project_panel_components[this.project_panel_components.length] = this.close_project_panel_button

  }

  //Function to create the project panel for construction, to be moved into place in the update() function
  pull_project_panel_construction(){
    //Designate the project panel that is currently open
    this.project_panel_opened = "construction"

    //Create the basic framework of the project panel, and changes some initial settings
    this.create_project_panel_basic()


    //Display the first four projects
    for(var i = 1; i < 5; i ++){
      if((this.construction_projects.length - i)>=0){

        //Get the latest project, which will be displayed on top
        var construction_project = this.construction_projects[this.construction_projects.length - i]

        //Add the info of the latest project to the array of projects displayed
        this.selected_projects[this.selected_projects.length] = construction_project

        //Set the text of the project
        var project_text = "Constructing " + construction_project["type"] + " in " + construction_project["location"]
        //Get the current progress of the project
        var progress = construction_project["progress"]

        //Get the texture key of the icon
        var icon_key = "construction_" + construction_project["type"]
        //Get the texture key of the progress bar
        var progress_bar_key = ""
        if(progress < 100){
          progress_bar_key = "bar_progress"
        } else {
          progress_bar_key = "bar_completed"
        }

        //Set the positions of the icon, text, bar, the margins and the scale of the progress bar
        this.project_icon_x = 100
        this.project_icon_y = -900
        this.project_text_x = 260
        this.progress_bar_x = 1120
        this.margin = 120
        this.progress_bar_scale = 1

        //Create the project icon
        this.project_icon = this.add.sprite(this.project_icon_x, this.project_icon_y + (i-1)*this.margin, icon_key)
        this.project_icon.setOrigin(0,0.5)

        //Set the scale of the project icon
        if(construction_project["type"] == "hospital"){
          this.project_icon.setScale(0.22)
        }
        if(construction_project["type"] == "quarantine"){
          this.project_icon.setScale(0.46)
        }

        //Create the text for the project icon
        this.project_font_style = {
          fontFamily: "Trebuchet MS",
          fontSize: "27px",
          color: "#000000",
          align: "left",
        }
        this.project_text = this.add.text(
          this.project_text_x, this.project_icon_y + (i-1)*this.margin,
          project_text,
          this.project_font_style
        )

        //Create the progress bars
        this.progress_bar_background = this.add.sprite(this.progress_bar_x, this.project_icon_y + (i-1)*this.margin, "bar_background")
        this.progress_bar_color = this.add.sprite(this.progress_bar_x, this.project_icon_y + (i-1)*this.margin, "bar_green")
        this.progress_bar = this.add.sprite(this.progress_bar_x, this.project_icon_y + (i-1)*this.margin,progress_bar_key)

        this.progress_bar_background.setOrigin(1,0.5)
        this.progress_bar_color.setOrigin(1,0.5)
        this.progress_bar.setOrigin(1,0.5)

        this.progress_bar_background.setScale(this.progress_bar_scale)
        this.progress_bar_color.setScale(this.progress_bar_scale)
        this.progress_bar.setScale(this.progress_bar_scale)

        //Add the bars to their respective arrays
        this.color_progress_bars[this.color_progress_bars.length] = this.progress_bar_color
        this.progress_bars[this.progress_bars.length] = this.progress_bar

        //Add all components to the project panel component
        this.project_panel_components[this.project_panel_components.length] = this.project_icon
        this.project_panel_components[this.project_panel_components.length] = this.project_text
        this.project_panel_components[this.project_panel_components.length] = this.progress_bar_background
        this.project_panel_components[this.project_panel_components.length] = this.progress_bar_color
        this.project_panel_components[this.project_panel_components.length] = this.progress_bar

      }

    }

  }

  //Function to create the project panel for research, to be moved into place in the update() function
  pull_project_panel_research(){

    this.project_panel_opened = "research"

    //Create the basic framework of the project panel, and changes some initial settings
    this.create_project_panel_basic()

    for(var i = 1; i < 5; i ++){
      if((this.research_projects.length - i)>=0){

        //Get the latest project, which will be displayed on top
        var research_project = this.research_projects[this.research_projects.length - i]

        //Add the info of the latest project to the array of projects displayed
        this.selected_projects[this.selected_projects.length] = research_project

        //Get the text and progress of the research project
        var project_text = research_project["title"]
        var progress = research_project["progress"]

        //Get the texture key of the progress bar
        var progress_bar_key = ""
        if(progress < 100){
          progress_bar_key = "bar_progress"
        } else {
          progress_bar_key = "bar_completed"
        }

        //Set the positions of the icon, text, progress bar, margins and scales
        this.project_icon_x = 100
        this.project_text_x = 530
        this.progress_bar_x = 1120
        this.project_icon_y = -900
        this.margin = 120
        this.progress_bar_scale = 1

        //Create project icon
        this.project_icon = this.add.sprite(this.project_icon_x, this.project_icon_y + (i-1)*this.margin, "research")
        this.project_icon.setOrigin(0,0.5)
        this.project_icon.setScale(0.4)

        //Create project title text
        this.project_font_style = {
          fontFamily: "Trebuchet MS",
          fontSize: "27px",
          color: "#000000",
          align: "left",
          wordWrap: {width: 550},
          lineSpacing: 0
        }

        this.project_text = this.add.text(
          this.project_text_x, this.project_icon_y + (i-1)*this.margin,
          project_text,
          this.project_font_style
        )

        this.project_text.setOrigin(0.5,0.5)

        //Create progress bars
        this.progress_bar_background = this.add.sprite(this.progress_bar_x, this.project_icon_y + (i-1)*this.margin, "bar_background")
        this.progress_bar_color = this.add.sprite(this.progress_bar_x, this.project_icon_y + (i-1)*this.margin, "bar_blue")
        this.progress_bar = this.add.sprite(this.progress_bar_x, this.project_icon_y + (i-1)*this.margin,progress_bar_key)

        this.progress_bar_background.setOrigin(1,0.5)
        this.progress_bar_color.setOrigin(1,0.5)
        this.progress_bar.setOrigin(1,0.5)

        this.progress_bar_background.setScale(this.progress_bar_scale)
        this.progress_bar_color.setScale(this.progress_bar_scale)
        this.progress_bar.setScale(this.progress_bar_scale)

        //Add progress bars to the bar arrays
        this.color_progress_bars[this.color_progress_bars.length] = this.progress_bar_color
        this.progress_bars[this.progress_bars.length] = this.progress_bar

        //Add the project panel components to the array
        this.project_panel_components[this.project_panel_components.length] = this.project_icon
        this.project_panel_components[this.project_panel_components.length] = this.project_text
        this.project_panel_components[this.project_panel_components.length] = this.progress_bar_background
        this.project_panel_components[this.project_panel_components.length] = this.progress_bar_color
        this.project_panel_components[this.project_panel_components.length] = this.progress_bar
      }
    }

  }

  //Directly displays the project panel for research, without the sliding effect. Used for refreshing the page
  show_project_panel_research(){
    this.pull_project_panel_research()
    var displacement = config.height - this.project_panel.y
    for(var i = 0; i < this.project_panel_components.length; i++){
      this.project_panel_components[i].y += displacement
    }
  }

  //Add action icons to the storage array
  add_action_icons_infection(){
    this.action_icons[this.action_icons.length] = this.icon_construction_hospital
    this.action_icons[this.action_icons.length] = this.icon_construction_quarantine
    this.action_icons[this.action_icons.length] = this.icon_hcw_pay
    this.action_icons[this.action_icons.length] = this.icon_hcw_recruitment
    this.action_icons[this.action_icons.length] = this.icon_hcw_transfer
    this.action_icons[this.action_icons.length] = this.icon_testing_improvement
    this.action_icons[this.action_icons.length] = this.icon_testing_import
    this.action_icons[this.action_icons.length] = this.icon_testing_production
    this.action_icons[this.action_icons.length] = this.icon_lockdown_mask
    this.action_icons[this.action_icons.length] = this.icon_lockdown_crowd
    this.action_icons[this.action_icons.length] = this.icon_lockdown_stayhome
    this.action_icons[this.action_icons.length] = this.icon_lockdown_city
    this.action_icons[this.action_icons.length] = this.icon_research_funding
    this.action_icons[this.action_icons.length] = this.icon_research_researcher
  }

  //Add control panel components to the storage array
  add_control_panel_components_infection(){
    this.control_panel_components[this.control_panel_components.length] = this.icon_construction_hospital
    this.control_panel_components[this.control_panel_components.length] = this.icon_construction_quarantine
    this.control_panel_components[this.control_panel_components.length] = this.icon_hcw_pay
    this.control_panel_components[this.control_panel_components.length] = this.icon_hcw_recruitment
    this.control_panel_components[this.control_panel_components.length] = this.icon_hcw_transfer
    this.control_panel_components[this.control_panel_components.length] = this.icon_testing_improvement
    this.control_panel_components[this.control_panel_components.length] = this.icon_testing_import
    this.control_panel_components[this.control_panel_components.length] = this.icon_testing_production
    this.control_panel_components[this.control_panel_components.length] = this.icon_lockdown_mask
    this.control_panel_components[this.control_panel_components.length] = this.icon_lockdown_crowd
    this.control_panel_components[this.control_panel_components.length] = this.icon_lockdown_stayhome
    this.control_panel_components[this.control_panel_components.length] = this.icon_lockdown_city
    this.control_panel_components[this.control_panel_components.length] = this.icon_research_funding
    this.control_panel_components[this.control_panel_components.length] = this.icon_research_researcher

    this.control_panel_components[this.control_panel_components.length] = this.bar_hospital_capacity_background
    this.control_panel_components[this.control_panel_components.length] = this.bar_quarantine_capacity_background
    this.control_panel_components[this.control_panel_components.length] = this.bar_hcw_capacity_background
    this.control_panel_components[this.control_panel_components.length] = this.bar_testing_capacity_background
    this.control_panel_components[this.control_panel_components.length] = this.bar_lockdown_level_background
    this.control_panel_components[this.control_panel_components.length] = this.bar_research_funding_background

    this.control_panel_components[this.control_panel_components.length] = this.color_bar_hospital_capacity
    this.control_panel_components[this.control_panel_components.length] = this.color_bar_quarantine_capacity
    this.control_panel_components[this.control_panel_components.length] = this.color_bar_hcw_capacity
    this.control_panel_components[this.control_panel_components.length] = this.color_bar_testing_capacity
    this.control_panel_components[this.control_panel_components.length] = this.color_bar_lockdown_level
    this.control_panel_components[this.control_panel_components.length] = this.color_bar_research_funding

    this.control_panel_components[this.control_panel_components.length] = this.bar_hospital_capacity
    this.control_panel_components[this.control_panel_components.length] = this.bar_quarantine_capacity
    this.control_panel_components[this.control_panel_components.length] = this.bar_hcw_capacity
    this.control_panel_components[this.control_panel_components.length] = this.bar_testing_capacity
    this.control_panel_components[this.control_panel_components.length] = this.bar_lockdown_level
    this.control_panel_components[this.control_panel_components.length] = this.bar_research_funding

  }

  //Add control panel bars to the storage array
  add_control_panel_bars_infection(){
    this.control_panel_bars[this.control_panel_bars.length] = this.bar_hospital_capacity_background
    this.control_panel_bars[this.control_panel_bars.length] = this.bar_quarantine_capacity_background
    this.control_panel_bars[this.control_panel_bars.length] = this.bar_hcw_capacity_background
    this.control_panel_bars[this.control_panel_bars.length] = this.bar_testing_capacity_background
    this.control_panel_bars[this.control_panel_bars.length] = this.bar_lockdown_level_background
    this.control_panel_bars[this.control_panel_bars.length] = this.bar_research_funding_background

    this.control_panel_bars[this.control_panel_bars.length] = this.color_bar_hospital_capacity
    this.control_panel_bars[this.control_panel_bars.length] = this.color_bar_quarantine_capacity
    this.control_panel_bars[this.control_panel_bars.length] = this.color_bar_hcw_capacity
    this.control_panel_bars[this.control_panel_bars.length] = this.color_bar_testing_capacity
    this.control_panel_bars[this.control_panel_bars.length] = this.color_bar_lockdown_level
    this.control_panel_bars[this.control_panel_bars.length] = this.color_bar_research_funding

    this.control_panel_bars[this.control_panel_bars.length] = this.bar_hospital_capacity
    this.control_panel_bars[this.control_panel_bars.length] = this.bar_quarantine_capacity
    this.control_panel_bars[this.control_panel_bars.length] = this.bar_hcw_capacity
    this.control_panel_bars[this.control_panel_bars.length] = this.bar_testing_capacity
    this.control_panel_bars[this.control_panel_bars.length] = this.bar_lockdown_level
    this.control_panel_bars[this.control_panel_bars.length] = this.bar_research_funding
  }

  //Add stat bars in the main page to the storage arrays
  add_main_stats_bars(){
    this.stats_bars[this.stats_bars.length] = this.bar_cases_deaths_background
    this.stats_bars[this.stats_bars.length] = this.bar_economy_background
    this.stats_bars[this.stats_bars.length] = this.bar_reserves_background
    this.stats_bars[this.stats_bars.length] = this.bar_sentiment_background
    this.stats_bars[this.stats_bars.length] = this.bar_competence_background
    this.stats_bars[this.stats_bars.length] = this.bar_transparency_background
    this.stats_bars[this.stats_bars.length] = this.bar_humanity_background

    this.stats_bars[this.stats_bars.length] = this.color_bar_healthy
    this.stats_bars[this.stats_bars.length] = this.color_bar_cases
    this.stats_bars[this.stats_bars.length] = this.color_bar_deaths
    this.stats_bars[this.stats_bars.length] = this.color_bar_economy
    this.stats_bars[this.stats_bars.length] = this.color_bar_reserves
    this.stats_bars[this.stats_bars.length] = this.color_bar_sentiment
    this.stats_bars[this.stats_bars.length] = this.color_bar_competence
    this.stats_bars[this.stats_bars.length] = this.color_bar_transparency
    this.stats_bars[this.stats_bars.length] = this.color_bar_humanity

    this.stats_bars[this.stats_bars.length] = this.bar_cases_deaths
    this.stats_bars[this.stats_bars.length] = this.bar_economy
    this.stats_bars[this.stats_bars.length] = this.bar_reserves
    this.stats_bars[this.stats_bars.length] = this.bar_sentiment
    this.stats_bars[this.stats_bars.length] = this.bar_competence
    this.stats_bars[this.stats_bars.length] = this.bar_transparency
    this.stats_bars[this.stats_bars.length] = this.bar_humanity

    ///

    this.stats_bars_large[this.stats_bars_large.length] = this.bar_cases_deaths_background
    this.stats_bars_large[this.stats_bars_large.length] = this.bar_economy_background
    this.stats_bars_large[this.stats_bars_large.length] = this.bar_reserves_background
    this.stats_bars_large[this.stats_bars_large.length] = this.bar_sentiment_background
    this.stats_bars_small[this.stats_bars_small.length] = this.bar_competence_background
    this.stats_bars_small[this.stats_bars_small.length] = this.bar_transparency_background
    this.stats_bars_small[this.stats_bars_small.length] = this.bar_humanity_background

    this.stats_bars_large[this.stats_bars_large.length] = this.color_bar_healthy
    this.stats_bars_large[this.stats_bars_large.length] = this.color_bar_cases
    this.stats_bars_large[this.stats_bars_large.length] = this.color_bar_deaths
    this.stats_bars_large[this.stats_bars_large.length] = this.color_bar_economy
    this.stats_bars_large[this.stats_bars_large.length] = this.color_bar_reserves
    this.stats_bars_large[this.stats_bars_large.length] = this.color_bar_sentiment
    this.stats_bars_small[this.stats_bars_small.length] = this.color_bar_competence
    this.stats_bars_small[this.stats_bars_small.length] = this.color_bar_transparency
    this.stats_bars_small[this.stats_bars_small.length] = this.color_bar_humanity

    this.stats_bars_large[this.stats_bars_large.length] = this.bar_cases_deaths
    this.stats_bars_large[this.stats_bars_large.length] = this.bar_economy
    this.stats_bars_large[this.stats_bars_large.length] = this.bar_reserves
    this.stats_bars_large[this.stats_bars_large.length] = this.bar_sentiment
    this.stats_bars_small[this.stats_bars_small.length] = this.bar_competence
    this.stats_bars_small[this.stats_bars_small.length] = this.bar_transparency
    this.stats_bars_small[this.stats_bars_small.length] = this.bar_humanity
  }

  //Create base stats for districts
  create_district_stats(){
    var districtInfo = new DistrictInfo()
    districtInfo.set_district_stats()
    this.district1_stats = districtInfo.district1_stats
    this.district2_stats = districtInfo.district2_stats
    this.district3_stats = districtInfo.district3_stats
    this.district4_stats = districtInfo.district4_stats
    this.district5_stats = districtInfo.district5_stats
    this.district6_stats = districtInfo.district6_stats
    this.district7_stats = districtInfo.district7_stats
    this.district8_stats = districtInfo.district8_stats
    this.district9_stats = districtInfo.district9_stats
    this.district10_stats = districtInfo.district10_stats
    this.national_stats = districtInfo.national_stats

    this.district_stats = {
      district1: this.district1_stats,
      district2: this.district2_stats,
      district3: this.district3_stats,
      district4: this.district4_stats,
      district5: this.district5_stats,
      district6: this.district6_stats,
      district7: this.district7_stats,
      district8: this.district8_stats,
      district9: this.district9_stats,
      district10: this.district10_stats,
      national: this.national_stats
    }

    this.district_keys = [
      "district1", "district2", "district3",
      "district4", "district5", "district6",
      "district7", "district8", "district9",
      "district10"
    ]
  }

  //Master function to react to all click events
  process_click(pointer,gameObject){
    //-----------Process click for pause button-----------//
    if(gameObject.getData("type") == "play_pause_button"){
      if(this.paused == 1){
        this.paused = 0
        this.play_pause_button.setTexture("pause")
      } else if(this.paused == 0){
        this.paused = 1
        this.play_pause_button.setTexture("play")
      }
    }

    //-----------Process click for map district-----------//
    if(gameObject.getData("type") == "map_district"){

      var id = gameObject.getData("id")
      var index = parseInt(id[id.length-1], 10) - 1

      if(index < 0){
        index = 9
      }

      //Action to select a district
      if(gameObject.getData("selected") == -1){

        this.selected_district = id

        //Deselect all other districts
        for(var i = 0; i < this.districts.length; i++){
          if(this.districts[i] != gameObject){
            this.districts[i].setData("selected",-1)
            this.districts[i].setTexture("district"+(i+1))
          }
          if(i != index){
            this.districts_red[i].setData("selected",-1)
            this.districts_red[i].setTexture(this.districts[i].getData("id")+"_red")
          }
        }

        //Select this district
        gameObject.setData("selected",1)
        gameObject.setTexture(id+"_selected")
        this.districts_red[index].setData("selected",1)
        this.districts_red[index].setTexture(id+"_red_selected")

      } else {
          //Deselect this district
          gameObject.setData("selected",-1)
          gameObject.setTexture(id)

          this.districts_red[index].setData("selected",-1)
          this.districts_red[index].setTexture(id+"_red")

          //Set the current selected district to "national"
          this.selected_district = "national"
      }
    }

    //-----------Process click for main icons (areas of action)-----------//
    if(gameObject.getData("type") == "icon"){

      //Pause the game
      this.paused = 1
      this.play_pause_button.setTexture("play")

      //Designate the selected icon/area
      this.selected_icon = gameObject.getData("id")

      //Create arrays to store the components of the control panel, the bars, action icons, etc.
      this.control_panel_components = []
      this.control_panel_bars = []
      this.color_bars = []
      this.action_icons = []

      //Set open control panel status switch to on
      this.open_control_panel = 1

      //Create control panel
      this.control_panel = this.add.sprite(config.width/2, -720,"control_panel")

      //Create close button
      this.close_button = this.add.sprite(
        this.control_panel.getTopRight().x-3,
        this.control_panel.getTopRight().y+3,
        "close_button")

      this.close_button.setOrigin(1,0)
      this.close_button.setData("type","panel_icon")
      this.close_button.setData("id","close_control_panel_button")
      this.close_button.setInteractive()

      //Disable all icons in the main page
      for(var i = 0; i < this.main_icons.length; i++){
        this.main_icons[i].disableInteractive()
      }

      for(var i = 0; i < this.districts.length; i++){
        this.districts[i].disableInteractive()
      }

      //Add the two items to the control panel
      this.control_panel_components[this.control_panel_components.length] = this.control_panel
      this.control_panel_components[this.control_panel_components.length] = this.close_button

      //-----Create control panel components for the "infection control" area
      if(gameObject.getData("id")=="infection_control"){

        //--Create main control panel icons
        this.icon_construction = this.add.sprite(200, -930, "construction")
        this.icon_hcw = this.add.sprite(200, -820, "hcw")
        this.icon_testing = this.add.sprite(200, -710, "testing")
        this.icon_lockdown = this.add.sprite(200, -600, "lockdown")
        this.icon_research = this.add.sprite(200, -490, "research")

        this.icon_construction.setScale(0.4)
        this.icon_hcw.setScale(0.35)
        this.icon_testing.setScale(0.35)
        this.icon_lockdown.setScale(0.40)
        this.icon_research.setScale(0.35)

        this.icon_construction.setInteractive()
        this.icon_research.setInteractive()

        this.icon_construction.setData("type","panel_icon")
        this.icon_construction.setData("id","construction_project")
        this.icon_research.setData("type","panel_icon")
        this.icon_research.setData("id","research_project")

        //Add to control panel component array
        this.control_panel_components[this.control_panel_components.length] = this.icon_construction
        this.control_panel_components[this.control_panel_components.length] = this.icon_hcw
        this.control_panel_components[this.control_panel_components.length] = this.icon_testing
        this.control_panel_components[this.control_panel_components.length] = this.icon_lockdown
        this.control_panel_components[this.control_panel_components.length] = this.icon_research

        //--Create action icons

        this.icon_construction_hospital = this.add.sprite(600, -930,"construction_hospital")
        this.icon_construction_quarantine = this.add.sprite(720, -930,"construction_quarantine")
        this.icon_hcw_pay = this.add.sprite(600, -820,"hcw_pay")
        this.icon_hcw_recruitment = this.add.sprite(720, -820,"hcw_recruitment")
        this.icon_hcw_transfer = this.add.sprite(840, -820,"hcw_transfer")

        this.icon_testing_improvement = this.add.sprite(600, -710,"testing_improvement")
        this.icon_testing_production = this.add.sprite(720, -710,"testing_production")
        this.icon_testing_import = this.add.sprite(840, -710,"testing_import")

        this.icon_lockdown_mask = this.add.sprite(600, -600,"lockdown_mask")
        this.icon_lockdown_crowd = this.add.sprite(720, -600,"lockdown_crowd")
        this.icon_lockdown_stayhome = this.add.sprite(840, -600,"lockdown_stayhome")
        this.icon_lockdown_city = this.add.sprite(960, -600,"lockdown_city")
        this.icon_research_funding = this.add.sprite(600, -490,"research_funding")
        this.icon_research_researcher = this.add.sprite(720, -490,"research_researcher")

        this.icon_construction_hospital.setScale(0.18)
        this.icon_construction_quarantine.setScale(0.38)
        this.icon_hcw_pay.setScale(0.2)
        this.icon_hcw_recruitment.setScale(0.28)
        this.icon_hcw_transfer.setScale(0.5)
        this.icon_testing_improvement.setScale(0.16)
        this.icon_testing_import.setScale(0.3)
        this.icon_testing_production.setScale(0.14)
        this.icon_lockdown_mask.setScale(0.5)
        this.icon_lockdown_crowd.setScale(0.16)
        this.icon_lockdown_stayhome.setScale(0.4)
        this.icon_lockdown_city.setScale(0.11)
        this.icon_research_funding.setScale(0.08)
        this.icon_research_researcher.setScale(0.07)

        this.icon_construction_hospital.setData("id","construction_hospital")
        this.icon_construction_quarantine.setData("id","construction_quarantine")
        this.icon_hcw_pay.setData("id","hcw_pay")
        this.icon_hcw_recruitment.setData("id","hcw_recruitment")
        this.icon_hcw_transfer.setData("id","hcw_transfer")
        this.icon_testing_improvement.setData("id","testing_improvement")
        this.icon_testing_import.setData("id","testing_import")
        this.icon_testing_production.setData("id","testing_production")
        this.icon_lockdown_mask.setData("id","lockdown_mask")
        this.icon_lockdown_crowd.setData("id","lockdown_crowd")
        this.icon_lockdown_stayhome.setData("id","lockdown_stayhome")
        this.icon_lockdown_city.setData("id","lockdown_city")
        this.icon_research_funding.setData("id","research_funding")
        this.icon_research_researcher.setData("id","research_researcher")

        //If a testing kit has not been developed,
        if(this.testing_kit_developed == 0){
          this.icon_testing_improvement.setAlpha(0.5)
          this.icon_testing_production.setAlpha(0.5)
          this.icon_testing_import.setAlpha(0.5)
        }

        //Get the stats of the current district
        var selected_district_stats = this.district_stats[this.selected_district]

        //Set the icon texture for the lockdown action icons, depending on whether the lockdown order is in effect
        if(selected_district_stats["infection_control"]["lockdown_mask"] == true){
          this.icon_lockdown_mask.setTexture("lockdown_mask_red")
        } else {
          this.icon_lockdown_mask.setTexture("lockdown_mask")
        }
        if(selected_district_stats["infection_control"]["lockdown_crowd"] == true){
          this.icon_lockdown_crowd.setTexture("lockdown_crowd_red")
        } else {
          this.icon_lockdown_crowd.setTexture("lockdown_crowd")
        }
        if(selected_district_stats["infection_control"]["lockdown_stayhome"] == true){
          this.icon_lockdown_stayhome.setTexture("lockdown_stayhome_red")
        } else {
          this.icon_lockdown_stayhome.setTexture("lockdown_stayhome")
        }
        if(selected_district_stats["infection_control"]["lockdown_city"] == true){
          this.icon_lockdown_city.setTexture("lockdown_city_red")
        } else {
          this.icon_lockdown_city.setTexture("lockdown_city")
        }

        //Add to array of action icons
        this.add_action_icons_infection()

        //Set interactivity and object type for all action icons
        for(var i = 0; i < this.action_icons.length; i++){
          this.action_icons[i].setInteractive()
          this.action_icons[i].setData("type","action_icon")
        }

        //If a testing kit has not been developed, disable interactivity
        if(this.testing_kit_developed == 0){
          this.icon_testing_improvement.disableInteractive()
          this.icon_testing_production.disableInteractive()
          this.icon_testing_import.disableInteractive()
        }

        //Set position of bars
        this.bar_hospital_capacity_x = 275
        this.bar_hcw_capacity_x = 275
        this.bar_quarantine_capacity_x = 275
        this.bar_testing_capacity_x = 275
        this.bar_lockdown_level_x = 275
        this.bar_research_funding_x = 275

        this.bar_hospital_capacity_y = -970
        this.bar_quarantine_capacity_y = -910
        this.bar_hcw_capacity_y = -820
        this.bar_testing_capacity_y = -710
        this.bar_lockdown_level_y = -600
        this.bar_research_funding_y = -490

        //Create the bars
        this.bar_hospital_capacity_background = this.add.sprite(this.bar_hospital_capacity_x, this.bar_hospital_capacity_y, "bar_background")
        this.bar_quarantine_capacity_background = this.add.sprite(this.bar_quarantine_capacity_x, this.bar_quarantine_capacity_y, "bar_background")
        this.bar_hcw_capacity_background = this.add.sprite(this.bar_hcw_capacity_x, this.bar_hcw_capacity_y, "bar_background")
        this.bar_testing_capacity_background = this.add.sprite(this.bar_testing_capacity_x, this.bar_testing_capacity_y, "bar_background")
        this.bar_lockdown_level_background = this.add.sprite(this.bar_lockdown_level_x, this.bar_lockdown_level_y, "bar_background")
        this.bar_research_funding_background = this.add.sprite(this.bar_research_funding_x, this.bar_research_funding_y, "bar_background")

        this.color_bar_hospital_capacity = this.add.sprite(this.bar_hospital_capacity_x, this.bar_hospital_capacity_y, "bar_red")
        this.color_bar_quarantine_capacity = this.add.sprite(this.bar_quarantine_capacity_x, this.bar_quarantine_capacity_y, "bar_orange")
        this.color_bar_hcw_capacity = this.add.sprite(this.bar_hcw_capacity_x, this.bar_hcw_capacity_y, "bar_pink")
        this.color_bar_testing_capacity = this.add.sprite(this.bar_testing_capacity_x, this.bar_testing_capacity_y, "bar_green")
        this.color_bar_lockdown_level = this.add.sprite(this.bar_lockdown_level_x, this.bar_lockdown_level_y, "bar_black")
        this.color_bar_research_funding = this.add.sprite(this.bar_research_funding_x, this.bar_research_funding_y, "bar_blue")

        this.bar_hospital_capacity = this.add.sprite(this.bar_hospital_capacity_x, this.bar_hospital_capacity_y, "bar_hospital_capacity")
        this.bar_quarantine_capacity = this.add.sprite(this.bar_quarantine_capacity_x, this.bar_quarantine_capacity_y, "bar_quarantine_capacity")
        this.bar_hcw_capacity = this.add.sprite(this.bar_hcw_capacity_x, this.bar_hcw_capacity_y, "bar_hcw_capacity")
        this.bar_testing_capacity = this.add.sprite(this.bar_testing_capacity_x, this.bar_testing_capacity_y, "bar_testing_capacity")
        this.bar_lockdown_level = this.add.sprite(this.bar_lockdown_level_x, this.bar_lockdown_level_y, "bar_lockdown_level")
        this.bar_research_funding = this.add.sprite(this.bar_research_funding_x, this.bar_research_funding_y, "bar_research_funding")

        //Add to array of control panel components
        this.add_control_panel_components_infection()

        //Add to array of control panel bars
        this.add_control_panel_bars_infection()

        this.control_panel_bar_scale = 0.8

        for(var i = 0; i < this.control_panel_bars.length; i++){
          this.control_panel_bars[i].setScale(this.control_panel_bar_scale)
          this.control_panel_bars[i].setOrigin(0,0.5)
        }
      }


    }

    //-----------Process click for panel icons-----------//
    if(gameObject.getData("type") == "panel_icon"){

      if(gameObject.getData("id") == "close_control_panel_button"){
        this.close_control_panel = 1
        this.paused = 0
        this.play_pause_button.setTexture("pause")
      }

      if(gameObject.getData("id") == "close_action_panel_button"){
        this.close_action_panel = 1
      }

      if(gameObject.getData("id") == "close_alert_panel_button"){
        this.close_alert_panel = 1
        this.paused = 0
        this.play_pause_button.setTexture("pause")

        //If project panel is opened, refresh it after alert is closed
        if(this.open_project_panel == 1 || this.opened_project_panel == 1){
          for(var i = 0; i < this.project_panel_components.length; i++){
            this.project_panel_components[i].destroy()
          }
          if(this.project_panel_opened == "construction"){
            this.show_project_panel_construction()
          }
          if(this.project_panel_opened == "research"){
            this.show_project_panel_research()
          }
        }
      }

      if(gameObject.getData("id") == "close_project_panel_button"){
        this.close_project_panel = 1
      }

      if(gameObject.getData("id") == "construction_project"){
        this.pull_project_panel_construction()
      }

      if(gameObject.getData("id") == "research_project"){
        this.pull_project_panel_research()
      }
    }

    //-----------Process click for action icons - create action panel-----------//
    if(gameObject.getData("type") == "action_icon"){
      var id = gameObject.getData("id")

      if(id == "lockdown_mask" || id == "lockdown_crowd" || id == "lockdown_stayhome" || id == "lockdown_city"){
        if(this.district_stats[this.selected_district]["infection_control"][id] == true){
          id += "_stop"
        }
      }

      this.selected_action = id

      for(var i = 0; i < this.control_panel_components.length; i++){
        this.control_panel_components[i].disableInteractive()
      }

      this.open_action_panel = 1
      this.action_panel_components = []

      this.action_panel = this.add.sprite(config.width/2, -720,"control_panel")
      this.action_panel.setScale(0.7)

      this.close_action_panel_button = this.add.sprite(
        this.action_panel.getTopRight().x-3,
        this.action_panel.getTopRight().y+3,
        "close_button")

      this.close_action_panel_button.setScale(0.7)
      this.close_action_panel_button.setOrigin(1,0)
      this.close_action_panel_button.setData("type", "panel_icon")
      this.close_action_panel_button.setData("id", "close_action_panel_button")
      this.close_action_panel_button.setInteractive()

      this.confirm_action_button = this.add.sprite(config.width/2, -565, "confirm_button")
      this.confirm_action_button.setScale(0.6)
      this.confirm_action_button.setData("type", "confirm_action_button")
      this.confirm_action_button.setInteractive()

      this.action_instruction_font_style = {
        fontFamily: "Trebuchet MS",
        fontSize: "27px",
        color: "#000000",
        align: "left",
        wordWrap: {width: 650},
        lineSpacing: 5
      }

      this.action_instruction_string = this.action_instructions[this.selected_icon][id]

      this.action_instruction_text = this.add.text(
        300, -900,
        this.action_instruction_string, this.action_instruction_font_style
      )

      this.action_panel_components[this.action_panel_components.length] = this.action_panel
      this.action_panel_components[this.action_panel_components.length] = this.close_action_panel_button
      this.action_panel_components[this.action_panel_components.length] = this.confirm_action_button
      this.action_panel_components[this.action_panel_components.length] = this.action_instruction_text

      for(var i = 0; i < this.control_panel_components.length; i++){
        this.control_panel_components[i].disableInteractive()
      }

    }

    //-----------Process click for icons confimrming action. THIS IS THE PART THAT ALLOWS PLAYERS TO CONTROL THE MAI PARAMETERS-----------//
    if(gameObject.getData("type") == "confirm_action_button"){
      this.close_action_panel = 1

      //---Actions for infection control---//
      if(this.selected_icon == "infection_control"){

        //Add a new hospital construction project
        if(this.selected_action == "construction_hospital"){
          var new_hospital_project = {
            type: "hospital",
            progress: 0,
            location: this.selected_district,
            duration: 100,
            completed: 0
          }
          this.construction_projects[this.construction_projects.length] = new_hospital_project
          this.district_stats[this.selected_district]["economy"]["expense"] += this.hospital_construction_expense
        }

        //Add a new quarantine facility construction project
        if(this.selected_action == "construction_quarantine"){
          var new_quarantine_project = {
            type: "quarantine",
            progress: 0,
            location: this.selected_district,
            duration: 100,
            completed: 0
          }
          this.construction_projects[this.construction_projects.length] = new_quarantine_project
          this.district_stats[this.selected_district]["economy"]["expense"] += this.quarantine_construction_expense
        }

        if(this.selected_action == "hcw_pay"){
        }
        if(this.selected_action == "hcw_recruitment"){
        }
        if(this.selected_action == "hcw_transfer"){
        }

        if(this.selected_action == "testing_improvement"){
        }

        //Increase production of teting kits
        if(this.selected_action == "testing_production" && this.testing_kit_developed == 1){
          this.district_stats[this.selected_district]["infection_control"]["testing_production"] += 4
          this.district_stats[this.selected_district]["economy"]["expense"] += this.testing_production_expenses
        }

        //Import testing kits, leading to a one time increase in testing capacity
        if(this.selected_action == "testing_import" && this.testing_kit_developed == 1){
          this.district_stats[this.selected_district]["infection_control"]["testing_capacity"] += 10
          this.district_stats[this.selected_district]["economy"]["reserve"] -= 10
        }

        //Lockdown orders - can be imposed or lifted
        if(this.selected_action == "lockdown_mask" || this.selected_action == "lockdown_mask_stop"){
          if(this.district_stats[this.selected_district]["infection_control"]["lockdown_mask"] == false){
            this.district_stats[this.selected_district]["infection_control"]["lockdown_mask"] = true
            this.district_stats[this.selected_district]["infection_control"]["r"] -= 0.1
            this.district_stats[this.selected_district]["infection_control"]["lockdown_mask_changes"] += 1
          } else {
            this.district_stats[this.selected_district]["infection_control"]["lockdown_mask"] = false
            this.district_stats[this.selected_district]["infection_control"]["r"] += 0.1
            this.district_stats[this.selected_district]["infection_control"]["lockdown_mask_changes"] += 1
          }
        }


        if(this.selected_action == "lockdown_crowd" || this.selected_action == "lockdown_crowd_stop"){
          if(this.district_stats[this.selected_district]["infection_control"]["lockdown_crowd"] == false){
            this.district_stats[this.selected_district]["infection_control"]["lockdown_crowd"] = true
            this.district_stats[this.selected_district]["infection_control"]["r"] -= 0.1
            this.district_stats[this.selected_district]["infection_control"]["lockdown_crowd_changes"] += 1
          } else {
            this.district_stats[this.selected_district]["infection_control"]["lockdown_crowd"] = false
            this.district_stats[this.selected_district]["infection_control"]["r"] += 0.13
            this.district_stats[this.selected_district]["infection_control"]["lockdown_crowd_changes"] += 1
          }
        }

        if(this.selected_action == "lockdown_stayhome"|| this.selected_action == "lockdown_stayhome_stop"){
          if(this.district_stats[this.selected_district]["infection_control"]["lockdown_stayhome"] == false){
            this.district_stats[this.selected_district]["infection_control"]["lockdown_stayhome"] = true
            this.district_stats[this.selected_district]["infection_control"]["r"] -= 0.2
            this.district_stats[this.selected_district]["infection_control"]["lockdown_stayhome_changes"] += 1
          } else {
            this.district_stats[this.selected_district]["infection_control"]["lockdown_stayhome"] = false
            this.district_stats[this.selected_district]["infection_control"]["r"] += 0.23
            this.district_stats[this.selected_district]["infection_control"]["lockdown_stayhome_changes"] += 1
          }
        }

        if(this.selected_action == "lockdown_city" || this.selected_action == "lockdown_city_stop"){
          if(this.district_stats[this.selected_district]["infection_control"]["lockdown_city"] == false){
            this.district_stats[this.selected_district]["infection_control"]["lockdown_city"] = true
            this.district_stats[this.selected_district]["infection_control"]["r"] -= 0.3
            this.district_stats[this.selected_district]["infection_control"]["lockdown_city_change"] += 1
          } else {
            this.district_stats[this.selected_district]["infection_control"]["lockdown_city"] = false
            this.district_stats[this.selected_district]["infection_control"]["r"] += 0.35
            this.district_stats[this.selected_district]["infection_control"]["lockdown_city_changes"] += 1
          }
        }

        //Increase research funding
        if(this.selected_action == "research_funding"){
          this.research_funding += (100-this.research_funding) * 10/90
          this.research_rate += this.rate_to_funding_ratio * (100-this.research_funding) * 10/90
          for(var i = 0; i < this.district_keys.length; i++){
            var district_stats = this.district_stats[this.district_keys[i]]
            district_stats["economy"]["reserve"] -= this.research_funding * (1/5)
          }
          if(this.research_funding >= 100){
            this.research_funding = 100
          }
        }

        //Increase researchers
        if(this.selected_action == "research_researcher"){
          this.research_funding += 15
          this.research_rate += this.rate_to_funding_ratio * 15
          for(var i = 0; i < this.district_keys.length; i++){
            var district_stats = this.district_stats[this.district_keys[i]]
            district_stats["economy"]["reserve"] -= 3
          }
          district_stats["sentiment"]["competence"] += 3
          if(this.research_funding >= 100){
            this.research_funding = 100
          }
        }


      }
    }
  }

  create(){


    //----------------------BASIC GLOBAL PARAMETERS----------------------//
    //Refer to files/modules/global_params.js

    var globalParams = new GlobalParams()
    globalParams.setGlobalParams()

    //Disease spread//
    this.recovery_rate = globalParams.recovery_rate
    this.death_rate = globalParams.death_rate
    this.hospital_recovery_benefit = globalParams.hospital_recovery_benefit
    this.hospital_recovery_rate_factor = globalParams.hospital_recovery_rate_factor
    this.base_hospital_recovery_rate = globalParams.base_hospital_recovery_rate
    this.immunity_proportion = globalParams.immunity_proportion
    this.r_adjustment_factor = globalParams.r_adjustment_factor


    //Research
    this.research_funding = globalParams.research_funding
    this.research_rate = globalParams.research_rate
    this.rate_to_funding_ratio = globalParams.rate_to_funding_ratio

    //Economy//
    this.income_factor = globalParams.income_factor
    this.expense_factor = globalParams.expense_factor
    this.hospital_construction_expense = globalParams.hospital_construction_expense
    this.quarantine_construction_expense = globalParams.quarantine_construction_expense

    //sentiment
    this.sentiment_factor = globalParams.sentiment_factor

    //Others
    this.population_factor = globalParams.population_factor

    //Game graphics
    this.descent_speed = 80
    this.ascent_speed = 80
    this.frame_rate = 100

    //----------------------INITIALIZATION----------------------//
    //Lockdown//
    this.lockdown_mask_change_alert_sent = 0
    this.lockdown_crowd_change_alert_sent = 0
    this.lockdown_stayhome_change_alert_sent = 0
    this.lockdown_city_change_alert_sent = 0

    //Day
    this.i = 0
    this.day = 0

    //Alert queue
    this.alert_queue = []

    //Testing and research//
    this.testing_kit_developed = 0
    this.started_research = 0

    //Selection
    this.selected_district = "national"
    this.selected_icon = "none"

    //Panels
    this.open_alert_panel = 0
    this.opened_alert_panel = 0
    this.open_control_panel = 0
    this.opened_control_panel = 0
    this.open_project_panel = 0
    this.opened_project_panel = 0

    //Arrays
    this.selected_projects = []
    this.construction_projects = []
    this.research_projects = []

    //----------------------Get Data----------------------//
    this.action_instructions = this.cache.json.get("action_instructions")
    this.research_project_data = this.cache.json.get("research_projects")
    this.alerts_data = this.cache.json.get("alerts")


    //----------------------Add text to indicate selected district----------------------//
    this.selected_district_font_style = {
      fontFamily: "Arial",
      fontSize: "60px",
      color: "#000000",
      align: "left",
    }
    if(this.selected_district[0] == "d"){
      var selected_district_adjusted = "DISTRICT " + this.selected_district[this.selected_district.length-1]
      if(this.selected_district[this.selected_district.length-1] == "0"){
        selected_district_adjusted = "DISTRICT 10"
      }
    } else {
      var selected_district_adjusted = "NATIONAL"
    }
    this.selected_district_text = this.add.text(config.width/2, 60,selected_district_adjusted,this.selected_district_font_style)
    this.selected_district_text.setOrigin(0.5,0.5)



    //----------------------Create distric stats and calculate national stats----------------------//
    this.create_district_stats()

    for(var i = 0; i < this.district_keys.length; i++){
      var district_stats = this.district_stats[this.district_keys[i]]
      this.national_stats["population"] += district_stats["population"]
      this.national_stats["infection_control"]["cases_actual"] += district_stats["infection_control"]["cases_actual"]
      this.national_stats["infection_control"]["cases_diagnosed"] += district_stats["infection_control"]["cases_diagnosed"]
      this.national_stats["infection_control"]["deaths"] += district_stats["infection_control"]["deaths"]
      this.national_stats["infection_control"]["quarantined"] += district_stats["infection_control"]["quarantined"]

    }

    //----------------------Create and position the icons----------------------//
    this.icon_infection_control = this.add.sprite(80,20,"infection_control")
    this.icon_censorship = this.add.sprite(80,140,"censorship")
    this.icon_publicity = this.add.sprite(80,260,"publicity")
    this.icon_judicial = this.add.sprite(80,380,"judicial")
    this.icon_stability = this.add.sprite(80,500,"stability")

    this.main_icons = [
      this.icon_infection_control, this.icon_censorship,
      this.icon_publicity, this.icon_judicial,
      this.icon_stability
    ]

    this.icon_censorship.setScale(0.13)
    this.icon_infection_control.setScale(0.2)
    this.icon_publicity.setScale(0.23)
    this.icon_judicial.setScale(0.15)
    this.icon_stability.setScale(0.12)

    for(var i = 0; i < this.main_icons.length; i++){
      this.main_icons[i].setOrigin(0,0)
      //this.main_icons[i].setInteractive()
      this.main_icons[i].setData("type","icon")
    }

    this.icon_censorship.setData("id","censorship")
    this.icon_infection_control.setData("id","infection_control")
    this.icon_publicity.setData("id","publicity")
    this.icon_judicial.setData("id","judicial")
    this.icon_stability.setData("id","stability")


    //----------------------Create and position map districts----------------------//
    this.map_scale_x = 0.9
    this.map_scale_y = 0.9
    this.district1 = this.add.sprite(0,0,"district1")
    this.district2 = this.add.sprite(185*this.map_scale_x,0,"district2")
    this.district3 = this.add.sprite(835*this.map_scale_x,0,"district3")
    this.district4 = this.add.sprite(35*this.map_scale_x,20*this.map_scale_y,"district4")
    this.district5 = this.add.sprite(123*this.map_scale_x,152*this.map_scale_y,"district5")
    this.district6 = this.add.sprite(380*this.map_scale_x,150*this.map_scale_y,"district6")
    this.district7 = this.add.sprite(672*this.map_scale_x,80*this.map_scale_y,"district7")
    this.district8 = this.add.sprite(0,588*this.map_scale_y,"district8")
    this.district9 = this.add.sprite(305*this.map_scale_x,325*this.map_scale_y,"district9")
    this.district10 = this.add.sprite(835*this.map_scale_x,587*this.map_scale_y,"district10")

    this.district1_red = this.add.sprite(0,0,"district1_red")
    this.district2_red = this.add.sprite(185*this.map_scale_x,0,"district2_red")
    this.district3_red = this.add.sprite(835*this.map_scale_x,0,"district3_red")
    this.district4_red = this.add.sprite(35*this.map_scale_x,20*this.map_scale_y,"district4_red")
    this.district5_red = this.add.sprite(123*this.map_scale_x,152*this.map_scale_y,"district5_red")
    this.district6_red = this.add.sprite(380*this.map_scale_x,150*this.map_scale_y,"district6_red")
    this.district7_red = this.add.sprite(672*this.map_scale_x,80*this.map_scale_y,"district7_red")
    this.district8_red = this.add.sprite(0,588*this.map_scale_y,"district8_red")
    this.district9_red = this.add.sprite(305*this.map_scale_x,325*this.map_scale_y,"district9_red")
    this.district10_red = this.add.sprite(835*this.map_scale_x,587*this.map_scale_y,"district10_red")

    this.districts = [
      this.district1,this.district2,
      this.district3,this.district4,
      this.district5,this.district6,
      this.district7,this.district8,
      this.district9,this.district10
    ]

    this.districts_red = [
      this.district1_red,this.district2_red,
      this.district3_red,this.district4_red,
      this.district5_red,this.district6_red,
      this.district7_red,this.district8_red,
      this.district9_red,this.district10_red
    ]

    for(var i = 0; i < this.districts.length; i++){
      this.districts[i].setScale(this.map_scale_x, this.map_scale_y)
      this.districts[i].setOrigin(0,0)
      this.districts[i].setData("type","map_district")
      this.districts[i].setData("id","district"+(i+1))
      this.districts[i].setData("selected",-1)
      this.districts[i].setInteractive()

    }

    for(var i = 0; i < this.districts_red.length; i++){
      this.districts_red[i].setScale(this.map_scale_x, this.map_scale_y)
      this.districts_red[i].setOrigin(0,0)
      this.districts_red[i].setData("type","map_district")
      this.districts_red[i].setData("id","district"+(i+1))
      this.districts_red[i].setData("selected",-1)
      //this.districts_red[i].setInteractive()
    }

    this.district3.setOrigin(1,0)
    this.district8.setOrigin(0,1)
    this.district10.setOrigin(1,1)
    this.district3_red.setOrigin(1,0)
    this.district8_red.setOrigin(0,1)
    this.district10_red.setOrigin(1,1)

    this.shift_map_position(230,100)

    //SEEDS THE INFECTION. INFECTION STARTS HERE.//
    this.district5_stats["infection_control"]["cases_actual"] = 1
    this.district5_stats["infection_control"]["cases_active"] = 1


    //----------------------Create and position main stat bars----------------------//
    this.bar_cases_deaths_x = 1020
    this.text_cases_x = 1020
    this.text_deaths_x = 1020
    this.bar_economy_x = 1020
    this.bar_reserves_x = 1020
    this.bar_sentiment_x = 1020
    this.bar_competence_x = 1020
    this.bar_transparency_x = 1020
    this.bar_humanity_x = 1020

    this.bar_cases_deaths_y = 100
    this.text_cases_y = 140
    this.text_deaths_y = 180
    this.bar_economy_y = 260
    this.bar_reserves_y = 330
    this.bar_sentiment_y = 400
    this.bar_competence_y = 470
    this.bar_transparency_y = 530
    this.bar_humanity_y = 590

    this.bar_stats_scale1 = 0.75
    this.bar_stats_scale2 = 0.6

    this.stats_bars = []
    this.stats_bars_small = []
    this.stats_bars_large = []

    this.cases_deaths_style = {
      fontFamily: "Trebuchet MS",
      fontSize: "27px",
      color: "#000000",
      align: "left",
      wordWrap: {width: 550},
      lineSpacing: 0
    }

    this.cases_text = this.add.text(
      this.text_cases_x, this.text_cases_y,
      "CASES: " + this.district_stats[this.selected_district]["infection_control"]["cases_diagnosed"],
      this.cases_deaths_style
    )
    this.deaths_text = this.add.text(
      this.text_deaths_x, this.text_deaths_y,
      "DEATHS: " + this.district_stats[this.selected_district]["infection_control"]["deaths"],
      this.cases_deaths_style
    )

    this.bar_cases_deaths_background = this.add.sprite(this.bar_cases_deaths_x, this.bar_cases_deaths_y, "bar_background")
    this.bar_economy_background = this.add.sprite(this.bar_economy_x, this.bar_economy_y, "bar_background")
    this.bar_reserves_background = this.add.sprite(this.bar_reserves_x, this.bar_reserves_y, "bar_background")
    this.bar_sentiment_background = this.add.sprite(this.bar_sentiment_x, this.bar_sentiment_y, "bar_background")
    this.bar_competence_background = this.add.sprite(this.bar_competence_x, this.bar_competence_y, "bar_background")
    this.bar_transparency_background = this.add.sprite(this.bar_transparency_x, this.bar_transparency_y, "bar_background")
    this.bar_humanity_background = this.add.sprite(this.bar_humanity_x, this.bar_humanity_y, "bar_background")

    this.color_bar_healthy= this.add.sprite(this.bar_cases_deaths_x, this.bar_cases_deaths_y, "color_bar_healthy")
    this.color_bar_cases= this.add.sprite(this.bar_cases_deaths_x, this.bar_cases_deaths_y, "color_bar_cases")
    this.color_bar_deaths= this.add.sprite(this.bar_cases_deaths_x, this.bar_cases_deaths_y, "color_bar_deaths")

    this.color_bar_economy = this.add.sprite(this.bar_economy_x, this.bar_economy_y, "bar_deep_orange")
    this.color_bar_reserves = this.add.sprite(this.bar_reserves_x, this.bar_reserves_y, "bar_yellow")
    this.color_bar_sentiment = this.add.sprite(this.bar_sentiment_x, this.bar_sentiment_y, "bar_blue")
    this.color_bar_competence = this.add.sprite(this.bar_competence_x, this.bar_competence_y, "bar_red")
    this.color_bar_transparency = this.add.sprite(this.bar_transparency_x, this.bar_transparency_y, "bar_green")
    this.color_bar_humanity = this.add.sprite(this.bar_humanity_x, this.bar_humanity_y, "bar_pink")

    this.bar_cases_deaths = this.add.sprite(this.bar_cases_deaths_x, this.bar_cases_deaths_y, "bar_cases_deaths")
    this.bar_economy = this.add.sprite(this.bar_economy_x, this.bar_economy_y, "bar_economy")
    this.bar_reserves = this.add.sprite(this.bar_reserves_x, this.bar_reserves_y, "bar_reserves")
    this.bar_sentiment = this.add.sprite(this.bar_sentiment_x, this.bar_sentiment_y, "bar_sentiment")
    this.bar_competence = this.add.sprite(this.bar_competence_x, this.bar_competence_y, "bar_competence")
    this.bar_transparency = this.add.sprite(this.bar_transparency_x, this.bar_transparency_y, "bar_transparency")
    this.bar_humanity = this.add.sprite(this.bar_humanity_x, this.bar_humanity_y, "bar_humanity")

    this.add_main_stats_bars()


    for(var i = 0; i < this.stats_bars.length; i++){
      this.stats_bars[i].setOrigin(0,0.5)
    }
    for(var i = 0; i < this.stats_bars_large.length; i++){
      this.stats_bars_large[i].setScale(this.bar_stats_scale1)
    }
    for(var i = 0; i < this.stats_bars_small.length; i++){
      this.stats_bars_small[i].setScale(this.bar_stats_scale2)
    }


    var districtConnection = new DistrictInfo();
    this.district_connection = districtConnection.get_district_connection()



    //-------Create the play and pause button-------//
    this.play_pause_button = this.add.sprite(1280, 720, "pause")
    this.play_pause_button.setScale(0.3)
    this.play_pause_button.setOrigin(1,1)
    this.play_pause_button.setData("type","play_pause_button")
    this.play_pause_button.setInteractive()
    this.paused = 0


    //Create event listener
    this.input.on("gameobjectdown",this.process_click,this)

  }

  update(){
    //----------------------Update interactivity of icons----------------------//
    for(var i = 0; i < this.main_icons.length; i++){
      if(this.selected_district == "national"){
        this.main_icons[i].disableInteractive()
        this.main_icons[i].setAlpha(0.7)
      } else {
        //this.main_icons[i].setInteractive()
        this.main_icons[i].setAlpha(1)
      }
    }

    for(var i = 0; i < this.main_icons.length; i++){
      if(this.open_control_panel == 0 && this.opened_control_panel == 0){
        this.main_icons[i].setInteractive()
      }
    }

    //----------------------Send out alerts in the queue----------------------//
    if(this.alert_queue.length > 0 && this.open_alert_panel == 0 && this.opened_alert_panel == 0){
      this.send_alert(this.alert_queue[0][0],this.alert_queue[0][1])
      this.alert_queue = this.alert_queue.slice(1,this.alert_queue.length)
    }

    //----------------------Send out alerts for excesssive changes in lockdown orders----------------------//
    if(this.lockdown_mask_change_alert_sent == 0 && this.district_stats[this.selected_district]["infection_control"]["lockdown_mask_changes"] >= 4){
      this.send_alert(this.alerts_data["lockdown_mask_change_alert"],"red")
      this.lockdown_mask_change_alert_sent = 1
    }
    if(this.lockdown_crowd_change_alert_sent == 0 && this.district_stats[this.selected_district]["infection_control"]["lockdown_crowd_changes"] >= 4){
      this.send_alert(this.alerts_data["lockdown_crowd_change_alert"],"red")
      this.lockdown_crowd_change_alert_sent = 1
    }
    if(this.lockdown_stayhome_change_alert_sent == 0 && this.district_stats[this.selected_district]["infection_control"]["lockdown_stayhome_changes"] >= 4){
      this.send_alert(this.alerts_data["lockdown_stayhome_change_alert"],"red")
      this.lockdown_stayhome_change_alert_sent = 1
    }
    if(this.lockdown_city_change_alert_sent == 0 && this.district_stats[this.selected_district]["infection_control"]["lockdown_city_changes"] >= 4){
      this.send_alert(this.alerts_data["lockdown_city_change_alert"],"red")
      this.lockdown_city_change_alert_sent = 1
    }

    //----------------------Update the text indicating the selected district----------------------//
    if(this.selected_district.startsWith("d")){
      var selected_district_adjusted = "DISTRICT " + this.selected_district[this.selected_district.length-1]
      if(this.selected_district[this.selected_district.length-1] == "0"){
        selected_district_adjusted = "DISTRICT 10"
      }
    } else {
      var selected_district_adjusted = "NATIONAL"
    }

    this.selected_district_text.setText(selected_district_adjusted)

    //----------------------Send out the first alert reporting the disease----------------------//
    if(this.started_research == 0 &&
      (this.national_stats["infection_control"]["cases_diagnosed"] >= 5 ||
      this.national_stats["infection_control"]["deaths"] >= 3)) {
        this.send_alert(this.research_project_data["notice1"], "red")
        this.started_research = 1
        var new_research_project = {
          progress: 0,
          title: this.research_project_data["project1"],
          duration: this.research_project_data["duration1"],
          result: this.research_project_data["result1"],
          completed: 0
        }
        this.research_projects[this.research_projects.length] = new_research_project
    }

    //----------------------Progress the game forward----------------------//
    if(this.paused == 0){
      this.i += 1
    }
    this.day = Math.round(this.i / this.frame_rate)

    //----------------------Opening / Closing the various panels----------------------//
    //--------Action Panel--------//
    if(this.open_action_panel == 1){
      for(var i = 0; i < this.action_panel_components.length; i++){
        this.action_panel_components[i].y += this.descent_speed
      }
      if(this.action_panel.getLeftCenter().y > config.height/2){
        var displacement = this.action_panel.getLeftCenter().y - config.height/2
        for(var i = 0; i < this.action_panel_components.length; i++){
          this.action_panel_components[i].y -= displacement
          this.open_action_panel = 0
          this.opened_action_panel = 1
        }
      }
    }

    if(this.close_action_panel == 1){
      for(var i = 0; i < this.action_panel_components.length; i++){
        this.action_panel_components[i].y -= this.ascent_speed
      }
      if(this.action_panel.getBottomRight().y < 0){
        for(var i = 0; i < this.action_panel_components.length; i++){
          this.action_panel_components[i].destroy()
        }

        for(var i = 0; i < this.control_panel_components.length; i++){
          this.control_panel_components[i].setInteractive()
          if(this.testing_kit_developed == 0){
            this.icon_testing_improvement.disableInteractive()
            this.icon_testing_production.disableInteractive()
            this.icon_testing_import.disableInteractive()
          }
        }
        this.close_action_panel = 0
      }
      this.opened_action_panel = 0
    }

    //--------Cotrol Panel--------//
    if(this.open_control_panel == 1){

      for(var i = 0; i < this.control_panel_components.length; i++){
        this.control_panel_components[i].y += this.descent_speed
      }
      if(this.control_panel.getLeftCenter().y > config.height/2){
        var displacement = this.control_panel.getLeftCenter().y - config.height/2
        for(var i = 0; i < this.control_panel_components.length; i++){
          this.control_panel_components[i].y -= displacement
          this.open_control_panel = 0
          this.opened_control_panel = 1
        }
      }

    }

    if(this.close_control_panel == 1){
      for(var i = 0; i < this.control_panel_components.length; i++){
        this.control_panel_components[i].y -= this.ascent_speed
      }
      if(this.control_panel.getBottomRight().y < 0){
        for(var i = 0; i < this.control_panel_components.length; i++){
          this.control_panel_components[i].destroy()
        }
        this.close_control_panel = 0
        for(var i = 0; i < this.main_icons.length; i++){
          this.main_icons[i].setInteractive()
        }
        for(var i = 0; i < this.districts.length; i++){
          this.districts[i].setInteractive()
        }

      }
      this.opened_control_panel = 0
    }

    //--------Alert Panel--------//
    if(this.open_alert_panel == 1){
      for(var i = 0; i < this.alert_panel_components.length; i++){
        this.alert_panel_components[i].y += this.descent_speed
      }

      if(this.alert_panel.getLeftCenter().y > config.height/3){
        var displacement = this.alert_panel.getLeftCenter().y - config.height/3
        for(var i = 0; i < this.alert_panel_components.length; i++){
          this.alert_panel_components[i].y -= displacement
          this.opened_alert_panel = 1
          this.open_alert_panel = 0
        }
      }
    }

    if(this.close_alert_panel == 1){

      for(var i = 0; i < this.alert_panel_components.length; i++){
        this.alert_panel_components[i].y -= this.ascent_speed
      }
      if(this.alert_panel.getBottomRight().y < 0){
        for(var i = 0; i < this.alert_panel_components.length; i++){
          this.alert_panel_components[i].destroy()
        }
        this.close_alert_panel = 0
        this.opened_alert_panel = 0
      }

    }

    //--------Project Panel--------//
    if(this.open_project_panel == 1){
      for(var i = 0; i < this.project_panel_components.length; i++){
        this.project_panel_components[i].y += this.descent_speed
      }
      if(this.project_panel.getLeftCenter().y > config.height/2){
        var displacement = this.project_panel.getLeftCenter().y - config.height/2
        for(var i = 0; i < this.project_panel_components.length; i++){
          this.project_panel_components[i].y -= displacement
          this.open_project_panel = 0
          this.opened_project_panel = 1
        }
      }
    }

    if(this.close_project_panel == 1){
      for(var i = 0; i < this.project_panel_components.length; i++){
        this.project_panel_components[i].y -= this.ascent_speed
      }
      if(this.project_panel.getBottomRight().y < 0){
        for(var i = 0; i < this.project_panel_components.length; i++){
          this.project_panel_components[i].destroy()
        }
        this.close_project_panel = 0
      }
      this.opened_project_panel = 0
      for(var i = 0; i < this.control_panel_components.length; i++){
        this.control_panel_components[i].setInteractive() //bookmark
      }
    }

    //----------------------DAILY UPDATE TO PARAMETERS----------------------//
    if(this.i % this.frame_rate == this.frame_rate - 1 && this.paused == 0){
      //Log basic info
      var main_district_stats_2 = this.district_stats[this.selected_district]
      if(this.selected_district == "national"){
        main_district_stats_2 = this.national_stats
      }

      console.log(this.day +
      " total cases: "+Math.round(main_district_stats_2["infection_control"]["cases_actual"])+
      " deaths: "+Math.round(main_district_stats_2["infection_control"]["deaths"])+
      " hospitalized: "+Math.round(main_district_stats_2["infection_control"]["cases_hospitalized"])+
      " recovered: "+Math.round(main_district_stats_2["infection_control"]["cases_recovered"])+
      " active: "+Math.round(main_district_stats_2["infection_control"]["cases_active"])+
      " diagnosed: "+Math.round(main_district_stats_2["infection_control"]["cases_diagnosed"])+
      " error: "+Math.round(
        main_district_stats_2["infection_control"]["cases_actual"]-
      main_district_stats_2["infection_control"]["cases_recovered"]-main_district_stats_2["infection_control"]["deaths"]-
      main_district_stats_2["infection_control"]["cases_active"]-main_district_stats_2["infection_control"]["cases_hospitalized"])
      )
    }

    if(this.i % this.frame_rate == this.frame_rate - 1 && this.paused == 0){

      for(var i = 0; i < this.research_projects.length; i++){
        //-------------------Research-------------------//
        this.research_projects[i]["progress"] += this.research_rate

        if(this.research_projects[i]["progress"] >= this.research_projects[i]["duration"]){
          this.research_projects[i]["progress"] = this.research_projects[i]["duration"]
          if(this.research_projects[i]["completed"] == 0){
            this.send_alert(this.research_projects[i]["result"], "blue")

            if(this.research_projects[i]["title"] == this.research_project_data["project3"]) {
              this.send_alert("All districts start producing the new test. Production is slow due to lack of funds.", "green")
              for(var j = 0; j < this.district_keys.length; j++){
                this.district_stats[this.district_keys[j]]["infection_control"]["testing_production"] += 0.2
              }
              this.testing_kit_developed = 1
            }

            var project_index = this.research_projects.length + 1

            var new_research_project = {
              progress: 0,
              title: this.research_project_data["project"+project_index],
              duration: this.research_project_data["duration"+project_index],
              result: this.research_project_data["result"+project_index],
              completed: 0
            }
            this.research_projects[this.research_projects.length] = new_research_project
          }

          this.research_projects[i]["completed"] = 1
        }
      }

      //-------------------Construction-------------------//
      for(var i = 0; i < this.construction_projects.length; i++){
        //Construction progress
        if(this.construction_projects[i]["type"] == "hospital" && this.district_stats[this.construction_projects[i]["location"]]["economy"]["reserve"] > 0){
          this.construction_projects[i]["progress"] += 1
        }
        if(this.construction_projects[i]["type"] == "quarantine" && this.district_stats[this.construction_projects[i]["location"]]["economy"]["reserve"] > 0){
          this.construction_projects[i]["progress"] += 2
        }
        //Construction completed
        if(this.construction_projects[i]["progress"] >= 100){
          this.construction_projects[i]["progress"] = 100
          if(this.construction_projects[i]["completed"] == 0){
            this.construction_projects[i]["completed"] = 1

            if(this.construction_projects[i]["type"] == "hospital"){
              this.send_alert("Hospital construction complete. Hospital capacity increased.","green")
              this.district_stats[this.selected_district]["infection_control"]["hospital_capacity"] += 15
              this.district_stats[this.selected_district]["economy"]["expense"] -= this.hospital_construction_expense
            }
            if(this.construction_projects[i]["type"] == "quarantine"){
              this.send_alert("Quarantine facility construction complete. Quarantine capacity increased.","green")
              this.district_stats[this.selected_district]["infection_control"]["quarantine_capacity"] += 25
              this.district_stats[this.selected_district]["economy"]["expense"] -= this.quarantine_construction_expense
            }
          }
        }
      }

      //-------------------Testing-------------------//
      for(var i = 0; i < this.district_keys.length; i++){
        var this_district_key = this.district_keys[i]
        var this_district_stats = this.district_stats[this_district_key]
        this_district_stats["infection_control"]["testing_capacity"] += this_district_stats["infection_control"]["testing_production"]

        if(this_district_stats["infection_control"]["testing_capacity"] >= 100 && this_district_stats["infection_control"]["testing_max_reached"] == 0){
          this_district_stats["infection_control"]["testing_capacity"] = 100
          this_district_stats["infection_control"]["testing_max_reached"] = 1
          this_district_stats["economy"]["expense"] -= this.testing_production_expenses
          this.send_alert("Testing capacity is at maximum. No individual will go undiagnosed.","green")
        }
      }

      //-------------------Economy-------------------//
      for(var i = 0; i < this.district_keys.length; i++){
        var district_stats = this.district_stats[this.district_keys[i]]

        district_stats["economy"]["reserve"] += district_stats["economy"]["production"] * this.income_factor / 100
        if(district_stats["economy"]["reserve"] >= 100){
          district_stats["economy"]["reserve"] = 100
        }
        district_stats["economy"]["reserve"] -= district_stats["economy"]["expense"] * this.expense_factor / 100
        if(district_stats["economy"]["reserve"] <= 0){
          district_stats["economy"]["reserve"] = 0
          //this.stop_projects = 1
        } else {
          //this.stop_projects = 0
        }
      }

      //-------------------Infection control: inter-district spread-------------------//
      for(var i = 0; i < this.district_keys.length; i++){
        var this_district_key = this.district_keys[i]
        var this_district_stats = this.district_stats[this_district_key]

        for(var j = 0; j < this.district_keys.length; j++){
          var that_district_key = this.district_keys[j]
          var that_district_stats = this.district_stats[that_district_key]

          var this_to_that = this.district_connection[this_district_key][that_district_key] *
          this_district_stats["infection_control"]["cases_active"]/(this_district_stats["population"]*this.population_factor)

          var that_to_this = this.district_connection[that_district_key][this_district_key] *
          that_district_stats["infection_control"]["cases_active"]/(that_district_stats["population"]*this.population_factor)


          this_district_stats["infection_control"]["cases_active"] -= this_to_that
          this_district_stats["infection_control"]["cases_active"] += that_to_this
          that_district_stats["infection_control"]["cases_active"] += this_to_that
          that_district_stats["infection_control"]["cases_active"] -= that_to_this

          this_district_stats["infection_control"]["cases_actual"] -= this_to_that
          this_district_stats["infection_control"]["cases_actual"] += that_to_this
          that_district_stats["infection_control"]["cases_actual"] += this_to_that
          that_district_stats["infection_control"]["cases_actual"] -= that_to_this

        }
      }

      //-------------------Infection Control: within-district spread-------------------//
      for(var i = 0; i < this.district_keys.length; i++){

        var district_stats = this.district_stats[this.district_keys[i]]

        this.true_hospital_recovery_rate = this.base_hospital_recovery_rate + 0.5 - 50000 / ( district_stats["infection_control"]["cases_recovered"] + 100000)

        var hospital_recovery =
        district_stats["infection_control"]["cases_hospitalized"] *
        ((
          district_stats["infection_control"]["hospital_capacity"] -
          district_stats["infection_control"]["cases_hospitalized"] * district_stats["infection_control"]["hospital_capacity_factor"]
        ) * this.hospital_recovery_rate_factor + this.true_hospital_recovery_rate)

        var active_recovery = district_stats["infection_control"]["cases_active"] * this.recovery_rate

        var hospital_deaths = district_stats["infection_control"]["cases_hospitalized"] * district_stats["infection_control"]["death_rate"]

        var active_deaths = district_stats["infection_control"]["cases_active"] *  this.death_rate

        var spare_capacity = (district_stats["infection_control"]["hospital_capacity"] - district_stats["infection_control"]["cases_hospitalized"] * district_stats["infection_control"]["hospital_capacity_factor"])

        var new_hospitalization_1 = district_stats["infection_control"]["cases_active"] * spare_capacity /100
        var new_hospitalization_2 = spare_capacity / district_stats["infection_control"]["hospital_capacity_factor"]
        if(new_hospitalization_1 < new_hospitalization_2) {
          var new_hospitalization = new_hospitalization_1
        } else {
          var new_hospitalization = new_hospitalization_2
        }

        district_stats["infection_control"]["cases_recovered"] += (hospital_recovery + active_recovery)

        district_stats["infection_control"]["deaths"] += (hospital_deaths + active_deaths)

        district_stats["infection_control"]["cases_active"] -= active_recovery
        district_stats["infection_control"]["cases_active"] -= active_deaths
        district_stats["infection_control"]["cases_active"] -= new_hospitalization

        district_stats["infection_control"]["cases_hospitalized"] += new_hospitalization
        district_stats["infection_control"]["cases_hospitalized"] -= hospital_deaths
        district_stats["infection_control"]["cases_hospitalized"] -= hospital_recovery

        if(district_stats["infection_control"]["cases_active"]<=0){
          district_stats["infection_control"]["cases_active"] = 0
        }
        if(district_stats["infection_control"]["cases_hospitalized"]<=0){
          district_stats["infection_control"]["cases_hospitalized"] = 0
        }

        var total_population = district_stats["population"] * this.population_factor

        var remaining_population =  total_population - district_stats["infection_control"]["deaths"] -
        district_stats["infection_control"]["cases_hospitalized"] - district_stats["infection_control"]["cases_active"]
        - district_stats["infection_control"]["cases_recovered"] * this.immunity_proportion

        if(remaining_population / total_population <= 0.8){

          var r_adjusted = district_stats["infection_control"]["r"] * (remaining_population / total_population)  * this.r_adjustment_factor

          district_stats["infection_control"]["cases_actual"] += district_stats["infection_control"]["cases_active"] * r_adjusted
          district_stats["infection_control"]["cases_active"] += district_stats["infection_control"]["cases_active"] * r_adjusted

        } else {
          district_stats["infection_control"]["cases_actual"] += district_stats["infection_control"]["cases_active"] * district_stats["infection_control"]["r"] //* this.r_adjustment_factor
          district_stats["infection_control"]["cases_active"] += district_stats["infection_control"]["cases_active"] * district_stats["infection_control"]["r"] //* this.r_adjustment_factor

        }
        district_stats["infection_control"]["cases_diagnosed"] = district_stats["infection_control"]["cases_active"] * district_stats["infection_control"]["testing_capacity"]
      }

      //-------------------Limit stats below 100-------------------//

      if(this.research_funding >= 100){
        this.research_funding = 100
      }

      for(var i = 0; i < this.district_keys.length; i++){
        var district_stats = this.district_stats[this.district_keys[i]]
        if(district_stats["infection_control"]["hospital_capacity"] >= 100){
          district_stats["infection_control"]["hospital_capacity"] = 100
        }
        if(district_stats["infection_control"]["quarantine_capacity"] >= 100){
          district_stats["infection_control"]["quarantine_capacity"] = 100
        }
        if(district_stats["infection_control"]["hcw_capacity"] >= 100){
          district_stats["infection_control"]["hcw_capacity"] = 100
        }
        if(district_stats["infection_control"]["testing_capacity"] >= 100){
          district_stats["infection_control"]["testing_capacity"] = 100
        }
        if(district_stats["sentiment"]["competence"] >= 100){
          district_stats["sentiment"]["competence"] = 100
        }
        if(district_stats["sentiment"]["transparency"] >= 100){
          district_stats["sentiment"]["transparency"] = 100
        }
        if(district_stats["sentiment"]["humanity"] >= 100){
          district_stats["sentiment"]["humanity"] = 100
        }

        if(district_stats["economy"]["production"] >= 100){
          district_stats["economy"]["production"] = 100
        }
        if(district_stats["economy"]["reserve"] >= 100){
          district_stats["economy"]["reserve"] = 100
        }
      }

      //-------------------Update to nataional stats-------------------//

      this.national_stats = {
        population: 0,
        infection_control: {
          cases_actual: 0,
          cases_diagnosed: 0,
          cases_active: 0,
          cases_hospitalized: 0,
          cases_recovered: 0,
          deaths: 0,
          quarantined: 0,
          r: 1.1,
          hospital_capacity: 0,
          quarantine_capacity: 0,
          hcw_capacity: 0,
          hcw_pay: 50,
          testing_capacity: 0.01,
          testing_production: 0,
          lockdown_mask: false,
          lockdown_crowd: false,
          lockdown_stayhome: false,
          lockdown_city: false
        },
        stability: {
          police_presence: 30,
          military_presence: 0
        },
        sentiment: {
          competence: 0,
          transparency: 0,
          humanity: 0,
          sentiment: 0.8*0.8*0.8*this.sentiment_factor
        },
        economy: {
          production: 0,
          tax: 0.08,
          reserve: 0,
          expense: 0
        }
      }

      for(var i = 0; i < this.district_keys.length; i++){
        var district_stats = this.district_stats[this.district_keys[i]]
        this.national_stats["population"] += district_stats["population"]
        this.national_stats["infection_control"]["cases_actual"] += district_stats["infection_control"]["cases_actual"]
        this.national_stats["infection_control"]["cases_diagnosed"] += district_stats["infection_control"]["cases_diagnosed"]
        this.national_stats["infection_control"]["cases_active"] += district_stats["infection_control"]["cases_active"]
        this.national_stats["infection_control"]["cases_hospitalized"] += district_stats["infection_control"]["cases_hospitalized"]
        this.national_stats["infection_control"]["cases_recovered"] += district_stats["infection_control"]["cases_recovered"]
        this.national_stats["infection_control"]["deaths"] += district_stats["infection_control"]["deaths"]
        this.national_stats["infection_control"]["quarantined"] += district_stats["infection_control"]["quarantined"]

        this.national_stats["economy"]["reserve"] += district_stats["economy"]["reserve"]/10
        this.national_stats["economy"]["production"] += district_stats["economy"]["production"]/10
        this.national_stats["economy"]["expense"] += district_stats["economy"]["expense"]/10

        this.national_stats["sentiment"]["competence"] += district_stats["sentiment"]["competence"]/10
        this.national_stats["sentiment"]["transparency"] += district_stats["sentiment"]["transparency"]/10
        this.national_stats["sentiment"]["humanity"] += district_stats["sentiment"]["humanity"]/10
      }
    }

    //----------------------Updates for the icons in infection control----------------------//
    if( (this.open_control_panel == 1 || this.opened_control_panel == 1) && this.selected_icon == "infection_control"){

      var selected_district_stats = this.district_stats[this.selected_district]
      if(selected_district_stats["infection_control"]["lockdown_mask"] == true){
        this.icon_lockdown_mask.setTexture("lockdown_mask_red")
      } else {
        this.icon_lockdown_mask.setTexture("lockdown_mask")
      }

      if(selected_district_stats["infection_control"]["lockdown_crowd"] == true){
        this.icon_lockdown_crowd.setTexture("lockdown_crowd_red")
      } else {
        this.icon_lockdown_crowd.setTexture("lockdown_crowd")
      }

      if(selected_district_stats["infection_control"]["lockdown_stayhome"] == true){
        this.icon_lockdown_stayhome.setTexture("lockdown_stayhome_red")
      } else {
        this.icon_lockdown_stayhome.setTexture("lockdown_stayhome")
      }

      if(selected_district_stats["infection_control"]["lockdown_city"] == true){
        this.icon_lockdown_city.setTexture("lockdown_city_red")
      } else {
        this.icon_lockdown_city.setTexture("lockdown_city")
      }

      if(this.testing_kit_developed == 1){
        this.icon_testing_improvement.setAlpha(1)
        this.icon_testing_production.setAlpha(1)
        this.icon_testing_import.setAlpha(1)
      }

    }

    //----------------------Updates for the bars----------------------//
    if(this.opened_control_panel == 1 || this.open_control_panel == 1){
      if(this.selected_icon == "infection_control"){
        this.selected_stats = this.district_stats[this.selected_district]

        this.color_bar_hospital_capacity.setScale(this.selected_stats["infection_control"]["hospital_capacity"] * this.control_panel_bar_scale /100,this.control_panel_bar_scale)
        this.color_bar_quarantine_capacity.setScale(this.selected_stats["infection_control"]["quarantine_capacity"] * this.control_panel_bar_scale /100,this.control_panel_bar_scale)
        this.color_bar_hcw_capacity.setScale(this.selected_stats["infection_control"]["hcw_capacity"] * this.control_panel_bar_scale /100,this.control_panel_bar_scale)
        this.color_bar_testing_capacity.setScale(this.selected_stats["infection_control"]["testing_capacity"] * this.control_panel_bar_scale /100,this.control_panel_bar_scale)

        var lockdown_level = 0
        if(this.selected_stats["infection_control"]["lockdown_city"]==true){
          lockdown_level = 4
        } else if (this.selected_stats["infection_control"]["lockdown_stayhome"]==1) {
          lockdown_level = 3
        } else {
          lockdown_level = this.selected_stats["infection_control"]["lockdown_mask"] + this.selected_stats["infection_control"]["lockdown_crowd"]
        }

        this.color_bar_lockdown_level.setScale(lockdown_level/4 * this.control_panel_bar_scale,this.control_panel_bar_scale)

        this.color_bar_research_funding.setScale(this.research_funding * this.control_panel_bar_scale/100,this.control_panel_bar_scale)
      }
    }

    //----------------------Updates for the main bars----------------------//
    var main_district_stats = this.district_stats[this.selected_district]
    if(this.selected_district == "national"){
      main_district_stats = this.national_stats
    }
    this.color_bar_deaths.setScale(
      main_district_stats["infection_control"]["deaths"]*this.bar_stats_scale1 / (main_district_stats["population"]*this.population_factor),
      this.bar_stats_scale1
    )

    this.color_bar_cases.setScale(
      (main_district_stats["infection_control"]["deaths"] + main_district_stats["infection_control"]["cases_active"])*this.bar_stats_scale1
       / (main_district_stats["population"]*this.population_factor),
      this.bar_stats_scale1
    )

    this.cases_text.setText(
      "CASES: " + Math.round(this.district_stats[this.selected_district]["infection_control"]["cases_diagnosed"])
    )
    this.deaths_text.setText(
      "DEATHS: " + Math.round(
        this.district_stats[this.selected_district]["infection_control"]["deaths"] *
        this.district_stats[this.selected_district]["infection_control"]["testing_capacity"]
      )
    )

    this.color_bar_economy.setScale(main_district_stats["economy"]["production"]*this.bar_stats_scale1/100, this.bar_stats_scale1)
    this.color_bar_reserves.setScale(main_district_stats["economy"]["reserve"]*this.bar_stats_scale1/100, this.bar_stats_scale1)
    this.color_bar_sentiment.setScale(main_district_stats["sentiment"]["sentiment"]*this.bar_stats_scale1/100, this.bar_stats_scale1)

    this.color_bar_competence.setScale(main_district_stats["sentiment"]["competence"]*this.bar_stats_scale2/100, this.bar_stats_scale2)
    this.color_bar_transparency.setScale(main_district_stats["sentiment"]["transparency"]*this.bar_stats_scale2/100, this.bar_stats_scale2)
    this.color_bar_humanity.setScale(main_district_stats["sentiment"]["humanity"]*this.bar_stats_scale2/100, this.bar_stats_scale2)


    for(var i = 0; i < this.districts_red.length; i++){
      var total_diseased =
      this.district_stats["district"+(i+1)]["infection_control"]["deaths"] + this.district_stats["district"+(i+1)]["infection_control"]["cases_active"]
      var population = this.district_stats["district"+(i+1)]["population"] * this.population_factor
      //console.log(total_diseased/population)
      this.districts_red[i].setAlpha(total_diseased/population)
    }

    if(this.open_project_panel == 1 || this.opened_project_panel == 1){
      for(var i = 0; i < this.color_progress_bars.length; i++){
        this.color_progress_bars[i].setScale(
          this.selected_projects[i]["progress"] * this.progress_bar_scale / this.selected_projects[i]["duration"],
          this.progress_bar_scale
        )
        if(this.selected_projects[i]["completed"] == 1){
          this.progress_bars[i].setTexture("bar_completed")
        }
      }
    }



  }
}

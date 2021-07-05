class DistrictInfo {
  constructor(){

  }
  get_district_connection(){
    return {
      district1: {
        district1: 0,
        district2: 0,
        district3: 0,
        district4: 0,
        district5: 0,
        district6: 0,
        district7: 0,
        district8: 0,
        district9: 0,
        district10: 0,
      },
      district2: {
        district1: 0,
        district2: 0,
        district3: 0,
        district4: 0,
        district5: 3000,
        district6: 0,
        district7: 0,
        district8: 0,
        district9: 0,
        district10: 0,
      },
      district3: {
        district1: 0,
        district2: 0,
        district3: 0,
        district4: 0,
        district5: 0,
        district6: 0,
        district7: 1200,
        district8: 0,
        district9: 0,
        district10: 0,
      },
      district4: {
        district1: 0,
        district2: 0,
        district3: 0,
        district4: 0,
        district5: 4000,
        district6: 0,
        district7: 0,
        district8: 0,
        district9: 0,
        district10: 0,
      },
      district5: {
        district1: 0,
        district2: 3000,
        district3: 0,
        district4: 4000,
        district5: 0,
        district6: 5000,
        district7: 0,
        district8: 2500,
        district9: 2000,
        district10: 0,
      },
      district6: {
        district1: 0,
        district2: 0,
        district3: 0,
        district4: 0,
        district5: 5000,
        district6: 0,
        district7: 0,
        district8: 0,
        district9: 0,
        district10: 1000,
      },
      district7: {
        district1: 0,
        district2: 0,
        district3: 1200,
        district4: 0,
        district5: 0,
        district6: 0,
        district7: 0,
        district8: 0,
        district9: 0,
        district10: 0,
      },
      district8: {
        district1: 0,
        district2: 0,
        district3: 0,
        district4: 0,
        district5: 2500,
        district6: 0,
        district7: 0,
        district8: 0,
        district9: 0,
        district10: 0,
      },
      district9: {
        district1: 0,
        district2: 0,
        district3: 0,
        district4: 0,
        district5: 2000,
        district6: 0,
        district7: 0,
        district8: 0,
        district9: 0,
        district10: 0,
      },
      district10: {
        district1: 0,
        district2: 0,
        district3: 0,
        district4: 0,
        district5: 0,
        district6: 0,
        district7: 0,
        district8: 0,
        district9: 0,
        district10: 1000,
      }
    }
  }

  set_district_stats(){
    this.district1_stats = {
      population: 115,
      infection_control: {
        cases_actual: 0,
        cases_diagnosed: 0,
        cases_active: 0,
        cases_hospitalized: 0,
        cases_recovered: 0,
        death_rate: 0.05,
        deaths: 0,
        quarantined: 0,
        r: 1.2,
        hospital_capacity: 30,
        hospital_capacity_factor: 0.0005,
        quarantine_capacity: 10,
        hcw_capacity: 30,
        hcw_pay: 50,
        testing_capacity: 0.1,
        testing_production: 0,
        testing_max_reached: 0,
        lockdown_mask: false,
        lockdown_crowd: false,
        lockdown_stayhome: false,
        lockdown_city: false,
        lockdown_mask_changes: 0,
        lockdown_crowd_changes: 0,
        lockdown_stayhome_changes: 0,
        lockdown_city_changes: 0
      },
      stability: {
        police_presence: 30,
        military_presence: 0
      },
      sentiment: {
        competence: 80,
        transparency: 80,
        humanity: 80,
        sentiment: 0.8*0.8*0.8*this.sentiment_factor
      },
      economy: {
        production: 80,
        tax: 0.1,
        reserve: 70,
        expense: 40
      }


    }
    this.district2_stats = {
      population: 235,
      infection_control: {
        cases_actual: 0,
        cases_diagnosed: 0,
        cases_active: 0,
        cases_hospitalized: 0,
        cases_recovered: 0,
        death_rate: 0.05,
        deaths: 0,
        quarantined: 0,
        r: 1.3,
        hospital_capacity: 30,
        hospital_capacity_factor: 0.0005,
        quarantine_capacity: 10,
        hcw_capacity: 30,
        hcw_pay: 50,
        testing_capacity: 0.1,
        testing_production: 0,
        testing_max_reached: 0,
        lockdown_mask: false,
        lockdown_crowd: false,
        lockdown_stayhome: false,
        lockdown_city: false,
        lockdown_mask_changes: 0,
        lockdown_crowd_changes: 0,
        lockdown_stayhome_changes: 0,
        lockdown_city_changes: 0
      },
      stability: {
        police_presence: 30,
        military_presence: 0
      },
      sentiment: {
        competence: 80,
        transparency: 80,
        humanity: 80,
        sentiment: 0.8*0.8*0.8*this.sentiment_factor
      },
      economy: {
        production: 80,
        tax: 0.1,
        reserve: 70,
        expense: 40
      }
    }
    this.district3_stats = {
      population: 76,
      infection_control: {
        cases_actual: 0,
        cases_diagnosed: 0,
        cases_active: 0,
        cases_hospitalized: 0,
        cases_recovered: 0,
        death_rate: 0.05,
        deaths: 0,
        quarantined: 0,
        r: 1.2,
        hospital_capacity: 30,
        hospital_capacity_factor: 0.0005,
        quarantine_capacity: 10,
        hcw_capacity: 30,
        hcw_pay: 50,
        testing_capacity: 0.1,
        testing_production: 0,
        testing_max_reached: 0,
        lockdown_mask: false,
        lockdown_crowd: false,
        lockdown_stayhome: false,
        lockdown_city: false,
        lockdown_mask_changes: 0,
        lockdown_crowd_changes: 0,
        lockdown_stayhome_changes: 0,
        lockdown_city_changes: 0
      },
      stability: {
        police_presence: 30,
        military_presence: 0
      },
      sentiment: {
        competence: 80,
        transparency: 80,
        humanity: 80,
        sentiment: 0.8*0.8*0.8*this.sentiment_factor
      },
      economy: {
        production: 80,
        tax: 0.1,
        reserve: 70,
        expense: 40
      }
    }
    this.district4_stats = {
      population: 265,
      infection_control: {
        cases_actual: 0,
        cases_diagnosed: 0,
        cases_active: 0,
        cases_hospitalized: 0,
        cases_recovered: 0,
        death_rate: 0.05,
        deaths: 0,
        quarantined: 0,
        r: 1.4,
        hospital_capacity: 30,
        hospital_capacity_factor: 0.0005,
        quarantine_capacity: 10,
        hcw_capacity: 30,
        hcw_pay: 50,
        testing_capacity: 0.1,
        testing_production: 0,
        testing_max_reached: 0,
        lockdown_mask: false,
        lockdown_crowd: false,
        lockdown_stayhome: false,
        lockdown_city: false,
        lockdown_mask_changes: 0,
        lockdown_crowd_changes: 0,
        lockdown_stayhome_changes: 0,
        lockdown_city_changes: 0
      },
      stability: {
        police_presence: 30,
        military_presence: 0
      },
      sentiment: {
        competence: 80,
        transparency: 80,
        humanity: 80,
        sentiment: 0.8*0.8*0.8*this.sentiment_factor
      },
      economy: {
        production: 80,
        tax: 0.1,
        reserve: 70,
        expense: 40
      }
    }
    this.district5_stats = {
      population: 538,
      infection_control: {
        cases_actual: 0,
        cases_diagnosed: 0,
        cases_active: 0,
        cases_hospitalized: 0,
        cases_recovered: 0,
        death_rate: 0.05,
        deaths: 0,
        quarantined: 0,
        r: 1.4,
        hospital_capacity: 30,
        hospital_capacity_factor: 0.0005,
        quarantine_capacity: 10,
        hcw_capacity: 30,
        hcw_pay: 50,
        testing_capacity: 0.1,
        testing_production: 0,
        testing_max_reached: 0,
        lockdown_mask: false,
        lockdown_crowd: false,
        lockdown_stayhome: false,
        lockdown_city: false,
        lockdown_mask_changes: 0,
        lockdown_crowd_changes: 0,
        lockdown_stayhome_changes: 0,
        lockdown_city_changes: 0
      },
      stability: {
        police_presence: 30,
        military_presence: 0
      },
      sentiment: {
        competence: 80,
        transparency: 80,
        humanity: 80,
        sentiment: 0.8*0.8*0.8*this.sentiment_factor
      },
      economy: {
        production: 90,
        tax: 0.2,
        reserve: 70,
        expense: 40
      }
    }
    this.district6_stats = {
      population: 519,
      infection_control: {
        cases_actual: 0,
        cases_diagnosed: 0,
        cases_active: 0,
        cases_hospitalized: 0,
        cases_recovered: 0,
        death_rate: 0.05,
        deaths: 0,
        quarantined: 0,
        r: 2,
        hospital_capacity: 30,
        hospital_capacity_factor: 0.0005,
        quarantine_capacity: 10,
        hcw_capacity: 30,
        hcw_pay: 50,
        testing_capacity: 0.1,
        testing_production: 0,
        testing_max_reached: 0,
        lockdown_mask: false,
        lockdown_crowd: false,
        lockdown_stayhome: false,
        lockdown_city: false,
        lockdown_mask_changes: 0,
        lockdown_crowd_changes: 0,
        lockdown_stayhome_changes: 0,
        lockdown_city_changes: 0
      },
      stability: {
        police_presence: 30,
        military_presence: 0
      },
      sentiment: {
        competence: 80,
        transparency: 80,
        humanity: 80,
        sentiment: 0.8*0.8*0.8*this.sentiment_factor
      },
      economy: {
        production: 80,
        tax: 0.18,
        reserve: 70,
        expense: 40
      }
    }
    this.district7_stats = {
      population: 212,
      infection_control: {
        cases_actual: 0,
        cases_diagnosed: 0,
        cases_active: 0,
        cases_hospitalized: 0,
        cases_recovered: 0,
        death_rate: 0.05,
        deaths: 0,
        quarantined: 0,
        r: 1.2,
        hospital_capacity: 30,
        hospital_capacity_factor: 0.0005,
        quarantine_capacity: 10,
        hcw_capacity: 30,
        hcw_pay: 50,
        testing_capacity: 0.1,
        testing_production: 0,
        testing_max_reached: 0,
        lockdown_mask: false,
        lockdown_crowd: false,
        lockdown_stayhome: false,
        lockdown_city: false,
        lockdown_mask_changes: 0,
        lockdown_crowd_changes: 0,
        lockdown_stayhome_changes: 0,
        lockdown_city_changes: 0
      },
      stability: {
        police_presence: 30,
        military_presence: 0
      },
      sentiment: {
        competence: 80,
        transparency: 80,
        humanity: 80,
        sentiment: 0.8*0.8*0.8*this.sentiment_factor
      },
      economy: {
        production: 77,
        tax: 0.1,
        reserve: 70,
        expense: 40
      }
    }
    this.district8_stats = {
      population: 330,
      infection_control: {
        cases_actual: 0,
        cases_diagnosed: 0,
        cases_active: 0,
        cases_hospitalized: 0,
        cases_recovered: 0,
        death_rate: 0.05,
        deaths: 0,
        quarantined: 0,
        r: 1.3,
        hospital_capacity: 30,
        hospital_capacity_factor: 0.0005,
        quarantine_capacity: 10,
        hcw_capacity: 30,
        hcw_pay: 50,
        testing_capacity: 0.1,
        testing_production: 0,
        testing_max_reached: 0,
        lockdown_mask: false,
        lockdown_crowd: false,
        lockdown_stayhome: false,
        lockdown_city: false,
        lockdown_mask_changes: 0,
        lockdown_crowd_changes: 0,
        lockdown_stayhome_changes: 0,
        lockdown_city_changes: 0
      },
      stability: {
        police_presence: 30,
        military_presence: 0
      },
      sentiment: {
        competence: 80,
        transparency: 80,
        humanity: 80,
        sentiment: 0.8*0.8*0.8*this.sentiment_factor
      },
      economy: {
        production: 72,
        tax: 0.1,
        reserve: 70,
        expense: 40
      }
    }
    this.district9_stats = {
      population: 177,
      infection_control: {
        cases_actual: 0,
        cases_diagnosed: 0,
        cases_active: 0,
        cases_hospitalized: 0,
        cases_recovered: 0,
        death_rate: 0.05,
        deaths: 0,
        quarantined: 0,
        r: 1.3,
        hospital_capacity: 30,
        hospital_capacity_factor: 0.0005,
        quarantine_capacity: 10,
        hcw_capacity: 30,
        hcw_pay: 50,
        testing_capacity: 0.1,
        testing_production: 0,
        testing_max_reached: 0,
        lockdown_mask: false,
        lockdown_crowd: false,
        lockdown_stayhome: false,
        lockdown_city: false,
        lockdown_mask_changes: 0,
        lockdown_crowd_changes: 0,
        lockdown_stayhome_changes: 0,
        lockdown_city_changes: 0
      },
      stability: {
        police_presence: 30,
        military_presence: 0
      },
      sentiment: {
        competence: 80,
        transparency: 80,
        humanity: 80,
        sentiment: 0.8*0.8*0.8*this.sentiment_factor
      },
      economy: {
        production: 83,
        tax: 0.1,
        reserve: 70,
        expense: 40
      }
    }
    this.district10_stats = {
      population: 69,
      infection_control: {
        cases_actual: 0,
        cases_diagnosed: 0,
        cases_active: 0,
        cases_hospitalized: 0,
        cases_recovered: 0,
        death_rate: 0.05,
        deaths: 0,
        quarantined: 0,
        r: 1.2,
        hospital_capacity: 30,
        hospital_capacity_factor: 0.0005,
        quarantine_capacity: 10,
        hcw_capacity: 30,
        hcw_pay: 50,
        testing_capacity: 0.1,
        testing_production: 0,
        testing_max_reached: 0,
        lockdown_mask: false,
        lockdown_crowd: false,
        lockdown_stayhome: false,
        lockdown_city: false,
        lockdown_mask_changes: 0,
        lockdown_crowd_changes: 0,
        lockdown_stayhome_changes: 0,
        lockdown_city_changes: 0
      },
      stability: {
        police_presence: 30,
        military_presence: 0
      },
      sentiment: {
        competence: 80,
        transparency: 80,
        humanity: 80,
        sentiment: 0.8*0.8*0.8*this.sentiment_factor
      },
      economy: {
        production: 67,
        tax: 0.08,
        reserve: 70,
        expense: 40
      }
    }
    this.national_stats = {
      population: 0,
      infection_control: {
        cases_actual: 0,
        cases_diagnosed: 0,
        cases_active: 0,
        cases_hospitalized: 0,
        cases_recovered: 0,
        death_rate: 0.05,
        deaths: 0,
        quarantined: 0,
        r: 1.2,
        hospital_capacity: 30,
        quarantine_capacity: 10,
        hcw_capacity: 30,
        hcw_pay: 50,
        testing_capacity: 0.1,
        testing_production: 0,
        testing_max_reached: 0,
        lockdown_mask: false,
        lockdown_crowd: false,
        lockdown_stayhome: false,
        lockdown_city: false,
        lockdown_mask_changes: 0,
        lockdown_crowd_changes: 0,
        lockdown_stayhome_changes: 0,
        lockdown_city_changes: 0
      },
      stability: {
        police_presence: 30,
        military_presence: 0
      },
      sentiment: {
        competence: 80,
        transparency: 80,
        humanity: 80,
        sentiment: 0.8*0.8*0.8*this.sentiment_factor
      },
      economy: {
        production: 67,
        tax: 0.08,
        reserve: 53,
        expense: 40
      }
    }

  }



}

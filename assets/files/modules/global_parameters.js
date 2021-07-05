class GlobalParams {
  constructor(){

  }

  setGlobalParams(){
    //Disease spread//
    this.recovery_rate = 0.015 //* this.adjustment_factor
    this.death_rate = 0.003 //* this.adjustment_factor
    this.hospital_recovery_benefit = 0.000001
    this.hospital_recovery_rate_factor = 0.01 //* this.adjustment_factor
    this.base_hospital_recovery_rate = 0.02 //* this.adjustment_factor
    this.immunity_proportion = 0.1
    this.r_adjustment_factor = 1 / 10

    //this.death_testing_factor //Deaths are more likely to raise alarm and be considered as caused by the new virus

    //Research
    this.research_funding = 10
    this.research_rate = 1.7
    this.rate_to_funding_ratio = 0.09

    //Economy//
    this.income_factor = 3
    this.expense_factor = 3
    this.hospital_construction_expense = 35
    this.quarantine_construction_expense = 20

    //sentiment
    this.sentiment_factor = 80/(0.8*0.8*0.8)

    //Others
    this.population_factor = 10000
  }




}

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": "Are we getting better?",
  "width": 800,
  "height": 600,
  "params": [
  {
   "name": "Time_above",
  "value": 0,
  "bind": {
  "input": "range",
  "min": 1966,
  "max": 2019,
  "step": 1,
  "name": "Time range: "
 }
 }
  ],
  "layer": [
   { 
  "data": {
    "url": "https://raw.githubusercontent.com/edengriffithsuni/FIT3179/main/data/BP%20data%20with%20CO2%20per%20KWh%20pivoted.csv"},
  "mark": "line",
  "encoding": {
    "x": {"field": "Year", "type": "temporal"},
    "y": {"field": "Australia", "title": "Australia: CO2/KWh", "type": "quantitative"}
  }
  },
   { 
  "data": {
    "url": "https://raw.githubusercontent.com/edengriffithsuni/FIT3179/main/data/BP%20data%20with%20CO2%20per%20KWh%20pivoted.csv"},
  "mark": "line",
  "encoding": {
    "x": {"field": "Year", "type": "temporal"},
    "y": {"field": "United States of America", "title": "Australia: CO2/KWh", "type": "quantitative"}
  }
  },
   { 
  "data": {
    "url": "https://raw.githubusercontent.com/edengriffithsuni/FIT3179/main/data/BP%20data%20with%20CO2%20per%20KWh%20pivoted.csv"},
  "mark": "line",
  "encoding": {
    "x": {"field": "Year", "type": "temporal"},
    "y": {"field": "United Kingdom", "title": "Australia: CO2/KWh", "type": "quantitative"}
  },
  "transform": [
    {"filter": "datum.Year > Time_above"}
  ]
  }
  ]
}
